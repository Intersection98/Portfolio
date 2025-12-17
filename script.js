/**
 * Portfolio - Interactive Script
 * 个人作品集 - 交互脚本
 */

document.addEventListener('DOMContentLoaded', () => {
    // Ensure page starts at top on load/refresh
    window.scrollTo(0, 0);

    initParticleFlow();
    initCustomCursor();
    initNavigation();
    initHeroCanvas();
    initRobotArm();
    initTypingEffect();
    initCounterAnimation();
    loadVibeCodingProjects();
    loadPortfolioProjects();
    loadBlogEntries();
    initCategoryFilter();
    initHoverEffects();
    initHalEyeTracking();
    // initVideoModal(); // Disabled - now using direct Bilibili links
});

/* ============================================
   Project Data
   ============================================ */

// Vibe Coding Projects
const vibeCodingProjects = [
    {
        id: 1,
        title: '模块合成器',
        description: '可视化音频合成 · 实时音频生成',
        iframeSrc: 'https://www.bilibili.com/blackboard/html5mobileplayer.html?isOutside=true&aid=115672948409398&bvid=BV1nD2QBAEmk&cid=34551827762&p=1',
        tags: ['Web Audio', 'Synthesizer'],
        date: '2024-12-5'
    },
    {
        id: 2,
        title: '机械臂 PSO 可视化',
        description: '粒子群优化 · 逆运动学',
        iframeSrc: 'https://www.bilibili.com/blackboard/html5mobileplayer.html?isOutside=true&aid=115677981641277&bvid=BV1tamcBTEdd&cid=34570702667&p=1',
        tags: ['Algorithm', 'Robotics'],
        date: '2024-12-6'
    },
    {
        id: 3,
        title: '六足机器人仿真',
        description: '3D步态模拟 · 运动学可视化',
        iframeSrc: 'https://www.bilibili.com/blackboard/html5mobileplayer.html?isOutside=true&aid=115684071703615&bvid=BV1iT21BME6Q&cid=34596521104&p=1',
        tags: ['3D', 'Robotics'],
        date: '2024-12-7'
    },
    {
        id: 4,
        title: '六足机器人控制',
        description: '实时控制界面 · 多步态切换',
        iframeSrc: 'https://www.bilibili.com/blackboard/html5mobileplayer.html?isOutside=true&aid=115690228941177&bvid=BV18HmJBdE6s&cid=34622275720&p=1',
        tags: ['Control', 'Robotics'],
        date: '2024-12-8'
    },
    {
        id: 5,
        title: 'Jansen 连杆机构',
        description: '仿生步行 · Jansen Linkage',
        iframeSrc: 'https://www.bilibili.com/blackboard/html5mobileplayer.html?isOutside=true&aid=115696218474428&bvid=BV1FHm8BqEgJ&cid=34646197498&p=1',
        tags: ['Linkage', 'Robotics'],
        date: '2024-12-9'
    },
    {
        id: 6,
        title: '多连杆步行机构',
        description: 'Klann · TrotBot · Chebyshev',
        iframeSrc: 'https://www.bilibili.com/blackboard/html5mobileplayer.html?isOutside=true&aid=115701603894764&bvid=BV1pnm3BsEDB&cid=34672411207&p=1',
        tags: ['Linkage', 'Robotics'],
        date: '2024-12-10'
    },
    {
        id: 7,
        title: 'MNIST 神经网络',
        description: '手写数字识别 · 神经网络可视化',
        iframeSrc: 'https://www.bilibili.com/blackboard/html5mobileplayer.html?isOutside=true&aid=115704758009933&bvid=BV111mjBkEDq&cid=34684275059&p=1',
        tags: ['Neural Network', 'ML'],
        date: '2024-12-11'
    },
    {
        id: 8,
        title: '克拉尼图形',
        description: '声音生成 · Chladni Patterns',
        iframeSrc: 'https://www.bilibili.com/blackboard/html5mobileplayer.html?isOutside=true&aid=115727390474700&bvid=BV1Z6qbBMECA&cid=34768355358&p=1',
        tags: ['Sound', 'Visualization'],
        date: '2024-12-12'
    },
    {
        id: 9,
        title: '模拟真实物理的电子骰子',
        description: '桌游 · 物理模拟',
        iframeSrc: 'https://www.bilibili.com/blackboard/html5mobileplayer.html?isOutside=true&aid=115727591802734&bvid=BV1R2qbBPEyJ&cid=34769142007&p=1',
        tags: ['桌游', '物理模拟', '3d'],
        date: '2024-12-15'
    }
];

