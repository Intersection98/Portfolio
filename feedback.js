/* Shared, gesture-driven feedback. No sound or animation loop runs at page load. */
const UIFeedback = (() => {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    const motions = new Set();
    const cardMotions = new WeakMap();
    const voices = new Set();
    let enabled = true, unlocked = false, context, master, toggle;
    let meterTimer, pressed = null;
    try { enabled = localStorage.getItem('fn-sound') !== 'off'; } catch (_) { /* Optional storage. */ }

    function syncToggle() {
        if (!toggle) return;
        toggle.setAttribute('aria-pressed', String(enabled));
        toggle.title = enabled ? '关闭界面音效' : '开启界面音效';
    }

    function silence() {
        voices.forEach(oscillator => {
            try { oscillator.stop(); } catch (_) { /* Already ended. */ }
        });
        clearTimeout(meterTimer);
        toggle?.classList.remove('sounding');
    }

    function unlock() {
        if (!enabled || document.hidden || !window.AudioContext) return;
        try {
            if (!context) {
                context = new AudioContext();
                master = context.createGain();
                master.gain.value = .7;
                master.connect(context.destination);
            }
            unlocked = true;
            if (context.state === 'suspended') context.resume().catch(() => {});
        } catch (_) { /* Audio must never interrupt navigation. */ }
    }

    function tone(frequency, duration, delay = 0, volume = .025, type = 'square') {
        if (!enabled || !unlocked || !context || !master || document.hidden || voices.size >= 16) return;
        try {
            const start = context.currentTime + delay;
            const oscillator = context.createOscillator();
            const gain = context.createGain();
            oscillator.type = type;
            oscillator.frequency.setValueAtTime(frequency, start);
            gain.gain.setValueAtTime(.0001, start);
            gain.gain.exponentialRampToValueAtTime(volume, start + .006);
            gain.gain.exponentialRampToValueAtTime(.0001, start + duration);
            oscillator.connect(gain);
            gain.connect(master);
            voices.add(oscillator);
            oscillator.onended = () => {
                oscillator.disconnect();
                gain.disconnect();
                voices.delete(oscillator);
            };
            oscillator.start(start);
            oscillator.stop(start + duration + .02);
            toggle?.classList.add('sounding');
            clearTimeout(meterTimer);
            meterTimer = setTimeout(() => toggle?.classList.remove('sounding'), (delay + duration) * 1000 + 80);
        } catch (_) { /* Unsupported or unavailable audio device. */ }
    }

    // Related pitches, distinct envelopes: a small arcade control panel.
    function sound(kind) {
        if (kind === 'tap') {
            tone(280, .045, 0, .017, 'triangle');
        } else if (kind === 'select' || kind === 'step') {
            tone(440, .045, 0, .018, 'triangle');
            tone(660, .065, .04, .015, 'triangle');
        } else if (kind === 'launch' || kind === 'open') {
            [330, 494, 660].forEach((f, i) => tone(f, .09, i * .045, .019, 'triangle'));
        } else if (kind === 'close') {
            tone(440, .055, 0, .016, 'triangle');
            tone(294, .07, .045, .013, 'triangle');
        } else if (kind === 'success') {
            [523, 659, 784].forEach((f, i) => tone(f, .13, i * .065, .023, 'triangle'));
        } else if (kind === 'light' || kind === 'dark') {
            (kind === 'light' ? [392, 784] : [523, 262]).forEach((f, i) => tone(f, .12, i * .065, .02, 'sine'));
        } else if (kind === 'limit') {
            tone(140, .065, 0, .014, 'triangle');
        }
    }

    function animate(el, frames, options = {}) {
        if (reduced.matches || !el?.animate) return null;
        const animation = el.animate(frames, {
            duration: 280, easing: 'cubic-bezier(.16, 1, .3, 1)', ...options
        });
        motions.add(animation);
        const done = () => motions.delete(animation);
        animation.finished.then(done, done);
        return animation;
    }

    function pulse(el) {
        if (reduced.matches || !el) return;
        el.querySelector(':scope > .ui-ping')?.remove();
        const ring = document.createElement('span');
        ring.className = 'ui-ping';
        ring.setAttribute('aria-hidden', 'true');
        el.append(ring);
        const animation = animate(ring, [
            { opacity: .65, scale: '.96' }, { opacity: 0, scale: '1.08' }
        ], { duration: 380 });
        if (animation) animation.finished.then(() => ring.remove(), () => ring.remove());
        else ring.remove();
    }

    function nudge(el, direction) {
        animate(el, [
            { translate: '0 0' }, { translate: `${direction * 4}px 0` },
            { translate: `${-direction * 2}px 0` }, { translate: '0 0' }
        ], { duration: 240 });
    }

    // FLIP only visible cards; preserve each card's existing hover/tilt transform.
    function transitionCards(grid, update) {
        const cards = [...grid.children];
        const before = new Map();
        cards.forEach(card => {
            cardMotions.get(card)?.cancel();
            if (card.offsetHeight) before.set(card, card.getBoundingClientRect());
        });
        update();
        if (reduced.matches) return;
        let order = 0;
        cards.forEach(card => {
            if (!card.offsetHeight) return;
            const rect = card.getBoundingClientRect();
            if (rect.bottom < 0 || rect.top > innerHeight + 100) return;
            const old = before.get(card);
            const from = old ? {
                translate: `${old.left - rect.left}px ${old.top - rect.top}px`,
                scale: `${old.width / rect.width} ${old.height / rect.height}`, opacity: .8
            } : { translate: '0 14px', scale: '.98', opacity: 0 };
            const animation = animate(card, [from, { translate: '0 0', scale: '1', opacity: 1 }], {
                duration: 320, delay: Math.min(order++, 4) * 22, fill: 'backwards'
            });
            if (animation) cardMotions.set(card, animation);
        });
    }

    const controlAt = target => target instanceof Element ? target.closest('button, a[href]') : null;
    const surfaceFor = control => control.closest('.game-card') || control;

    function release(soft = false) {
        if (!pressed) return;
        const { el } = pressed;
        el.classList.remove('ui-pressed');
        if (!soft) animate(el, [{ scale: '.975' }, { scale: '1.012', offset: .55 }, { scale: '1' }]);
        pressed = null;
    }

    function init() {
        toggle = document.querySelector('#soundToggle');
        syncToggle();
        document.querySelectorAll('button, a[href]').forEach(control => {
            surfaceFor(control).classList.add('feedback-surface');
        });
        toggle.addEventListener('click', () => {
            enabled = !enabled;
            try { localStorage.setItem('fn-sound', enabled ? 'on' : 'off'); } catch (_) {}
            syncToggle();
            if (enabled) { unlock(); sound('select'); }
            else silence();
        });

        document.addEventListener('pointerdown', event => {
            if (event.button !== 0) return;
            if (event.isTrusted) unlock();
            const control = controlAt(event.target);
            if (!control || control.matches(':disabled')) return;
            release(true);
            const el = surfaceFor(control);
            pressed = { el, x: event.clientX, y: event.clientY };
            if (!reduced.matches) el.classList.add('ui-pressed');
        }, { passive: true });
        document.addEventListener('pointermove', event => {
            if (pressed && Math.hypot(event.clientX - pressed.x, event.clientY - pressed.y) > 9) release(true);
        }, { passive: true });
        document.addEventListener('pointerup', () => release());
        document.addEventListener('pointercancel', () => release(true));
        window.addEventListener('blur', () => release(true));
        document.addEventListener('keydown', event => {
            if (event.isTrusted && (event.key === 'Enter' || event.key === ' ')) unlock();
        }, true);

        document.addEventListener('click', event => {
            const control = controlAt(event.target);
            if (!control || control.matches(':disabled')) return;
            const surface = surfaceFor(control);
            pulse(surface);
            if (event.detail === 0) animate(surface, [{ scale: '.975' }, { scale: '1' }]);
            // These controls report their actual result in their own handlers.
            if (control.matches('#soundToggle, #randomGame, #copyEmail, [data-close], [data-rail], .video-card')) return;
            if (control.id === 'themeToggle') {
                sound(document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');
            } else if (control.matches('.chip')) sound('select');
            else if (control.matches('.joy, #cabinetDots button')) sound('step');
            else if (control.matches('.game-link, .cabinet-screen, #randomGameTop, .social-link, .note a')) sound('launch');
            else sound('tap');
        });
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) { release(true); silence(); }
        });
        reduced.addEventListener('change', () => {
            if (reduced.matches) {
                release(true);
                motions.forEach(animation => animation.cancel());
            }
        });
    }

    return { init, tone, sound, pulse, nudge, animate, transitionCards };
})();