// Portfolio Projects - 从文件名解析时间
const portfolioProjects = [
    // 3D打印与机器人
    {
        id: 'p1',
        title: 'Klann连杆机器人',
        description: '3D打印的Klann连杆步行机器人初体验',
        iframeSrc: 'https://www.bilibili.com/blackboard/html5mobileplayer.html?isOutside=true&aid=113904545956604&bvid=BV1bxFHevEXk&cid=28122154474&p=1',
        tags: ['3D Print', 'Robotics', 'Klann'],
        category: '3d-robotics',
        date: '2025-01-27'
    },
    {
        id: 'p2',
        title: 'Klann连杆机器人2 - AI语音控制',
        description: '自己建模的Klann连杆步行机器人',
        iframeSrc: 'https://www.bilibili.com/blackboard/html5mobileplayer.html?isOutside=true&aid=114018480037723&bvid=BV1Gvw9eiEzb&cid=28437711402&p=1',
        tags: ['AI', 'Voice Control', 'Robotics'],
        category: '3d-robotics',
        date: '2025-03-09'
    },
    {
        id: 'p3',
        title: '乐高TrotBot连杆机器人',
        description: 'LEGO搭建的TrotBot连杆步行机器人',
        iframeSrc: 'https://www.bilibili.com/blackboard/html5mobileplayer.html?isOutside=true&aid=115696218474428&bvid=BV1FHm8BqEgJ&cid=34646197498&p=1',
        tags: ['LEGO', 'TrotBot', 'Robotics'],
        category: '3d-robotics',
        date: '2025-02-05'
    },
    {
        id: 'p4',
        title: 'Klann连杆机器人 AI语音控制',
        description: 'AI语音控制的Klann连杆步行机器人',
        iframeSrc: 'https://www.bilibili.com/blackboard/html5mobileplayer.html?isOutside=true&aid=114177628771882&bvid=BV1fKXMYxE73&cid=28914813810&p=1',
        tags: ['AI', 'Linkage', 'Robotics'],
        category: '3d-robotics',
        date: '2025-02-05'
    },
    // AIGC
    {
        id: 'p5',
        title: '【教程】AIGC生成可交互贴纸网站',
        description: 'AI生成的可交互动态贴纸',
        iframeSrc: 'https://www.bilibili.com/blackboard/html5mobileplayer.html?isOutside=true&aid=113446762844521&bvid=BV1Y3DZYEELG&cid=26669615215&p=1',
        tags: ['AIGC', 'Interactive', 'Design'],
        category: 'aigc',
        date: '2024-11-07'
    },
    {
        id: 'p6',
        title: 'LangGraph AI股票Agent',
        description: '基于LangGraph的AI股票分析Agent',
        iframeSrc: 'https://www.bilibili.com/blackboard/html5mobileplayer.html?isOutside=true&aid=115417934730530&bvid=BV1akshzHE4e&cid=33302253239&p=1',
        tags: ['LangGraph', 'AI Agent', 'Finance'],
        category: 'aigc',
        date: '2025-10-22'
    },
    {
        id: 'p7',
        title: 'Live2D AI实时数字人',
        description: 'AI驱动的Live2D实时数字人',
        iframeSrc: 'https://www.bilibili.com/blackboard/html5mobileplayer.html?isOutside=true&aid=114120502285425&bvid=BV1RY9mYPE95&cid=28739046411&p=1',
        tags: ['Live2D', 'AI', 'Digital Human'],
        category: 'aigc',
        date: '2025-02-27'
    },
    // {
    //     id: 'p8',
    //     title: '实时AIGC手势交互',
    //     description: 'AI实时手势识别与创意生成',
    //     videoUrl: 'https://test423.tos-cn-beijing.volces.com/video/%E5%AE%9E%E6%97%B6AIGC%E6%89%8B%E5%8A%BF%E4%BA%A4%E4%BA%92_25_06_19.mp4',
    //     tags: ['AIGC', 'Gesture', 'Interactive'],
    //     category: 'aigc',
    //     date: '2025-06-19'
    // },
    {
        id: 'p9',
        title: '【教程】AI生成3d全流程',
        description: 'UE5.4程序化控制绑定与一键动画重定向',
        iframeSrc: 'https://www.bilibili.com/blackboard/html5mobileplayer.html?isOutside=true&aid=1903915021&bvid=BV16m41117XG&cid=1524815077&p=1',
        tags: ['AIGC', '3d', 'Unreal Engine'],
        category: 'engine-3d',
        date: '2024-04-30'
    },
    {
        id: 'p10',
        title: 'UE5.3 Motion Matching与AI动画',
        description: '使用ai生成的动画来做motion matching',
        iframeSrc: 'https://www.bilibili.com/blackboard/html5mobileplayer.html?isOutside=true&aid=1451256699&bvid=BV1Ui421o7ev&cid=1459931809&p=1',
        tags: ['Motion Matching', 'AI', 'Unreal Engine'],
        category: 'engine-3d',
        date: '2024-03-05'
    },
    {

        title: '猫猫跑酷动画',
        description: 'Motion Warping猫猫跑酷动画',
        iframeSrc: 'https://www.bilibili.com/blackboard/html5mobileplayer.html?isOutside=true&bvid=BV1o94y1K71h&p=1',
        tags: ['Motion Warping', 'Animation', 'Unreal Engine'],
        category: 'engine-3d',
        date: '2024-01-w'
    },
    {
        title: '3D Gaussian Splatting无人机场景扫描',
        description: '无人机扫描 西大神堡 阿斯哈图石林',
        iframeSrc: 'https://www.bilibili.com/blackboard/html5mobileplayer.html?isOutside=true&aid=234430100&bvid=BV1g8411k7Uu&cid=1291742534&p=1',
        tags: ['Motion Gaussian Splatting', '3d扫描', '无人机'],
        category: 'engine-3d',
        date: '2023-10-07'
    },
    {
        title: '【教程】VAT人物集群动画',
        description: 'Houdini UE实用技术：VAT动画',
        iframeSrc: 'https://www.bilibili.com/blackboard/html5mobileplayer.html?isOutside=true&bvid=BV1p34y1G7Po&p=1',
        tags: ['VAT', '集群动画', 'Houdini', 'Unreal Engine'],
        category: 'engine-3d',
        date: '2023-09-28'
    },
    {
        title: '【MarkovJunior算法】生成程序化模型及迷宫与图案',
        description: 'MarkovJunior算法生成程序化模型及迷宫与图案',
        iframeSrc: 'https://www.bilibili.com/blackboard/html5mobileplayer.html?isOutside=true&bvid=BV1H3411c7sg&p=1',
        tags: ['MarkovJunior', '程序化生成'],
        category: 'procedural',
        date: '2022-07-06'
    },
    {
        title: 'Generative art log',
        description: 'Blender程序化纹理与shader',
        iframeSrc: 'https://www.bilibili.com/blackboard/html5mobileplayer.html?isOutside=true&aid=342926295&bvid=BV1c94y1R7fp&cid=761276389&p=1',
        tags: ['Generative art', '程序化生成', 'Blender'],
        category: 'procedural',
        date: '2022-07-01'
    },
    {
        title: 'Houdini程序化生成管道',
        description: 'Houdini程序化生成管道',
        iframeSrc: 'https://www.bilibili.com/blackboard/html5mobileplayer.html?isOutside=true&aid=939398183&bvid=BV1DT4y1q7zG&cid=731906502&p=1',
        tags: ['Generative art', '程序化生成', 'Unreal Engine', 'Houdini'],
        category: 'procedural',
        date: '2022-05-28'
    },
    {
        title: 'Houdini Unreal程序化河流',
        description: 'Houdini程序化生成河流',
        iframeSrc: 'https://www.bilibili.com/blackboard/html5mobileplayer.html?isOutside=true&aid=383242404&bvid=BV17Z4y1m7Sy&cid=575233428&p=1',
        tags: ['Generative art', '程序化生成', 'Unreal Engine', 'Houdini'],
        category: 'procedural',
        date: '2022-04-14'
    },
    {
        title: '【教程】Houdini Vex与计算机图形学',
        description: '矩阵与四元数',
        iframeSrc: 'https://www.bilibili.com/blackboard/html5mobileplayer.html?isOutside=true&aid=725237272&bvid=BV1pS4y1m7i2&cid=561554742&p=1',
        tags: ['程序化生成', 'Vex', 'Houdini', '计算机图形学'],
        category: 'procedural',
        date: '2022-03-29'
    },
    {
        title: '我去2021年',
        description: '2021年作品集showreel',
        iframeSrc: 'https://www.bilibili.com/blackboard/html5mobileplayer.html?isOutside=true&aid=254285802&bvid=BV1ZY41137wB&cid=518165588&p=1',
        tags: ['showreel', '动态设计', 'Houdini', '程序化生成', '游戏PV'],
        category: 'procedural',
        date: '2022-01-01'
    },
    {
        title: '死亡搁浅同人短片',
        description: '死亡搁浅同人短片·程序化生成',
        iframeSrc: 'https://www.bilibili.com/blackboard/html5mobileplayer.html?isOutside=true&aid=851712426&bvid=BV1gL4y1g7p2&cid=512586648&p=1',
        tags: ['同人短片', '死亡搁浅', 'Houdini', '程序化生成'],
        category: 'procedural',
        date: '2022-02-19'
    },
    {
        title: 'Houdini程序化生成日常练习',
        description: 'Houdini程序化生成日常练习 0-55',
        iframeSrc: 'https://www.bilibili.com/blackboard/html5mobileplayer.html?isOutside=true&aid=809152945&bvid=BV1X34y1C7TM&cid=511727622&p=1',
        tags: ['Houdini', '程序化生成'],
        category: 'procedural',
        date: '2022-02-18'
    },
    {
        title: 'Houdini程序化生成应县木塔',
        description: 'Houdini程序化建模中国第一木塔',
        iframeSrc: 'https://www.bilibili.com/blackboard/html5mobileplayer.html?isOutside=true&aid=808981198&bvid=BV1F34y1C7wc&cid=506313477&p=1',
        tags: ['Houdini', '程序化生成'],
        category: 'procedural',
        date: '2022-02-11'
    },
    {
        title: 'Houdini程序化生成冬奥会开幕式雪花',
        description: '冬奥会开幕式雪花houdini程序化复刻',
        iframeSrc: 'https://www.bilibili.com/blackboard/html5mobileplayer.html?isOutside=true&aid=681311932&bvid=BV1YS4y157kV&cid=502682114&p=1',
        tags: ['Houdini', '程序化生成'],
        category: 'procedural',
        date: '2022-02-06'
    },
    {
        title: 'Houdini程序化生成九龙城寨',
        description: 'Houdini、Unreal Engine程序化建模九龙城寨',
        iframeSrc: 'https://www.bilibili.com/blackboard/html5mobileplayer.html?isOutside=true&aid=766324096&bvid=BV1pr4y1h7T8&cid=500653025&p=1',
        tags: ['Houdini', '程序化生成', 'Unreal Engine'],
        category: 'procedural',
        date: '2022-02-03'
    },
    {
        title: 'Visual illusions',
        description: '大学时候做的视错觉动态设计短片，致敬埃舍尔',
        iframeSrc: 'https://www.bilibili.com/blackboard/html5mobileplayer.html?isOutside=true&aid=78881488&bvid=BV1JJ41117Jc&cid=134975317&p=1',
        tags: ['动态设计', '视错觉', 'After Effects'],
        category: 'procedural',
        date: '2019-12-11'
    }
];

// Blog/Tech Articles
const blogEntries = [
    {
        id: 'b1',
        title: '如何把vibe coding的网站部署上线',
        description: '极简网站部署上线教程',
        icon: '💻',
        url: 'https://ai.feishu.cn/wiki/Wtn7wPMjLifV6Zk8PkJcxFqunib?from=from_copylink'
    },
    {
        id: 'b2',
        title: '3d打印与机器人',
        description: ' 3D打印与机器人技术的探索记录，机械臂，步行机器人与AI智能体',
        icon: '🤖',
        url: 'https://ai.feishu.cn/docx/PgwSdl7Nqoq2ZExaLa5cKqTInKg?from=from_copylink'
    },
    {
        id: 'b10',
        title: 'Vibe Coding Daily',
        description: '从算法可视化到生成艺术，记录Vibe Coding过程中的灵感与技术心得。',
        icon: '⚡',
        url: 'https://ai.feishu.cn/wiki/NhvMwyEjCiqdtTks7WWczvmjnze?from=from_copylink'
    },
    {
        id: 'b3',
        title: 'Vibe Coding 实战记录',
        description: '更复杂完整的借助AI来实现的项目。',
        icon: '🎞',
        url: 'https://ai.feishu.cn/wiki/E04RwrHODi8NSNk2t6xcNR5mnTh?from=from_copylink'
    },
    {
        id: 'b4',
        title: '3D Gaussian Splatting入门指南',
        description: '3D Gaussian Splatting的简介及训练入门教程',
        icon: '🗿',
        url: 'https://www.bilibili.com/opus/840095598829895688/?from=readlist'
    },
    {
        id: 'b5',
        title: 'Cursor+ComfyUI生成可交互AI网站 从0到1',
        description: '从零开始，使用Cursor和ComfyUI生成可交互的AI网站。',
        icon: '🦄',
        url: 'https://ai.feishu.cn/docx/DzHRdXGjQobdZIxsrNGcGQn6n9g?from=from_copylink'
    },
    {
        id: 'b6',
        title: 'DeepSeek本地部署与知识库',
        description: 'DeepSeek本地部署与知识库。',
        icon: '📟',
        url: 'https://ai.feishu.cn/docx/OgbedZwj4ob8xCxCMWmcgGAZnOd?from=from_copylink'
    },
    {
        id: 'b7',
        title: 'Lora微调模型训练教程',
        description: 'Lora微调模型训练指南（教程时间久远，可能过时）',
        icon: '🎨',
        url: 'https://ai.feishu.cn/docx/OgbedZwj4ob8xCxCMWmcgGAZnOd?from=from_copylink'
    },
    {
        id: 'b8',
        title: '《黑客帝国 觉醒》程序化生成技术解析（一）路网',
        description: '一篇22年的程序化生成的烂尾教程',
        icon: '🚀',
        url: 'https://www.bilibili.com/opus/646085440715096065/?from=readlist'
    },
    {
        id: 'b9',
        title: '本地运行Colab及Disco Diffusion本地部署教程',
        description: '22年Disco Diffusion流行，开始有AIGC这个概念，这可能是中文互联网最早的Disco Diffusion本地部署教程',
        icon: '🦋',
        url: 'https://www.bilibili.com/opus/650596135810891779/?from=readlist'
    }
];

/* ============================================
   Particle Flow System
   ============================================ */
function initParticleFlow() {
    const canvas = document.createElement('canvas');
    canvas.id = 'particle-canvas';
    document.body.prepend(canvas);

    const ctx = canvas.getContext('2d');
    let width, height;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let isMouseMoving = false;
    let mouseTimeout;

    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5;
            this.life = 1;
            this.decay = Math.random() * 0.003 + 0.001;
            this.hue = Math.random() > 0.5 ? 190 : 270;
            this.saturation = 80 + Math.random() * 20;
            this.lightness = 50 + Math.random() * 20;
        }

        update() {
            if (isMouseMoving) {
                const dx = mouseX - this.x;
                const dy = mouseY - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 300) {
                    const angle = Math.atan2(dy, dx);
                    const force = (300 - dist) / 300 * 0.02;
                    this.speedX += Math.cos(angle + Math.PI / 2) * force;
                    this.speedY += Math.sin(angle + Math.PI / 2) * force;
                    this.speedX += dx * 0.00005;
                    this.speedY += dy * 0.00005;
                }
            }

            this.x += this.speedX;
            this.y += this.speedY;
            this.speedX *= 0.99;
            this.speedY *= 0.99;
            this.speedX += (Math.random() - 0.5) * 0.02;
            this.speedY += (Math.random() - 0.5) * 0.02;
            this.life -= this.decay;

            if (this.life <= 0 || this.x < -50 || this.x > width + 50 ||
                this.y < -50 || this.y > height + 50) {
                this.reset();
            }
        }

        draw() {
            const alpha = this.life * 0.4;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(${this.hue}, ${this.saturation}%, ${this.lightness}%, ${alpha})`;
            ctx.fill();

            if (this.size > 1) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
                ctx.fillStyle = `hsla(${this.hue}, ${this.saturation}%, ${this.lightness}%, ${alpha * 0.2})`;
                ctx.fill();
            }
        }
    }

    class FlowLine {
        constructor() {
            this.points = [];
            this.maxPoints = 30;
            this.reset();
        }

        reset() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 2;
            this.vy = (Math.random() - 0.5) * 2;
            this.life = 1;
            this.decay = 0.005 + Math.random() * 0.005;
            this.hue = Math.random() > 0.7 ? 270 : (Math.random() > 0.5 ? 190 : 25);
            this.points = [];
        }

        update() {
            if (isMouseMoving) {
                const dx = mouseX - this.x;
                const dy = mouseY - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 200) {
                    const angle = Math.atan2(dy, dx);
                    const force = (200 - dist) / 200 * 0.3;
                    this.vx += Math.cos(angle + Math.PI / 3) * force;
                    this.vy += Math.sin(angle + Math.PI / 3) * force;
                }
            }

            this.x += this.vx;
            this.y += this.vy;
            this.vx *= 0.98;
            this.vy *= 0.98;
            this.vx += (Math.random() - 0.5) * 0.1;
            this.vy += (Math.random() - 0.5) * 0.1;

            this.points.push({ x: this.x, y: this.y, life: 1 });
            if (this.points.length > this.maxPoints) {
                this.points.shift();
            }

            this.points.forEach((p, i) => {
                p.life = (i + 1) / this.points.length;
            });

            this.life -= this.decay;

            if (this.life <= 0 || this.x < -100 || this.x > width + 100 ||
                this.y < -100 || this.y > height + 100) {
                this.reset();
            }
        }

        draw() {
            if (this.points.length < 2) return;

            ctx.beginPath();
            ctx.moveTo(this.points[0].x, this.points[0].y);

            for (let i = 1; i < this.points.length; i++) {
                const p = this.points[i];
                ctx.lineTo(p.x, p.y);
            }

            ctx.strokeStyle = `hsla(${this.hue}, 80%, 60%, ${this.life * 0.3})`;
            ctx.lineWidth = 1;
            ctx.stroke();
        }
    }

    const particles = [];
    const flowLines = [];
    const particleCount = 60;
    const flowLineCount = 12;

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }

    function init() {
        resize();
        particles.length = 0;
        flowLines.length = 0;

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        for (let i = 0; i < flowLineCount; i++) {
            flowLines.push(new FlowLine());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        flowLines.forEach(line => {
            line.update();
            line.draw();
        });

        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 80) {
                    const alpha = (1 - dist / 80) * 0.15 * particles[i].life * particles[j].life;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[j].x);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(0, 212, 255, ${alpha})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resize);

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        isMouseMoving = true;

        clearTimeout(mouseTimeout);
        mouseTimeout = setTimeout(() => {
            isMouseMoving = false;
        }, 100);

        if (Math.random() > 0.85) {
            const p = particles[Math.floor(Math.random() * particles.length)];
            p.x = mouseX + (Math.random() - 0.5) * 50;
            p.y = mouseY + (Math.random() - 0.5) * 50;
            p.life = 1;
            p.speedX = (Math.random() - 0.5) * 2;
            p.speedY = (Math.random() - 0.5) * 2;
        }
    });

    init();
    animate();
}

/* ============================================
   Custom Cursor - Performance Optimized
   ============================================ */
function initCustomCursor() {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');

    if (!cursor || !follower) return;

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    }, { passive: true });

    function animate() {
        cursorX += (mouseX - cursorX) * 0.5;
        cursorY += (mouseY - cursorY) * 0.5;
        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;

        followerX += (mouseX - followerX) * 0.15;
        followerY += (mouseY - followerY) * 0.15;
        follower.style.transform = `translate(${followerX}px, ${followerY}px)`;

        requestAnimationFrame(animate);
    }
    animate();

    // Update interactive elements after content loads
    setTimeout(updateCursorHoverElements, 500);

    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
        follower.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
        follower.style.opacity = '0.5';
    });
}

function updateCursorHoverElements() {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    if (!cursor || !follower) return;

    const interactiveElements = document.querySelectorAll(
        '.project-card, .blog-card, .social-link, .nav-link, .filter-btn, .tech-tag, button, a'
    );

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hovering');
            follower.classList.add('hovering');
        });

        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hovering');
            follower.classList.remove('hovering');
        });
    });
}

/* ============================================
   Navigation
   ============================================ */
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    const indicator = document.getElementById('navIndicator');
    const mainNav = document.querySelector('.main-nav');

    // Update indicator position
    function updateIndicator(activeLink) {
        if (!indicator || !activeLink || !mainNav) return;

        const navRect = mainNav.getBoundingClientRect();
        const linkRect = activeLink.getBoundingClientRect();

        const left = linkRect.left - navRect.left;
        const width = linkRect.width;
        const widthRatio = 0.8; // 宽度系数
        const indicatorWidth = width * widthRatio;
        const indicatorLeft = left + (width - indicatorWidth) / 2; // 居中

        indicator.style.left = `${indicatorLeft}px`;
        indicator.style.width = `${indicatorWidth}px`;
    }

    // Initial position
    const activeLink = document.querySelector('.nav-link.active');
    if (activeLink) {
        setTimeout(() => updateIndicator(activeLink), 100);
    }

    // Handle window resize
    window.addEventListener('resize', () => {
        const currentActive = document.querySelector('.nav-link.active');
        if (currentActive) updateIndicator(currentActive);
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = link.dataset.section;
            const currentActive = document.querySelector('.nav-link.active');

            // Only process if clicking a different tab
            if (currentActive === link) return;

            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Update indicator position with animation
            updateIndicator(link);

            // Update active section
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetSection) {
                    section.classList.add('active');
                }
            });

            // Scroll to top instantly (no animation to avoid visible jump)
            window.scrollTo(0, 0);
        });
    });
}

/* ============================================
   Hero Canvas - Interactive Background
   ============================================ */
function initHeroCanvas() {
    const canvas = document.getElementById('heroCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;
    let mouseX = 0, mouseY = 0;
    let nodes = [];
    const nodeCount = 50;

    function resize() {
        const container = canvas.parentElement;
        width = container.offsetWidth;
        height = container.offsetHeight;
        canvas.width = width;
        canvas.height = height;
        initNodes();
    }

    function initNodes() {
        nodes = [];
        for (let i = 0; i < nodeCount; i++) {
            nodes.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1,
                hue: Math.random() > 0.5 ? 190 : 280
            });
        }
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        // Update and draw nodes
        nodes.forEach(node => {
            // Mouse interaction
            const dx = mouseX - node.x;
            const dy = mouseY - node.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 150) {
                const force = (150 - dist) / 150 * 0.02;
                node.vx -= dx * force * 0.01;
                node.vy -= dy * force * 0.01;
            }

            node.x += node.vx;
            node.y += node.vy;

            // Boundary check
            if (node.x < 0 || node.x > width) node.vx *= -1;
            if (node.y < 0 || node.y > height) node.vy *= -1;

            // Friction
            node.vx *= 0.99;
            node.vy *= 0.99;

            // Draw node
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(${node.hue}, 80%, 60%, 0.6)`;
            ctx.fill();
        });

        // Draw connections
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const dx = nodes[i].x - nodes[j].x;
                const dy = nodes[i].y - nodes[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(nodes[i].x, nodes[i].y);
                    ctx.lineTo(nodes[j].x, nodes[j].y);
                    ctx.strokeStyle = `rgba(0, 212, 255, ${(1 - dist / 120) * 0.3})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(animate);
    }

    canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
    });

    window.addEventListener('resize', resize);
    resize();
    animate();
}

/* ============================================
   Robot Arm - Interactive IK Animation
   ============================================ */
function initRobotArm() {
    const canvas = document.getElementById('robotArmCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;
    let mouseX = 0, mouseY = 0;
    let targetX = 0, targetY = 0;

    // Robot arm configuration
    const arm = {
        baseX: 0,
        baseY: 0,
        currentBaseX: 0,
        targetBaseX: 0,
        minBaseX: 80,
        maxBaseX: 0,
        railY: 0,
        segments: [
            { length: 100, angle: -Math.PI / 4, color: '#7c3aed', width: 14 },  // 深紫色
            { length: 90, angle: Math.PI / 3, color: '#4b48ffff', width: 12 },    // 紫色
            { length: 70, angle: -Math.PI / 6, color: '#53acffff', width: 10 },   // 靛蓝色
            { length: 50, angle: Math.PI / 4, color: '#00d4ff', width: 8 }      // 青蓝色
        ],
        joints: [],
        endEffector: { x: 0, y: 0 }
    };

    // Colors
    const colors = {
        joint: '#7c3aed',
        jointGlow: 'rgba(124, 58, 237, 0.5)',
        endEffector: '#00d4ff',
        endEffectorGlow: 'rgba(0, 212, 255, 0.6)',
        rail: '#333340',
        railHighlight: 'rgba(0, 212, 255, 0.3)',
        base: '#5b21b6'
    };

    function resize() {
        const container = canvas.parentElement;
        width = container.offsetWidth;
        height = container.offsetHeight;
        canvas.width = width;
        canvas.height = height;

        arm.railY = height - 40;
        arm.baseY = arm.railY - 20;
        arm.minBaseX = 80;
        arm.maxBaseX = width - 80;
        arm.currentBaseX = width / 4;
        arm.targetBaseX = arm.currentBaseX;
    }

    // FABRIK Inverse Kinematics
    function solveIK(targetX, targetY) {
        const segments = arm.segments;
        const points = [];

        // Initialize points from current configuration
        let x = arm.currentBaseX;
        let y = arm.baseY;
        points.push({ x, y });

        for (let i = 0; i < segments.length; i++) {
            x += Math.cos(segments[i].angle) * segments[i].length;
            y += Math.sin(segments[i].angle) * segments[i].length;
            points.push({ x, y });
        }

        // FABRIK iterations
        const iterations = 15;
        const tolerance = 1;

        for (let iter = 0; iter < iterations; iter++) {
            // Backward reaching
            points[points.length - 1] = { x: targetX, y: targetY };
            for (let i = points.length - 2; i >= 0; i--) {
                const dx = points[i].x - points[i + 1].x;
                const dy = points[i].y - points[i + 1].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const ratio = segments[i].length / dist;
                points[i] = {
                    x: points[i + 1].x + dx * ratio,
                    y: points[i + 1].y + dy * ratio
                };
            }

            // Forward reaching - constrain to current base position
            points[0] = { x: arm.currentBaseX, y: arm.baseY };
            for (let i = 1; i < points.length; i++) {
                const dx = points[i].x - points[i - 1].x;
                const dy = points[i].y - points[i - 1].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const ratio = segments[i - 1].length / dist;
                points[i] = {
                    x: points[i - 1].x + dx * ratio,
                    y: points[i - 1].y + dy * ratio
                };
            }

            // Check if close enough
            const endDist = Math.sqrt(
                Math.pow(points[points.length - 1].x - targetX, 2) +
                Math.pow(points[points.length - 1].y - targetY, 2)
            );
            if (endDist < tolerance) break;
        }

        // Update segment angles
        for (let i = 0; i < segments.length; i++) {
            segments[i].angle = Math.atan2(
                points[i + 1].y - points[i].y,
                points[i + 1].x - points[i].x
            );
        }

        arm.joints = points;
        arm.endEffector = points[points.length - 1];
    }

    // Draw hexagon shape
    function drawHexagon(x, y, size, rotation = 0) {
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i + rotation;
            const px = x + size * Math.cos(angle);
            const py = y + size * Math.sin(angle);
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
        }
        ctx.closePath();
    }

    // Draw the rail/track
    function drawRail() {
        const railHeight = 8;
        const railY = arm.railY;

        // Rail shadow
        ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
        ctx.fillRect(arm.minBaseX - 20, railY + 2, arm.maxBaseX - arm.minBaseX + 40, railHeight + 2);

        // Rail body
        ctx.fillStyle = colors.rail;
        ctx.fillRect(arm.minBaseX - 20, railY, arm.maxBaseX - arm.minBaseX + 40, railHeight);

        // Rail highlight
        ctx.fillStyle = colors.railHighlight;
        ctx.fillRect(arm.minBaseX - 20, railY, arm.maxBaseX - arm.minBaseX + 40, 2);

        // Rail grooves
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
        ctx.lineWidth = 1;
        for (let x = arm.minBaseX; x <= arm.maxBaseX; x += 30) {
            ctx.beginPath();
            ctx.moveTo(x, railY + 2);
            ctx.lineTo(x, railY + railHeight - 2);
            ctx.stroke();
        }
    }

    // Draw robot arm
    function drawArm() {
        const segments = arm.segments;
        const joints = arm.joints;

        if (joints.length === 0) return;

        // Draw base platform on rail
        const baseWidth = 50;
        const baseHeight = 25;

        // Base glow
        ctx.shadowColor = colors.base;
        ctx.shadowBlur = 15;

        // Base body
        ctx.fillStyle = colors.base;
        ctx.beginPath();
        ctx.roundRect(arm.currentBaseX - baseWidth / 2, arm.baseY - 5, baseWidth, baseHeight, 5);
        ctx.fill();

        // Base highlight
        ctx.shadowBlur = 0;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.beginPath();
        ctx.roundRect(arm.currentBaseX - baseWidth / 2 + 3, arm.baseY - 2, baseWidth - 6, 8, 3);
        ctx.fill();

        // Wheels
        ctx.fillStyle = '#1a1a2e';
        ctx.beginPath();
        ctx.arc(arm.currentBaseX - 15, arm.railY, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(arm.currentBaseX + 15, arm.railY, 6, 0, Math.PI * 2);
        ctx.fill();

        // Draw segments with rounded ends
        for (let i = 0; i < segments.length; i++) {
            const start = joints[i];
            const end = joints[i + 1];
            const seg = segments[i];

            // Segment glow
            ctx.shadowColor = seg.color;
            ctx.shadowBlur = 15;

            // Draw segment body
            ctx.beginPath();
            ctx.moveTo(start.x, start.y);
            ctx.lineTo(end.x, end.y);
            ctx.strokeStyle = seg.color;
            ctx.lineWidth = seg.width;
            ctx.lineCap = 'round';
            ctx.stroke();

            ctx.shadowBlur = 0;
        }

        // Draw joints as circles
        for (let i = 0; i < joints.length - 1; i++) {
            const joint = joints[i];
            const size = i === 0 ? 18 : 14 - i * 2;
            // Use segment color for gradient effect
            const segColor = segments[i].color;

            // Convert hex to rgba for glow
            const r = parseInt(segColor.slice(1, 3), 16);
            const g = parseInt(segColor.slice(3, 5), 16);
            const b = parseInt(segColor.slice(5, 7), 16);
            const glowColor = `rgba(${r}, ${g}, ${b}, 0.5)`;

            // Joint glow
            ctx.beginPath();
            ctx.arc(joint.x, joint.y, size + 5, 0, Math.PI * 2);
            ctx.fillStyle = glowColor;
            ctx.fill();

            // Joint body
            ctx.beginPath();
            ctx.arc(joint.x, joint.y, size, 0, Math.PI * 2);
            ctx.fillStyle = segColor;
            ctx.fill();

            // Joint center
            ctx.beginPath();
            ctx.arc(joint.x, joint.y, size * 0.4, 0, Math.PI * 2);
            ctx.fillStyle = '#1a1a2e';
            ctx.fill();
        }

        // Draw end effector hexagon
        const end = arm.endEffector;
        const time = Date.now() / 1000;
        const hexRotation = time * 0.5;

        // Outer glow
        ctx.shadowColor = colors.endEffector;
        ctx.shadowBlur = 25;

        drawHexagon(end.x, end.y, 18, hexRotation);
        ctx.strokeStyle = colors.endEffector;
        ctx.lineWidth = 3;
        ctx.stroke();

        // Inner hexagon
        ctx.shadowBlur = 0;
        drawHexagon(end.x, end.y, 10, -hexRotation);
        ctx.fillStyle = colors.endEffector;
        ctx.fill();

        // Hexagon glow effect
        ctx.beginPath();
        ctx.arc(end.x, end.y, 25, 0, Math.PI * 2);
        ctx.fillStyle = colors.endEffectorGlow;
        ctx.fill();
    }

    // Draw target indicator
    function drawTarget() {
        const time = Date.now() / 1000;
        const pulse = Math.sin(time * 3) * 0.3 + 0.7;

        ctx.beginPath();
        ctx.arc(targetX, targetY, 10 * pulse, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${0.3 * pulse})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(targetX, targetY, 5, 0, Math.PI * 2);
        ctx.fillStyle = colors.endEffector;
        ctx.fill();
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        // Smooth target following
        targetX += (mouseX - targetX) * 0.08;
        targetY += (mouseY - targetY) * 0.08;

        // Calculate optimal base X position to track mouse
        const optimalBaseX = Math.max(arm.minBaseX, Math.min(arm.maxBaseX, targetX));
        arm.targetBaseX = optimalBaseX;

        // Smooth base movement
        arm.currentBaseX += (arm.targetBaseX - arm.currentBaseX) * 0.05;
        arm.currentBaseX = Math.max(arm.minBaseX, Math.min(arm.maxBaseX, arm.currentBaseX));

        // Draw rail first (behind arm)
        drawRail();

        // Solve IK and draw
        solveIK(targetX, targetY);
        drawTarget();
        drawArm();

        requestAnimationFrame(animate);
    }

    // Event listeners
    const container = canvas.parentElement;
    container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
    });

    container.addEventListener('mouseleave', () => {
        // Return to default position when mouse leaves
        mouseX = width / 2;
        mouseY = height / 2;
    });

    window.addEventListener('resize', resize);

    resize();
    // Initialize target position
    mouseX = width / 2;
    mouseY = height / 2;
    targetX = mouseX;
    targetY = mouseY;

    animate();
}

/* ============================================
   Typing Effect
   ============================================ */
function initTypingEffect() {
    const element = document.getElementById('typedName');
    if (!element) return;

    const names = ['技术美术', '动态设计师', 'AIGC探险家'];
    let nameIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    // Get or create cursor element
    let cursor = element.querySelector('.cursor-blink');
    if (!cursor) {
        cursor = document.createElement('span');
        cursor.className = 'cursor-blink';
        cursor.textContent = '|';
        element.appendChild(cursor);
    }

    function type() {
        const currentName = names[nameIndex];

        if (isDeleting) {
            charIndex--;
            typingSpeed = 50;
        } else {
            charIndex++;
            typingSpeed = 100;
        }

        // Update text content while preserving cursor
        const text = currentName.substring(0, charIndex);
        // Use zero-width space as placeholder when text is empty to maintain element width
        const displayText = text.length > 0 ? text : '\u200B';
        const textNode = document.createTextNode(displayText);
        element.innerHTML = '';
        element.appendChild(textNode);
        element.appendChild(cursor);

        if (!isDeleting && charIndex === currentName.length) {
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            nameIndex = (nameIndex + 1) % names.length;
            typingSpeed = 500;
        }

        setTimeout(type, typingSpeed);
    }

    setTimeout(type, 1000);
}

/* ============================================
   Counter Animation
   ============================================ */
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number[data-count]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.count);
                animateCounter(el, target);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const duration = 1500;
    const stepTime = duration / 50;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, stepTime);
}

/* ============================================
   Load Projects
   ============================================ */
function loadVibeCodingProjects() {
    const grid = document.getElementById('vibeCodingGrid');
    if (!grid) return;

    vibeCodingProjects.forEach((project, index) => {
        const card = createProjectCard(project, index + 1);
        grid.appendChild(card);
    });

    addCardDecorations(grid);
    updateCursorHoverElements();
}

function loadPortfolioProjects() {
    const grid = document.getElementById('portfolioGrid');
    if (!grid) return;

    // Sort by date (newest first)
    const sortedProjects = [...portfolioProjects].sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    });

    sortedProjects.forEach((project, index) => {
        const card = createProjectCard(project, index + 1, true);
        grid.appendChild(card);
    });

    addCardDecorations(grid);
    updateCursorHoverElements();
}

function createProjectCard(project, index, showCategory = false) {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.dataset.index = index;
    if (project.category) {
        card.dataset.category = project.category;
    }

    let mediaContent = '';
    let bilibiliLink = '';

    if (project.iframeSrc) {
        // Load iframe with autoplay and high quality
        const baseUrl = project.iframeSrc;
        const separator = baseUrl.includes('?') ? '&' : '?';
        // Add high_quality=1 for better resolution
        const playerUrl = `${baseUrl}${separator}autoplay=1&danmaku=0&poster=0&high_quality=1&quality=80`;

        // Extract bvid from URL to create Bilibili link
        const bvidMatch = baseUrl.match(/bvid=([^&]+)/);
        if (bvidMatch) {
            bilibiliLink = `https://www.bilibili.com/video/${bvidMatch[1]}`;
        }

        mediaContent = `<iframe src="${playerUrl}" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>`;
    } else {
        mediaContent = `<video src="${project.videoUrl}" muted loop playsinline autoplay></video>`;
    }

    const categoryBadge = showCategory && project.category ?
        `<div class="card-category">${getCategoryLabel(project.category)}</div>` : '';

    // Add Bilibili link button if available
    const bilibiliButton = bilibiliLink ?
        `<a href="${bilibiliLink}" target="_blank" rel="noopener noreferrer" class="bilibili-link" title="在B站观看">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906L17.813 4.653zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373z"/>
            </svg>
        </a>` : '';

    // Card info content
    const cardInfoContent = `
        ${project.date ? `<div class="card-meta"><span class="card-date">${project.date}</span></div>` : ''}
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="card-tags">
            ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
        </div>
    `;

    card.innerHTML = `
        <div class="card-video-wrapper">
            ${mediaContent}
            <div class="play-overlay"></div>
            ${categoryBadge}
            ${bilibiliButton}
        </div>
        ${bilibiliLink ?
            `<a href="${bilibiliLink}" target="_blank" rel="noopener noreferrer" class="card-info card-info-link">${cardInfoContent}</a>` :
            `<div class="card-info">${cardInfoContent}</div>`
        }
    `;

    // Auto-play video
    const video = card.querySelector('video');
    if (video) {
        video.muted = true;
        video.loop = true;
        video.play().catch(() => { });
    }

    return card;
}

function getCategoryLabel(category) {
    const labels = {
        '3d-robotics': '3D打印与机器人',
        'aigc': 'AIGC',
        'engine-3d': '引擎与3D',
        'procedural': '程序化生成'
    };
    return labels[category] || category;
}

function addCardDecorations(grid) {
    const cards = grid.querySelectorAll('.project-card');

    cards.forEach(card => {
        // Add corner accents
        const corners = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
        corners.forEach(corner => {
            const accent = document.createElement('div');
            accent.className = `corner-accent ${corner}`;
            card.appendChild(accent);
        });

        // Add accent line
        const accentLine = document.createElement('div');
        accentLine.className = 'card-accent-line';
        card.appendChild(accentLine);
    });
}

/* ============================================
   Load Blog Entries
   ============================================ */
function loadBlogEntries() {
    const grid = document.getElementById('blogGrid');
    if (!grid) return;

    blogEntries.forEach(entry => {
        const card = document.createElement('a');
        card.className = 'blog-card';
        card.href = entry.url;
        card.target = '_blank';
        card.rel = 'noopener noreferrer';

        card.innerHTML = `
            <span class="blog-icon">${entry.icon}</span>
            <h3 class="blog-title">${entry.title}</h3>
            <p class="blog-desc">${entry.description}</p>
            <span class="blog-link">
                查看文档
                <span class="blog-link-arrow">→</span>
            </span>
        `;

        grid.appendChild(card);
    });

    updateCursorHoverElements();
}

/* ============================================
   Category Filter
   ============================================ */
function initCategoryFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioGrid = document.getElementById('portfolioGrid');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;

            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter cards
            const cards = portfolioGrid.querySelectorAll('.project-card');
            cards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = '';
                    card.style.animation = 'cardFadeIn 0.5s ease-out forwards';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

/* ============================================
   Hover Effects
   ============================================ */
function initHoverEffects() {
    document.addEventListener('mousemove', (e) => {
        const cards = document.querySelectorAll('.project-card');

        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const isHovering = e.clientX >= rect.left && e.clientX <= rect.right &&
                e.clientY >= rect.top && e.clientY <= rect.bottom;

            if (isHovering) {
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const percentX = (x / rect.width) * 100;
                const percentY = (y / rect.height) * 100;

                card.style.setProperty('--mouse-x', `${percentX}%`);
                card.style.setProperty('--mouse-y', `${percentY}%`);
            }
        });
    });
}

/* ============================================
   Video Modal
   ============================================ */
function initVideoModal() {
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    const modalIframe = document.getElementById('modalIframe');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalClose = document.getElementById('modalClose');
    const modalBackdrop = modal?.querySelector('.modal-backdrop');

    if (!modal || !modalVideo) return;

    // Use event delegation for dynamically created cards
    document.addEventListener('click', (e) => {
        const card = e.target.closest('.project-card');
        if (!card) return;

        const video = card.querySelector('video');
        const iframe = card.querySelector('iframe');
        const title = card.querySelector('.card-info h3');
        const desc = card.querySelector('.card-info p');

        if (video) {
            modalIframe.style.display = 'none';
            modalIframe.src = '';
            modalVideo.style.display = '';

            modalVideo.src = video.src;
            modalVideo.muted = false;
            modalVideo.loop = false;
            modalVideo.currentTime = 0;

            if (title) modalTitle.textContent = title.textContent;
            if (desc) modalDesc.textContent = desc.textContent;

            video.pause();

            modal.classList.add('active');
            document.body.style.overflow = 'hidden';

            modalVideo.onloadeddata = () => {
                modalVideo.play().catch(() => { });
            };
            modalVideo.load();
        } else if (iframe && modalIframe) {
            modalVideo.pause();
            modalVideo.src = '';
            modalVideo.style.display = 'none';

            modalIframe.src = iframe.src;
            modalIframe.style.display = 'block';

            if (title) modalTitle.textContent = title.textContent;
            if (desc) modalDesc.textContent = desc.textContent;

            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        modalVideo.pause();
        modalVideo.src = '';
        if (modalIframe) {
            modalIframe.src = '';
            modalIframe.style.display = 'none';
        }

        // Resume all card videos
        document.querySelectorAll('.project-card video').forEach(video => {
            video.play().catch(() => { });
        });
    }

    modalClose?.addEventListener('click', closeModal);
    modalBackdrop?.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    modal.querySelector('.modal-content')?.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

/* ============================================
   Keyboard Navigation
   ============================================ */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

/* ============================================
   HAL Eye Mouse Tracking
   ============================================ */
function initHalEyeTracking() {
    const halEye = document.querySelector('.hal-eye');
    const halCore = document.querySelector('.hal-core');
    const halPupil = document.querySelector('.hal-pupil');

    if (!halEye || !halCore || !halPupil) return;

    // Maximum offset for eye movement
    const maxOffset = 8;
    const maxPupilOffset = 12;

    // Smooth tracking variables
    let currentCoreX = 0, currentCoreY = 0;
    let currentPupilX = 0, currentPupilY = 0;
    let targetCoreX = 0, targetCoreY = 0;
    let targetPupilX = 0, targetPupilY = 0;

    document.addEventListener('mousemove', (e) => {
        const eyeRect = halEye.getBoundingClientRect();
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;

        // Calculate direction to mouse
        const dx = e.clientX - eyeCenterX;
        const dy = e.clientY - eyeCenterY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Normalize and apply max offset
        if (distance > 0) {
            const normalizedDx = dx / distance;
            const normalizedDy = dy / distance;

            // Apply easing based on distance (closer = more response)
            const intensity = Math.min(distance / 200, 1);

            targetCoreX = normalizedDx * maxOffset * intensity;
            targetCoreY = normalizedDy * maxOffset * intensity;
            targetPupilX = normalizedDx * maxPupilOffset * intensity;
            targetPupilY = normalizedDy * maxPupilOffset * intensity;
        }
    });

    // Smooth animation loop
    function animateEye() {
        // Smooth interpolation (easing)
        const easing = 0.1;

        currentCoreX += (targetCoreX - currentCoreX) * easing;
        currentCoreY += (targetCoreY - currentCoreY) * easing;
        currentPupilX += (targetPupilX - currentPupilX) * easing;
        currentPupilY += (targetPupilY - currentPupilY) * easing;

        // Apply transform to core (keeping the centering transform)
        halCore.style.transform = `translate(calc(-50% + ${currentCoreX}px), calc(-50% + ${currentCoreY}px))`;
        halPupil.style.transform = `translate(calc(-50% + ${currentPupilX}px), calc(-50% + ${currentPupilY}px))`;

        requestAnimationFrame(animateEye);
    }

    animateEye();
}


/* ============================================
   Status Text Animation
   ============================================ */
function initStatusAnimation() {
    const statusText = document.querySelector('.status-text');
    if (!statusText) return;

    const messages = [
        'SYSTEM ONLINE',
        'READY',
        'CREATIVE MODE',
        'LOADING IDEAS...',
        'SYNCING...',
        'CONNECTED'
    ];

    let currentIndex = 0;

    setInterval(() => {
        statusText.style.opacity = '0';
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % messages.length;
            statusText.textContent = messages[currentIndex];
            statusText.style.opacity = '1';
        }, 300);
    }, 4000);
}

/* ============================================
   Random Glitch Effect
   ============================================ */
function initRandomGlitch() {
    const glitchElements = document.querySelectorAll('.glitch-text, .name, .hero-subtitle');

    function triggerGlitch(element) {
        element.classList.add('glitching');
        setTimeout(() => {
            element.classList.remove('glitching');
        }, 200);
    }

    // Random glitch trigger
    setInterval(() => {
        if (Math.random() > 0.7) {
            const randomElement = glitchElements[Math.floor(Math.random() * glitchElements.length)];
            if (randomElement) {
                triggerGlitch(randomElement);
            }
        }
    }, 3000);
}

// Initialize enhanced effects after DOM content loads
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        initStatusAnimation();
        initRandomGlitch();
    }, 1000);
});
