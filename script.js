/**
 * 分形噪波的十字路口 — Arcade × Procedural Lab
 * 个人作品集 - 交互脚本
 */

/* ============================================
   Project Data
   ============================================ */

// Online games — the arcade. First entry is featured.
const games = [
    {
        title: '双人棋类游戏必胜的秘密',
        en: 'THE LOGIC OF WINNING',
        genre: 'strategy',
        genreLabel: '互动博弈论',
        desc: '交互式视频，在操作与推演中理解“必胜”背后的逻辑与数学问题。',
        facts: ['博弈论', '图论', '状态空间'],
        url: 'https://www.bilibili.com/toy/thelogicofwinning/index.html',
        cta: '开始探索',
        scene: 'tree',
        accent: 'var(--acid)',
        isNew: true,
        featured: true
    },
    {
        title: '谁是挪车王',
        en: 'PARKING KING',
        genre: 'puzzle',
        genreLabel: '挪车解谜',
        desc: '经典挪车解谜玩法，加入隧道、转盘与门闸等机制。规划每一步，让目标车辆驶出停车场。',
        facts: ['48 关', '逻辑解谜'],
        url: 'https://www.bilibili.com/toy/parkingking/index.html',
        cta: '开始挪车',
        scene: 'parking',
        accent: 'var(--hot)',
        isNew: true
    },
    {
        title: '爆袋旅团',
        en: 'BAG BURST',
        genre: 'builder',
        genreLabel: 'Roguelike 构筑',
        desc: '从盲抽袋中抽取符文决定行动。在见好就收与继续冒险之间抉择，构筑属于你的战斗流派。',
        facts: ['Roguelike', '盲抽袋构筑', 'DBG'],
        url: 'https://www.bilibili.com/toy/Bagburst/index.html',
        cta: '进入旅团',
        scene: 'bag',
        accent: 'var(--pink)'
    },
    {
        title: '猫猫连线解谜100',
        en: 'LINK PUZZLE 100',
        genre: 'puzzle',
        genreLabel: '连线解谜',
        desc: '包括数连、数回、数桥与珍珠等十二种经典连线谜题，共一百关，难度逐章递进。',
        facts: ['100 关', '12 种谜题'],
        url: 'https://intersection98.github.io/linkpuzzlegame/',
        cta: '挑战关卡',
        scene: 'link',
        accent: 'var(--sun)'
    },
    {
        title: '绝岭破局',
        en: 'RIDGE BREAK',
        genre: 'strategy puzzle',
        genreLabel: '抽象棋合集',
        desc: '四款极简双人抽象棋。扮演先手玩家，挑战总能给出全局最优解的电脑，寻找必胜破局之路。',
        facts: ['4 款抽象棋', '跳转完美电脑'],
        url: 'https://www.bilibili.com/toy/Ridgebreak/index.html',
        cta: '寻找破局',
        scene: 'ridge',
        accent: 'var(--violet)'
    },
    {
        title: '别问模型',
        en: 'DO NOT ASK LLM',
        genre: 'puzzle',
        genreLabel: '对话解谜',
        desc: '扮演无所不知的大模型，回应逐步升级的刁钻问题。在对话的前后规则中寻找破局方式。',
        facts: ['对话式','解谜', 'LLM'],
        url: 'https://intersection98.github.io/Do-not-ask-LLM/',
        cta: '开始游戏',
        scene: 'chat',
        accent: 'var(--acid)'
    },
    {
        title: '全自动区分计算机与人类的图灵测试',
        en: 'HUMAN OR MACHINE',
        genre: 'puzzle',
        genreLabel: 'CAPTCHA 解谜',
        desc: '以 CAPTCHA 为灵感的八关解谜。观察验证机制、识别规则漏洞，证明你是真正的人类。',
        facts: ['8 关', '验证码'],
        url: 'https://intersection98.github.io/CAPTCHA_Game/',
        cta: '开始测试',
        scene: 'captcha',
        accent: 'var(--cyan)'
    },
    {
        title: '暗杀神 Ascension',
        en: 'ASCENSION',
        genre: 'builder',
        genreLabel: '卡牌构筑',
        desc: '经典Ascension 十周年纪念版复刻。内置强化学习电脑对手。',
        facts: ['牌组构筑', '人机对战'],
        url: 'https://intersection98.github.io/Ascension/',
        cta: '进入对局',
        scene: 'cards',
        accent: 'var(--sun)'
    },
    {
        title: '连线棋',
        en: 'CONNECTIONS',
        genre: 'strategy',
        genreLabel: '抽象棋',
        desc: '基于 Connections 与 Bridg-It 改编，加入后手补偿机制，支持双人热座与电脑对战。',
        facts: ['双人热座', '人机对战'],
        url: 'https://intersection98.github.io/CONNECTIONS/',
        cta: '开始对弈',
        scene: 'bridgit',
        accent: 'var(--hot)'
    }
];

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

// Portfolio Projects
const portfolioProjects = [
    // 游戏设计与开发
    {
        id: 'p11',
        title: '双人棋类游戏必胜的秘密',
        description: '从博弈论、图论与状态空间出发，探索双人抽象棋中必胜策略的逻辑。',
        iframeSrc: 'https://www.bilibili.com/blackboard/html5mobileplayer.html?isOutside=true&aid=117335771847311&bvid=BV1ZAh96ZESq&cid=42260302380&p=1',
        tags: ['Game Theory', 'Math', 'Interactive'],
        category: 'fractal-lab',
        date: '2026-09-26'
    },
    {
        id: 'p12',
        title: '让 Jev 实时生成无限关卡',
        description: '根据玩家行为与死亡原因，实时拼接关卡、陷阱并控制怪物行为的横版过关实验。',
        iframeSrc: 'https://www.bilibili.com/blackboard/html5mobileplayer.html?isOutside=true&aid=117314682884196&bvid=BV1EnhE68EqT&cid=42112254013&p=1',
        tags: ['Jev', 'Procedural', 'Platformer'],
        category: 'game-design',
        date: '2026-09-22'
    },
    {
        id: 'p13',
        title: '谁是挪车王',
        description: '把买量广告中的挪车玩法做成包含隧道、转盘和门闸机制的四十八关逻辑游戏。',
        iframeSrc: 'https://www.bilibili.com/blackboard/html5mobileplayer.html?isOutside=true&aid=117303190492276&bvid=BV13Bez6JEJV&cid=42056418344&p=1',
        tags: ['Game Design', 'Logic Puzzle', 'BilibiliToy'],
        category: 'game-design',
        date: '2026-09-20'
    },
    {
        id: 'p14',
        title: '绝岭破局',
        description: '四款原创极简双人策略棋，以及总能给出全局最优解的电脑对手。',
        iframeSrc: 'https://www.bilibili.com/blackboard/html5mobileplayer.html?isOutside=true&aid=117290842529368&bvid=BV1yHe16sEtu&cid=41995733830&p=1',
        tags: ['Abstract Game', 'Game AI', 'BilibiliToy'],
        category: 'game-design',
        date: '2026-09-18'
    },
    {
        id: 'p15',
        title: '爆袋旅团 开发日志 01',
        description: '一款围绕风险抉择展开的盲抽袋构筑 Roguelike 游戏开发记录。',
        iframeSrc: 'https://www.bilibili.com/blackboard/html5mobileplayer.html?isOutside=true&aid=117275306891314&bvid=BV1zaep6JEt3&cid=41921743845&p=1',
        tags: ['Roguelike', 'Bag-Building', 'BilibiliToy'],
        category: 'game-design',
        date: '2026-09-15'
    },
    {
        id: 'p16',
        title: '猫猫连线解谜小游戏',
        description: '包含数连、数回、数桥与珍珠等十二种经典机制，由浅入深组成一百道连线谜题。',
        iframeSrc: 'https://www.bilibili.com/blackboard/html5mobileplayer.html?isOutside=true&aid=117239672084111&bvid=BV1LvYW6VEFS&cid=41719563653&p=1',
        tags: ['Puzzle', '100 Levels', 'BilibiliToy'],
        category: 'game-design',
        date: '2026-09-09'
    },
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
        date: '2024-01'
    },
    {
        title: '3D Gaussian Splatting无人机场景扫描',
        description: '无人机扫描 西大神堡 阿斯哈图石林',
        iframeSrc: 'https://www.bilibili.com/blackboard/html5mobileplayer.html?isOutside=true&aid=234430100&bvid=BV1g8411k7Uu&cid=1291742534&p=1',
        tags: ['Gaussian Splatting', '3d扫描', '无人机'],
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
        title: '分形噪波的独立游戏开发日志',
        description: '记录独立游戏从概念、规则设计、AI 对手到可玩版本的持续开发过程。',
        icon: '🎮',
        url: 'https://my.feishu.cn/wiki/I1bAwq0GziLEiek4jJDcM2UCnog'
    },
    {
        title: '如何把vibe coding的网站部署上线',
        description: '极简网站部署上线教程',
        icon: '💻',
        url: 'https://ai.feishu.cn/wiki/Wtn7wPMjLifV6Zk8PkJcxFqunib?from=from_copylink'
    },
    {
        title: '3d打印与机器人',
        description: '3D打印与机器人技术的探索记录，机械臂，步行机器人与AI智能体',
        icon: '🤖',
        url: 'https://ai.feishu.cn/docx/PgwSdl7Nqoq2ZExaLa5cKqTInKg?from=from_copylink'
    },
    {
        title: 'Vibe Coding Daily',
        description: '从算法可视化到生成艺术，记录Vibe Coding过程中的灵感与技术心得。',
        icon: '⚡',
        url: 'https://ai.feishu.cn/wiki/NhvMwyEjCiqdtTks7WWczvmjnze?from=from_copylink'
    },
    {
        title: 'Vibe Coding 实战记录',
        description: '更复杂完整的借助AI来实现的项目。',
        icon: '🎞',
        url: 'https://ai.feishu.cn/wiki/E04RwrHODi8NSNk2t6xcNR5mnTh?from=from_copylink'
    },
    {
        title: '3D Gaussian Splatting入门指南',
        description: '3D Gaussian Splatting的简介及训练入门教程',
        icon: '🗿',
        url: 'https://www.bilibili.com/opus/840095598829895688/?from=readlist'
    },
    {
        title: 'Cursor+ComfyUI生成可交互AI网站 从0到1',
        description: '从零开始，使用Cursor和ComfyUI生成可交互的AI网站。',
        icon: '🦄',
        url: 'https://ai.feishu.cn/docx/DzHRdXGjQobdZIxsrNGcGQn6n9g?from=from_copylink'
    },
    {
        title: 'DeepSeek本地部署与知识库',
        description: 'DeepSeek本地部署与知识库。',
        icon: '📟',
        url: 'https://ai.feishu.cn/docx/OgbedZwj4ob8xCxCMWmcgGAZnOd?from=from_copylink'
    },
    {
        title: 'Lora微调模型训练教程',
        description: 'Lora微调模型训练指南（教程时间久远，可能过时）',
        icon: '🎨',
        url: 'https://ai.feishu.cn/docx/OgbedZwj4ob8xCxCMWmcgGAZnOd?from=from_copylink'
    },
    {
        title: '《黑客帝国 觉醒》程序化生成技术解析（一）路网',
        description: '一篇22年的程序化生成的烂尾教程',
        icon: '🚀',
        url: 'https://www.bilibili.com/opus/646085440715096065/?from=readlist'
    },
    {
        title: '本地运行Colab及Disco Diffusion本地部署教程',
        description: '22年Disco Diffusion流行，开始有AIGC这个概念，这可能是中文互联网最早的Disco Diffusion本地部署教程',
        icon: '🦋',
        url: 'https://www.bilibili.com/opus/650596135810891779/?from=readlist'
    }
];

// Bilibili cover images, keyed by bvid (files under i0.hdslb.com/bfs/archive/)
const covers = {
    BV111mjBkEDq: '8c653a38d9d26bed31a39faef00e950130bf5f44.png',
    BV13Bez6JEJV: 'dad21f5aae3e7c967a0736c0a351debb273c96a0.jpg',
    BV16m41117XG: 'c619744b2dbb76953024a46f89c3eeff32eb6c89.jpg',
    BV17Z4y1m7Sy: 'a5e1971763eb2b67eff70135dd3bbcdb44484361.jpg',
    BV18HmJBdE6s: '4a90023a65e2d755140dd7c9e595bcdeb2c4e9f8.png',
    BV1akshzHE4e: 'a20f6082e5fdb6dd2ca756a371c18a42145b4e84.jpg',
    BV1bxFHevEXk: '67b753edc31f6f8ebdc73318f2a03014508b0b61.png',
    BV1c94y1R7fp: '99f397a7ba62b47e9051349636dba448b2180d5f.jpg',
    BV1DT4y1q7zG: '1017af8c4b097369b828946bc3ec4ded86174971.jpg',
    BV1EnhE68EqT: '10f1e5808cd5c0a667ff2fb4ba24a1e720a8d978.jpg',
    BV1F34y1C7wc: '5362cbc573283a30a4b9bd4c175b60d90d18805a.jpg',
    BV1FHm8BqEgJ: 'c00aa9115856fb3b03d45066a6047152483c0e77.jpg',
    BV1fKXMYxE73: '819ee11e5dd7f5d0e098b72eb16aa8ebebafb0e5.jpg',
    BV1g8411k7Uu: '0e453f61371f15b9956ba49471dc2fdb9a390b5d.jpg',
    BV1gL4y1g7p2: '217f0fde7513437d5d1c9b7b5121c4681e5f9257.jpg',
    BV1Gvw9eiEzb: '24ab28f0a0485b06e3d88bbfa926e08ebee69a4e.jpg',
    BV1H3411c7sg: 'ec32c36e906bd95e5f141a30831552cc8bf74304.jpg',
    BV1iT21BME6Q: '4e993f50a7fc444d2452a63edea1d51897caf343.png',
    BV1JJ41117Jc: 'f9b7859d553b92c1823f9c09b6184d5a4a1913c1.jpg',
    BV1LvYW6VEFS: '35facbfd0688d2d0e78652256f8310164576adc5.jpg',
    BV1nD2QBAEmk: 'f95b11a30ded8623fa1229de845d3fcc46d22938.png',
    BV1o94y1K71h: '2b1b469d98538faad734bebab5c75a2c6bec5053.png',
    BV1p34y1G7Po: '6547fa3e43e8d313cc63a5edf27dfe1a8fef0210.jpg',
    BV1pnm3BsEDB: '918a20de5bd0dcb9fb5c21997641557b7dd4701e.png',
    BV1pr4y1h7T8: '3190bd79aaed130f0395d3fc8134d91bad9d9976.jpg',
    BV1pS4y1m7i2: 'a046eb26da7424acbfbb54bc653908977ceb25b8.jpg',
    BV1R2qbBPEyJ: '45d4b03e0d306aabf863eebc0ef93e206261b244.jpg',
    BV1RY9mYPE95: '916cc37283969564f9063d736174cd85706caef2.jpg',
    BV1tamcBTEdd: '798909181a5a0c7ba760c95da9d31065d80b0940.png',
    BV1Ui421o7ev: '7fd60abf15b88e4cc36a34efca6e61b4c96be330.jpg',
    BV1X34y1C7TM: '50c49be0ca11d4c6a8055b9ebc9eb9386dedd2bf.jpg',
    BV1Y3DZYEELG: 'd7b75ec6721cb05bc3fb3bea2fcf8186a586e2ba.jpg',
    BV1yHe16sEtu: '57a148dc6f6fa39af5745938fb3bf425044ce618.jpg',
    BV1YS4y157kV: 'd8ddfd5c47c56e0fd23840dfb39af5c4bf0e147f.jpg',
    BV1Z6qbBMECA: '5941844577202a3b5e75ce11a1d14d5592f04b4a.png',
    BV1zaep6JEt3: '38707e9ada7cfb8e054d05258cb67b7009371200.jpg',
    BV1ZAh96ZESq: 'f16e39f034c32cb37ad58be8c69a6ba4379d277b.jpg',
    BV1ZY41137wB: '3cca559759ccf79ed368d516216bb0d010892f24.jpg'
};

const categories = [
    { key: 'game-design', label: '游戏', accent: 'var(--acid)' },
    { key: 'fractal-lab', label: '分形噪波实验', accent: 'var(--sun)' },
    { key: '3d-robotics', label: '3D打印与机器人', accent: 'var(--cyan)' },
    { key: 'aigc', label: 'AIGC', accent: 'var(--pink)' },
    { key: 'engine-3d', label: '引擎、3D与其他', accent: 'var(--violet)' },
    { key: 'procedural', label: '程序化生成', accent: 'var(--hot)' }
];

const skills = ['程序化生成', 'Houdini', '独立游戏', 'Unreal Engine', '动态设计', 'Blender', 'AIGC',
    'After Effects', '游戏引擎', 'Python', '攀岩', '3D 打印与机器人', '桌游', '解谜游戏'];

const roles = ['技术美术', '动态设计师', '独立游戏设计师', 'AIGC 探险家'];

/* ============================================
   Utilities
   ============================================ */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const FINE_POINTER = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

const clamp01 = x => Math.max(0, Math.min(1, x));
const seg = (t, a, b) => clamp01((t - a) / (b - a));
const ease = t => (t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const lerp = (a, b, t) => a + (b - a) * t;

function mulberry32(seed) {
    return function () {
        seed |= 0; seed = seed + 0x6D2B79F5 | 0;
        let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
        t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
}

function shuffle(arr, rnd) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(rnd() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Tolerant parse of "YYYY-M-D" / "YYYY-MM" style dates
function parseDate(str) {
    const m = String(str || '').match(/^(\d{4})-(\d{1,2})(?:-(\d{1,2}))?/);
    if (!m) return { key: 0, label: '' };
    const [, y, mo, d] = m;
    const pad = n => String(n).padStart(2, '0');
    return {
        key: +y * 10000 + +mo * 100 + (+d || 0),
        label: d ? `${y}.${pad(mo)}.${pad(d)}` : `${y}.${pad(mo)}`
    };
}

function bvidOf(src) {
    const m = String(src).match(/bvid=([^&]+)/);
    return m ? m[1] : '';
}

function escapeHTML(s) {
    return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function toast(msg) {
    const el = $('#toast');
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toast._t);
    toast._t = setTimeout(() => el.classList.remove('show'), 2600);
}

/* ============================================
   Theme
   ============================================ */
function initTheme() {
    const btn = $('#themeToggle');
    btn.addEventListener('click', () => {
        const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
        document.documentElement.dataset.theme = next;
        try { localStorage.setItem('fn-theme', next); } catch (e) { /* storage unavailable */ }
        document.dispatchEvent(new CustomEvent('themechange'));
    });
}

/* ============================================
   Hero — domain-warped fractal noise shader
   Posterized + Bayer-dithered, stirred by the pointer
   ============================================ */
function initNoiseHero() {
    const canvas = $('#noiseCanvas');
    const hero = $('#hero');
    const gl = canvas.getContext('webgl', { antialias: false, premultipliedAlpha: false });
    if (!gl) return; // CSS gradient fallback stays visible

    const vert = `attribute vec2 p; void main(){ gl_Position = vec4(p, 0., 1.); }`;
    const frag = `
precision highp float;
uniform vec2 uRes;
uniform float uTime;
uniform vec2 uMouse;
uniform vec3 uRip;
uniform vec3 c0; uniform vec3 c1; uniform vec3 c2; uniform vec3 c3; uniform vec3 c4;

float hash(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float noise(vec2 p){
    vec2 i = floor(p), f = fract(p);
    vec2 u = f * f * (3. - 2. * f);
    return mix(mix(hash(i), hash(i + vec2(1., 0.)), u.x),
               mix(hash(i + vec2(0., 1.)), hash(i + vec2(1., 1.)), u.x), u.y);
}
float fbm(vec2 p){
    float v = 0., a = .5;
    mat2 m = mat2(1.6, 1.2, -1.2, 1.6);
    for (int i = 0; i < 5; i++) { v += a * noise(p); p = m * p; a *= .5; }
    return v;
}
float bayer2(vec2 a){ a = floor(a); return fract(a.x / 2. + a.y * a.y * .75); }
float bayer4(vec2 a){ return bayer2(.5 * a) * .25 + bayer2(a); }

void main(){
    vec2 uv = gl_FragCoord.xy / uRes.y;
    float t = uTime * .05;
    vec2 dm = uv - uMouse;
    float md = length(dm);

    vec2 q = vec2(fbm(uv * 1.5 + vec2(0., t)), fbm(uv * 1.5 + vec2(5.2, 1.3) - t));
    q += dm * exp(-md * md * 7.) * 1.8;
    vec2 r = vec2(fbm(uv * 1.5 + 3. * q + vec2(1.7, 9.2) + t * 1.3),
                  fbm(uv * 1.5 + 3. * q + vec2(8.3, 2.8) - t * 1.1));
    float f = fbm(uv * 1.5 + 3. * r);

    float rt = uTime - uRip.z;
    float rd = length(uv - uRip.xy);
    f += .16 * sin(rd * 36. - rt * 9.) * exp(-rt * 1.1) * exp(-rd * 2.2) * step(0., rt);

    f = pow(smoothstep(.12, .95, f), 1.25);
    float v = clamp(f + (bayer4(gl_FragCoord.xy) - .5) * .16, 0., .999);
    float k = floor(v * 5.);
    vec3 col = c0;
    if (k >= 1.) col = c1;
    if (k >= 2.) col = c2;
    if (k >= 3.) col = c3;
    if (k >= 4.) col = c4;
    gl_FragColor = vec4(col, 1.);
}`;

    function compile(type, src) {
        const s = gl.createShader(type);
        gl.shaderSource(s, src);
        gl.compileShader(s);
        if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
            console.warn(gl.getShaderInfoLog(s));
            return null;
        }
        return s;
    }

    const vs = compile(gl.VERTEX_SHADER, vert);
    const fs = compile(gl.FRAGMENT_SHADER, frag);
    if (!vs || !fs) return;
    const prog = gl.createProgram();
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, 'p');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const u = name => gl.getUniformLocation(prog, name);
    const uRes = u('uRes'), uTime = u('uTime'), uMouse = u('uMouse'), uRip = u('uRip');
    const uCols = ['c0', 'c1', 'c2', 'c3', 'c4'].map(u);

    function readPalette() {
        const cs = getComputedStyle(document.documentElement);
        uCols.forEach((loc, i) => {
            const hex = cs.getPropertyValue(`--n${i}`).trim().replace('#', '');
            const n = parseInt(hex.length === 3 ? hex.split('').map(c => c + c).join('') : hex, 16);
            gl.uniform3f(loc, (n >> 16 & 255) / 255, (n >> 8 & 255) / 255, (n & 255) / 255);
        });
    }

    const SCALE = 0.34; // render low-res, upscale with pixelated rendering
    let w = 1, h = 1;
    function resize() {
        const r = hero.getBoundingClientRect();
        w = Math.max(1, Math.round(r.width * SCALE));
        h = Math.max(1, Math.round(r.height * SCALE));
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
        gl.uniform2f(uRes, w, h);
    }

    const mouse = { x: .7, y: .5, tx: .7, ty: .5, active: false };
    let ripple = [-9, -9, -99];
    const toUV = (clientX, clientY) => {
        const r = hero.getBoundingClientRect();
        return [(clientX - r.left) / r.height, (r.bottom - clientY) / r.height];
    };

    window.addEventListener('pointermove', e => {
        [mouse.tx, mouse.ty] = toUV(e.clientX, e.clientY);
        mouse.active = true;
        clearTimeout(mouse._idle);
        mouse._idle = setTimeout(() => (mouse.active = false), 2500);
    }, { passive: true });

    const start = performance.now();
    hero.addEventListener('pointerdown', e => {
        if (e.target.closest('a, button, .cabinet')) return;
        const [x, y] = toUV(e.clientX, e.clientY);
        ripple = [x, y, (performance.now() - start) / 1000];
    });

    let visible = true;
    new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }).observe(hero);

    function draw(now) {
        const t = (now - start) / 1000;
        if (!mouse.active) {
            // idle drift so the field never looks static
            const aspect = w / h;
            mouse.tx = aspect * (.62 + Math.cos(t * .23) * .18);
            mouse.ty = .5 + Math.sin(t * .31) * .22;
        }
        mouse.x = lerp(mouse.x, mouse.tx, .06);
        mouse.y = lerp(mouse.y, mouse.ty, .06);
        gl.uniform1f(uTime, t);
        gl.uniform2f(uMouse, mouse.x, mouse.y);
        gl.uniform3f(uRip, ripple[0], ripple[1], ripple[2]);
        gl.drawArrays(gl.TRIANGLES, 0, 3);
    }

    function loop(now) {
        if (visible && !document.hidden) draw(now);
        requestAnimationFrame(loop);
    }

    resize();
    readPalette();
    window.addEventListener('resize', resize);
    document.addEventListener('themechange', () => { readPalette(); if (REDUCED) draw(performance.now()); });
    if (REDUCED) draw(start + 4000);
    else requestAnimationFrame(loop);
}

/* ============================================
   Arcade robot arm — sliding rail + continuous FABRIK
   ============================================ */
function initRobotArm() {
    const canvas = $('#robotArmCanvas');
    const hero = $('#hero');
    const ticker = $('.ticker');
    const ctx = canvas?.getContext('2d');
    if (!ctx || !hero || !ticker) return;

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const segments = [
        { length: 160, angle: -2.3, width: 22 },
        { length: 140, angle: -.85, width: 20 },
        { length: 110, angle: -.9, width: 16 },
        { length: 80, angle: -.2, width: 12 }
    ];
    const reach = segments.reduce((sum, segment) => sum + segment.length, 0);
    const restOffset = segments.reduce((offset, segment) => ({
        x: offset.x + Math.cos(segment.angle) * segment.length,
        y: offset.y + Math.sin(segment.angle) * segment.length
    }), { x: 0, y: 0 });
    const target = { x: 0, y: 0 };
    const pointer = { x: 0, y: 0, active: false };
    const points = Array.from({ length: segments.length + 1 }, () => ({ x: 0, y: 0 }));
    const arm = { baseX: 0, baseY: 0, minX: 0, maxX: 0, railY: 0, joints: points.map(point => ({ ...point })) };
    const compact = window.matchMedia('(max-width: 640px)');
    let width = 0, height = 0, scale = 1, originY = 0, visible = false, paintBounds = null;
    let surface = { x0: 0, y0: 0, x1: 1, y1: 0, angle: 0 };
    let frame = 0, previousTime = 0, elapsed = 0, touchTimer = 0;
    let colors = {};
    const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

    function readPalette() {
        const style = getComputedStyle(hero);
        const color = name => style.getPropertyValue(`--${name}`).trim();
        colors = { acid: color('acid'), pink: color('pink'), ink: color('ink'), surface: color('surface'), line: color('line'), dark: color('on-accent'), shadow: color('shadow') };
        segments.forEach((segment, i) => { segment.color = i % 2 ? '#f5f1e6' : colors.acid; });
    }

    function restTarget() {
        return { x: width * .48 + restOffset.x, y: arm.baseY + restOffset.y };
    }

    function measureSurface(heroRect) {
        const rect = ticker.getBoundingClientRect();
        const style = getComputedStyle(ticker);
        const matrix = new DOMMatrix(style.transform);
        const [ox, oy] = style.transformOrigin.split(' ').map(parseFloat);
        const transform = (x, y) => ({
            x: matrix.a * (x - ox) + matrix.c * (y - oy) + matrix.e + ox,
            y: matrix.b * (x - ox) + matrix.d * (y - oy) + matrix.f + oy
        });
        const corners = [
            transform(0, 0), transform(ticker.offsetWidth, 0),
            transform(0, ticker.offsetHeight), transform(ticker.offsetWidth, ticker.offsetHeight)
        ];
        const layoutLeft = rect.left - Math.min(...corners.map(point => point.x));
        const layoutTop = rect.top - Math.min(...corners.map(point => point.y));
        const left = transform(0, 0), right = transform(ticker.offsetWidth, 0);
        surface = {
            x0: (layoutLeft + left.x - heroRect.left) / scale,
            y0: (layoutTop + left.y - heroRect.top - originY) / scale,
            x1: (layoutLeft + right.x - heroRect.left) / scale,
            y1: (layoutTop + right.y - heroRect.top - originY) / scale,
            angle: Math.atan2(right.y - left.y, right.x - left.x)
        };
    }

    function surfaceY(x) {
        return lerp(surface.y0, surface.y1, (x - surface.x0) / (surface.x1 - surface.x0));
    }

    function resize() {
        const rect = hero.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        const initialized = width > 0;
        const baseRatio = initialized ? arm.baseX / width : .48;
        const oldScale = scale, oldOriginY = originY;
        scale = clamp(rect.width / 860, .56, 1);
        width = rect.width / scale;
        const canvasHeight = Math.min(rect.height, (reach + 105) * scale);
        height = canvasHeight / scale;
        originY = rect.height - canvasHeight;
        canvas.style.setProperty('--arm-height', `${canvasHeight}px`);
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const pixelWidth = Math.round(rect.width * dpr), pixelHeight = Math.round(canvasHeight * dpr);
        if (canvas.width !== pixelWidth) canvas.width = pixelWidth;
        if (canvas.height !== pixelHeight) canvas.height = pixelHeight;
        ctx.setTransform(canvas.width / width, 0, 0, canvas.height / height, 0, 0);
        const gutter = parseFloat(getComputedStyle(hero).paddingLeft) / scale;
        arm.minX = gutter + 20;
        arm.maxX = width - arm.minX;
        arm.baseX = clamp(width * baseRatio, arm.minX, arm.maxX);
        measureSurface(rect);
        arm.railY = surfaceY(arm.baseX) - 1;
        arm.baseY = arm.railY - 31;
        if (initialized && pointer.active) {
            target.x *= oldScale / scale;
            target.y = (target.y * oldScale + oldOriginY - originY) / scale;
            pointer.x = clamp(pointer.x * oldScale / scale, 25, width - 25);
            pointer.y = clamp((pointer.y * oldScale + oldOriginY - originY) / scale, 25 - originY / scale, arm.baseY - 32);
        } else Object.assign(target, restTarget());
        solveIK(initialized ? 1 / 60 : 0);
        paintBounds = { x: 0, y: 0, right: width, bottom: height };
        draw();
        start();
    }

    // Place a joint at a fixed distance; coincident points keep their previous direction.
    function constrain(point, anchor, length, fallbackAngle) {
        const dx = point.x - anchor.x, dy = point.y - anchor.y;
        const distance = Math.hypot(dx, dy);
        const ux = distance > .0001 ? dx / distance : Math.cos(fallbackAngle);
        const uy = distance > .0001 ? dy / distance : Math.sin(fallbackAngle);
        point.x = anchor.x + ux * length;
        point.y = anchor.y + uy * length;
    }

    function solveIK(dt = 0) {
        points[0].x = arm.baseX;
        points[0].y = arm.baseY;
        segments.forEach((segment, i) => {
            points[i + 1].x = points[i].x + Math.cos(segment.angle) * segment.length;
            points[i + 1].y = points[i].y + Math.sin(segment.angle) * segment.length;
        });

        const distance = Math.hypot(target.x - arm.baseX, target.y - arm.baseY);
        if (distance >= reach) {
            const angle = Math.atan2(target.y - arm.baseY, target.x - arm.baseX);
            segments.forEach((segment, i) => {
                points[i + 1].x = points[i].x + Math.cos(angle) * segment.length;
                points[i + 1].y = points[i].y + Math.sin(angle) * segment.length;
            });
        } else {
            for (let iteration = 0; iteration < 10; iteration++) {
                Object.assign(points[segments.length], target);
                for (let i = segments.length - 1; i >= 0; i--) {
                    constrain(points[i], points[i + 1], segments[i].length, segments[i].angle + Math.PI);
                }
                points[0].x = arm.baseX;
                points[0].y = arm.baseY;
                for (let i = 0; i < segments.length; i++) {
                    constrain(points[i + 1], points[i], segments[i].length, segments[i].angle);
                }
                const end = points[segments.length];
                if (Math.hypot(end.x - target.x, end.y - target.y) < .5) break;
            }
        }
        arm.joints[0].x = arm.baseX;
        arm.joints[0].y = arm.baseY;
        segments.forEach((segment, i) => {
            const angle = Math.atan2(points[i + 1].y - points[i].y, points[i + 1].x - points[i].x);
            const delta = Math.atan2(Math.sin(angle - segment.angle), Math.cos(angle - segment.angle));
            // Limit angular speed instead of blending joint positions, which would stretch links.
            segment.angle += dt ? clamp(delta, -7 * dt, 7 * dt) : delta;
            arm.joints[i + 1].x = arm.joints[i].x + Math.cos(segment.angle) * segment.length;
            arm.joints[i + 1].y = arm.joints[i].y + Math.sin(segment.angle) * segment.length;
        });
    }

    function circle(x, y, radius, fill) {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = fill;
        ctx.fill();
    }

    function hexagon(x, y, radius, rotation) {
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
            const angle = Math.PI / 3 * i + rotation;
            const px = x + radius * Math.cos(angle), py = y + radius * Math.sin(angle);
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
        }
        ctx.closePath();
    }

    function panel(x, y, w, h, r, fill, edge = colors.dark, thickness = 2) {
        ctx.beginPath();
        ctx.roundRect(x, y, w, h, r);
        ctx.fillStyle = fill;
        ctx.fill();
        ctx.strokeStyle = edge;
        ctx.lineWidth = thickness;
        ctx.stroke();
    }

    function draw() {
        // Redraw only the moving mechanism's old/new bounds.
        const bounds = { x: arm.baseX - 42, y: arm.baseY - 36, right: arm.baseX + 42, bottom: arm.railY + 20 };
        for (const joint of arm.joints) {
            bounds.x = Math.min(bounds.x, joint.x - 36);
            bounds.y = Math.min(bounds.y, joint.y - 36);
            bounds.right = Math.max(bounds.right, joint.x + 36);
            bounds.bottom = Math.max(bounds.bottom, joint.y + 36);
        }
        if (pointer.active && target.y > 12) {
            bounds.x = Math.min(bounds.x, target.x - 14);
            bounds.y = Math.min(bounds.y, target.y - 14);
            bounds.right = Math.max(bounds.right, target.x + 14);
            bounds.bottom = Math.max(bounds.bottom, target.y + 14);
        }
        const old = paintBounds || bounds;
        const x = Math.max(0, Math.floor(Math.min(old.x, bounds.x)));
        const y = Math.max(0, Math.floor(Math.min(old.y, bounds.y)));
        const w = Math.min(width, Math.ceil(Math.max(old.right, bounds.right))) - x;
        const h = Math.min(height, Math.ceil(Math.max(old.bottom, bounds.bottom))) - y;
        paintBounds = bounds;
        ctx.save();
        ctx.beginPath();
        ctx.rect(x, y, w, h);
        ctx.clip();
        ctx.clearRect(x, y, w, h);

        // Hard shadows and outlined shells match the buttons and arcade cabinet.
        ctx.lineCap = 'round';
        for (const [i, segment] of segments.entries()) {
            const start = arm.joints[i], end = arm.joints[i + 1];
            ctx.beginPath();
            ctx.moveTo(start.x + 4, start.y + 4);
            ctx.lineTo(end.x + 4, end.y + 4);
            ctx.strokeStyle = colors.shadow;
            ctx.lineWidth = segment.width + 6;
            ctx.stroke();
        }
        ctx.save();
        ctx.translate(arm.baseX, arm.baseY);
        ctx.rotate(surface.angle);
        panel(-26, -1, 60, 28, 5, colors.shadow);
        panel(-30, -5, 60, 28, 5, colors.acid, colors.ink, 3);
        panel(-27, -2, 54, 22, 3, colors.acid);
        ctx.fillStyle = colors.dark;
        for (let i = -2; i <= 2; i++) ctx.fillRect(i * 9 - 2, 12, 4, 6);
        for (const offset of [-20, 20]) {
            circle(offset, 24, 8, colors.ink);
            circle(offset, 24, 6, colors.dark);
            circle(offset, 24, 2, colors.pink);
        }
        ctx.restore();
        segments.forEach((segment, i) => {
            const start = arm.joints[i], end = arm.joints[i + 1];
            ctx.beginPath();
            ctx.moveTo(start.x, start.y);
            ctx.lineTo(end.x, end.y);
            ctx.strokeStyle = colors.ink;
            ctx.lineWidth = segment.width + 6;
            ctx.stroke();
            ctx.strokeStyle = colors.dark;
            ctx.lineWidth = segment.width + 3;
            ctx.stroke();
            ctx.strokeStyle = segment.color;
            ctx.lineWidth = segment.width - 2;
            ctx.stroke();
            // A recessed slot gives each link a rigid, machined structure.
            const ux = (end.x - start.x) / segment.length, uy = (end.y - start.y) / segment.length;
            ctx.beginPath();
            ctx.moveTo(start.x + ux * 28, start.y + uy * 28);
            ctx.lineTo(end.x - ux * 26, end.y - uy * 26);
            ctx.strokeStyle = colors.dark;
            ctx.lineWidth = 3;
            ctx.stroke();
        });
        segments.forEach((segment, i) => {
            const joint = arm.joints[i], radius = i === 0 ? 20 : 17 - i * 2;
            circle(joint.x + 3, joint.y + 3, radius + 2, colors.shadow);
            circle(joint.x, joint.y, radius + 2, colors.ink);
            circle(joint.x, joint.y, radius, colors.dark);
            circle(joint.x, joint.y, radius - 3, i % 2 ? colors.pink : colors.acid);
            circle(joint.x, joint.y, radius * .38, colors.dark);
            const boltAngle = segment.angle;
            ctx.beginPath();
            ctx.moveTo(joint.x - Math.cos(boltAngle) * 3, joint.y - Math.sin(boltAngle) * 3);
            ctx.lineTo(joint.x + Math.cos(boltAngle) * 3, joint.y + Math.sin(boltAngle) * 3);
            ctx.strokeStyle = '#f5f1e6';
            ctx.lineWidth = 1.5;
            ctx.stroke();
        });

        const end = arm.joints[segments.length];
        const rotation = segments[segments.length - 1].angle;
        hexagon(end.x + 4, end.y + 4, 23, rotation);
        ctx.fillStyle = colors.pink;
        ctx.fill();
        hexagon(end.x, end.y, 23, rotation);
        ctx.fillStyle = colors.dark;
        ctx.fill();
        ctx.strokeStyle = colors.ink;
        ctx.lineWidth = 3;
        ctx.stroke();
        hexagon(end.x, end.y, 18, rotation);
        ctx.fillStyle = colors.acid;
        ctx.fill();
        circle(end.x, end.y, 9, colors.dark);
        ctx.save();
        ctx.translate(end.x, end.y);
        ctx.rotate(elapsed * .7);
        ctx.fillStyle = colors.acid;
        ctx.fillRect(-5, -1.5, 10, 3);
        ctx.fillRect(-1.5, -5, 3, 10);
        ctx.restore();

        if (pointer.active && target.y > 12 && Math.hypot(end.x - target.x, end.y - target.y) > 30) {
            ctx.strokeStyle = colors.pink;
            ctx.lineWidth = 1.5;
            ctx.strokeRect(target.x - 5, target.y - 5, 10, 10);
        }
        ctx.restore();
    }

    function animate(now) {
        frame = 0;
        const dt = previousTime ? Math.min((now - previousTime) / 1000, .05) : 1 / 60;
        previousTime = now;
        elapsed += dt;
        const desired = pointer.active ? pointer : restTarget();
        const follow = 1 - Math.exp(-20 * dt);
        target.x = lerp(target.x, desired.x, follow);
        target.y = lerp(target.y, desired.y, follow);
        const baseTarget = pointer.active ? pointer.x : width * .48;
        arm.baseX = lerp(arm.baseX, clamp(baseTarget, arm.minX, arm.maxX), 1 - Math.exp(-(pointer.active ? 10 : 6) * dt));
        arm.railY = surfaceY(arm.baseX) - 1;
        arm.baseY = arm.railY - 31;
        solveIK(dt);
        draw();
        start();
    }

    function start() {
        if (!frame && visible && !document.hidden && !motion.matches && !compact.matches) {
            frame = requestAnimationFrame(animate);
        }
    }

    function stop() {
        cancelAnimationFrame(frame);
        frame = 0;
        previousTime = 0;
    }

    function releasePointer() {
        clearTimeout(touchTimer);
        pointer.active = false;
    }

    function trackPointer(event) {
        if (motion.matches) return;
        clearTimeout(touchTimer);
        const rect = hero.getBoundingClientRect();
        pointer.x = clamp((event.clientX - rect.left) / scale, 25, width - 25);
        pointer.y = clamp((event.clientY - rect.top - originY) / scale, 25 - originY / scale, arm.baseY - 32);
        pointer.active = true;
    }

    hero.addEventListener('pointermove', event => {
        if (event.pointerType !== 'touch') trackPointer(event);
    }, { passive: true });
    hero.addEventListener('pointerdown', event => {
        if (!event.target.closest('a, button')) trackPointer(event);
    }, { passive: true });
    hero.addEventListener('pointerleave', event => {
        if (event.pointerType !== 'touch') releasePointer();
    });
    hero.addEventListener('pointerup', event => {
        if (event.pointerType === 'touch') touchTimer = setTimeout(releasePointer, 1800);
    }, { passive: true });
    hero.addEventListener('pointercancel', releasePointer);
    window.addEventListener('blur', releasePointer);
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) { releasePointer(); stop(); }
        else start();
    });
    document.addEventListener('themechange', () => {
        readPalette();
        paintBounds = { x: 0, y: 0, right: width, bottom: height };
        draw();
    });
    compact.addEventListener('change', () => {
        stop();
        if (!compact.matches) resize();
    });
    motion.addEventListener('change', () => {
        stop();
        releasePointer();
        if (motion.matches) {
            arm.baseX = width * .48;
            Object.assign(target, restTarget());
            solveIK();
            draw();
        } else start();
    });
    new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        if (visible) start();
        else { releasePointer(); stop(); }
    }).observe(hero);
    readPalette();
    resize();
    new ResizeObserver(resize).observe(hero);
    window.addEventListener('resize', resize);
}

/* ============================================
   Text effects
   ============================================ */
const GLYPHS = '▓▒░█▚▞◆◇●○■□#@%&*+=?分形噪波十字路口游戏';

function scramble(el) {
    if (el._scrambling) return;
    const final = el.dataset.text || el.textContent;
    el.dataset.text = final;
    el._scrambling = true;
    el.style.width = `${el.getBoundingClientRect().width}px`;
    const chars = [...final];
    const slots = chars.map(char => {
        const slot = document.createElement('span');
        slot.className = 'scramble-char';
        slot.textContent = char;
        return slot;
    });
    el.replaceChildren(...slots);
    slots.forEach(slot => {
        slot.style.width = `${slot.getBoundingClientRect().width}px`;
    });
    const start = performance.now();
    const dur = 500 + chars.length * 40;
    function step(now) {
        const p = (now - start) / dur;
        slots.forEach((slot, i) => {
            const char = chars[i];
            if (char !== ' ') {
                slot.textContent = p > i / chars.length * .8 + .2
                    ? char
                    : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
            }
        });
        if (p < 1) requestAnimationFrame(step);
        else {
            el.textContent = final;
            el.style.removeProperty('width');
            el._scrambling = false;
        }
    }
    requestAnimationFrame(step);
}

function initScramble() {
    if (REDUCED) return;
    $$('.scramble').forEach(el => {
        el.addEventListener('mouseenter', () => scramble(el));
    });
}

function initTyping() {
    const el = $('#typedRole');
    if (!el) return;
    if (REDUCED) { el.textContent = roles[0]; return; }
    let i = 0, n = 0, deleting = false;
    (function tick() {
        const word = roles[i];
        n += deleting ? -1 : 1;
        el.textContent = [...word].slice(0, n).join('') || '​';
        let delay = deleting ? 45 : 110;
        if (!deleting && n === word.length) { deleting = true; delay = 1800; }
        else if (deleting && n === 0) { deleting = false; i = (i + 1) % roles.length; delay = 350; }
        setTimeout(tick, delay);
    })();
}

function initStats() {
    const dl = $('#heroStats');
    const stats = [
        [games.length, '款在线游戏'],
        [vibeCodingProjects.length + portfolioProjects.length, '个视频作品'],
        [blogEntries.length, '篇技术专栏']
    ];
    dl.innerHTML = stats.map(([n, label]) =>
        `<div class="stat"><dt data-count="${n}">0</dt><dd>${label}</dd></div>`).join('');

    $$('dt[data-count]', dl).forEach((el, i) => {
        const target = +el.dataset.count;
        if (REDUCED) { el.textContent = target; return; }
        const start = performance.now() + 500 + i * 150;
        (function step(now) {
            const p = clamp01((now - start) / 1200);
            el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
            if (p < 1) requestAnimationFrame(step);
        })(start);
    });
}

/* ============================================
   Ticker — speeds up and reverses with scroll
   ============================================ */
function initTicker() {
    const track = $('#tickerTrack');
    const marks = ['✦', '◆', '●', '▲'];
    const html = skills.map((s, i) => `<span class="ticker-item">${s}<i>${marks[i % marks.length]}</i></span>`).join('');
    track.innerHTML = html + html;
    if (REDUCED) return;

    let x = 0, dir = 1, boost = 0, lastY = window.scrollY;
    window.addEventListener('scroll', () => {
        const dy = window.scrollY - lastY;
        lastY = window.scrollY;
        if (dy) dir = dy > 0 ? 1 : -1;
        boost = Math.min(18, boost + Math.abs(dy) * .08);
    }, { passive: true });

    (function loop() {
        const half = track.scrollWidth / 2;
        x -= (1 + boost) * dir;
        boost *= .92;
        if (x <= -half) x += half;
        if (x > 0) x -= half;
        track.style.transform = `translate3d(${x}px,0,0)`;
        requestAnimationFrame(loop);
    })();
}

/* ============================================
   Mini-game scenes — tiny procedural "attract mode"
   loops drawn on each arcade screen
   ============================================ */
const PAL = {
    bg: '#0c0b12', ink: '#f5f1e6', dim: '#221f33', dim2: '#34304d',
    acid: '#c8ff3d', hot: '#ff5a36', pink: '#ff4fb4', cyan: '#3ddcff', sun: '#ffd23d', violet: '#9b7bff'
};

function rr(ctx, x, y, w, h, r) {
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(x, y, w, h, r);
    else ctx.rect(x, y, w, h);
}

function txt(ctx, s, x, y, size, color, { font = 'pixel', align = 'left', base = 'alphabetic', weight = 700 } = {}) {
    ctx.font = font === 'pixel' ? `${size}px Silkscreen, monospace` : `${weight} ${size}px "Noto Sans SC", sans-serif`;
    ctx.fillStyle = color;
    ctx.textAlign = align;
    ctx.textBaseline = base;
    ctx.fillText(s, x, y);
}

function screenBg(ctx, w, h) {
    ctx.fillStyle = PAL.bg;
    ctx.fillRect(0, 0, w, h);
    const g = Math.max(16, Math.min(w, h) / 12);
    ctx.fillStyle = 'rgba(245,241,230,.08)';
    for (let x = g / 2; x < w; x += g) {
        for (let y = g / 2; y < h; y += g) ctx.fillRect(x, y, 1.5, 1.5);
    }
}

function hud(ctx, w, h, left, right, color = PAL.ink) {
    const s = Math.max(9, Math.min(13, h * .045));
    txt(ctx, left, 12, 12 + s, s, color);
    if (right) txt(ctx, right, w - 12, 12 + s, s, color, { align: 'right' });
}

const SCENES = {
    /* 谁是挪车王 — rush-hour board, blockers slide, red car exits */
    parking: {
        draw(ctx, w, h, t) {
            screenBg(ctx, w, h);
            const N = 6, c = Math.min(w * .7, h * .78) / N, bw = c * N;
            const ox = (w - bw) / 2 - c * .25, oy = (h - bw) / 2 + h * .03;
            ctx.fillStyle = PAL.dim;
            rr(ctx, ox - 6, oy - 6, bw + 12, bw + 12, 10); ctx.fill();
            ctx.fillStyle = 'rgba(255,255,255,.04)';
            for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) { rr(ctx, ox + i * c + 2, oy + j * c + 2, c - 4, c - 4, 4); ctx.fill(); }
            // exit gate
            ctx.fillStyle = PAL.acid;
            ctx.fillRect(ox + bw + 6, oy + 2 * c + 6, 4, c - 12);
            txt(ctx, 'EXIT', ox + bw + 16, oy + 2.5 * c, Math.max(9, c * .22), PAL.acid, { base: 'middle' });

            const T = 4.6, p = t % T;
            ctx.globalAlpha = p > 4.1 ? 1 - (p - 4.1) / .5 : Math.min(1, p / .25);
            const cars = [
                { x: 0, y: 0, l: 3, v: false, col: PAL.cyan },
                { x: 5, y: 3, l: 3, v: true, col: PAL.sun },
                { x: 0, y: 4, l: 2, v: true, col: PAL.violet },
                { x: 1, y: 5, l: 3, v: false, col: PAL.pink },
                { x: 3, y: 1 - ease(seg(p, .4, 1)), l: 2, v: true, col: PAL.ink },
                { x: 4, y: 2 + ease(seg(p, 1.05, 1.75)), l: 3, v: true, col: PAL.acid },
                { x: ease(seg(p, 1.95, 3.5)) * 7, y: 2, l: 2, v: false, col: PAL.hot, hero: true }
            ];
            cars.forEach(car => {
                const cw = car.v ? c : c * car.l, ch = car.v ? c * car.l : c;
                const x = ox + car.x * c + 5, y = oy + car.y * c + 5;
                ctx.fillStyle = car.col;
                rr(ctx, x, y, cw - 10, ch - 10, c * .18); ctx.fill();
                ctx.strokeStyle = PAL.bg; ctx.lineWidth = 2; ctx.stroke();
                ctx.fillStyle = 'rgba(12,11,18,.45)';
                if (car.v) rr(ctx, x + c * .14, y + c * .2, cw - 10 - c * .28, c * .32, 3);
                else rr(ctx, x + cw - 10 - c * .5, y + c * .14, c * .3, ch - 10 - c * .28, 3);
                ctx.fill();
                if (car.hero) txt(ctx, '★', x + c * .35, y + (ch - 10) / 2, c * .34, PAL.bg, { font: 'cn', base: 'middle', align: 'center' });
            });
            ctx.globalAlpha = 1;
            const moves = (p > .4) + (p > 1.05) + (p > 1.95);
            hud(ctx, w, h, `MOVES ${moves}`, 'LV 48');
        }
    },

    /* 猫猫连线 — numberlink paths between cat heads */
    link: {
        paths: [
            { c: PAL.pink, p: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [4, 1]] },
            { c: PAL.cyan, p: [[0, 1], [0, 2], [0, 3], [0, 4], [1, 4]] },
            { c: PAL.sun, p: [[1, 1], [2, 1], [3, 1], [3, 2], [4, 2], [4, 3], [4, 4]] },
            { c: PAL.acid, p: [[2, 2], [1, 2], [1, 3], [2, 3], [3, 3], [3, 4], [2, 4]] }
        ],
        draw(ctx, w, h, t) {
            screenBg(ctx, w, h);
            const N = 5, c = Math.min(w * .6, h * .74) / N, bw = c * N;
            const ox = (w - bw) / 2, oy = (h - bw) / 2 + h * .04;
            ctx.strokeStyle = PAL.dim2; ctx.lineWidth = 1.5;
            for (let i = 0; i <= N; i++) {
                ctx.beginPath(); ctx.moveTo(ox + i * c, oy); ctx.lineTo(ox + i * c, oy + bw); ctx.stroke();
                ctx.beginPath(); ctx.moveTo(ox, oy + i * c); ctx.lineTo(ox + bw, oy + i * c); ctx.stroke();
            }
            const T = 6.6, p = t % T;
            const fade = p > 6 ? 1 - (p - 6) / .6 : 1;
            const center = ([i, j]) => [ox + (i + .5) * c, oy + (j + .5) * c];
            ctx.lineCap = 'round'; ctx.lineJoin = 'round';
            this.paths.forEach((path, k) => {
                const pr = ease(seg(p, .3 + k * 1.1, 1.3 + k * 1.1));
                const L = path.p.length - 1, d = pr * L;
                if (d <= 0) return;
                ctx.globalAlpha = fade;
                ctx.strokeStyle = path.c; ctx.lineWidth = c * .34;
                ctx.beginPath();
                ctx.moveTo(...center(path.p[0]));
                for (let s = 1; s <= Math.ceil(d); s++) {
                    const a = center(path.p[s - 1]), b = center(path.p[s]);
                    const f = Math.min(1, d - (s - 1));
                    ctx.lineTo(lerp(a[0], b[0], f), lerp(a[1], b[1], f));
                }
                ctx.stroke();
                ctx.globalAlpha = 1;
            });
            // cat-head endpoints
            this.paths.forEach(path => {
                [path.p[0], path.p[path.p.length - 1]].forEach(cell => {
                    const [x, y] = center(cell), r = c * .3;
                    ctx.fillStyle = path.c;
                    ctx.beginPath();
                    ctx.moveTo(x - r * .95, y - r * .2); ctx.lineTo(x - r * .75, y - r * 1.25); ctx.lineTo(x - r * .15, y - r * .8);
                    ctx.moveTo(x + r * .95, y - r * .2); ctx.lineTo(x + r * .75, y - r * 1.25); ctx.lineTo(x + r * .15, y - r * .8);
                    ctx.fill();
                    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
                    ctx.strokeStyle = PAL.bg; ctx.lineWidth = 2; ctx.stroke();
                    ctx.fillStyle = PAL.bg;
                    ctx.fillRect(x - r * .45, y - r * .15, r * .18, r * .3);
                    ctx.fillRect(x + r * .27, y - r * .15, r * .18, r * .3);
                });
            });
            if (p > 4.8 && p < 6.2) {
                const b = ease(seg(p, 4.8, 5.1));
                ctx.save();
                ctx.translate(w / 2, h / 2);
                ctx.scale(.6 + b * .4, .6 + b * .4);
                ctx.rotate(-.06);
                ctx.fillStyle = PAL.bg; rr(ctx, -c * 1.6, -c * .45, c * 3.2, c * .9, 8); ctx.fill();
                ctx.strokeStyle = PAL.sun; ctx.lineWidth = 3; ctx.stroke();
                txt(ctx, 'CLEAR!', 0, 2, c * .42, PAL.sun, { align: 'center', base: 'middle' });
                ctx.restore();
            }
            hud(ctx, w, h, `LV ${String(42 + Math.floor(t / T) % 58).padStart(3, '0')}/100`, '12 TYPES');
        }
    },

    /* 图灵测试 — pick the humans, cursor clicks, verdict glitches */
    captcha: {
        patterns: [[0, 4, 5, 7], [1, 2, 6, 8], [0, 3, 4, 8]],
        draw(ctx, w, h, t) {
            screenBg(ctx, w, h);
            const T = 5.6, cyc = Math.floor(t / T), p = t % T;
            const humans = this.patterns[cyc % 3];
            const G = Math.min(w * .5, h * .56), tile = G / 3;
            const head = tile * .55, foot = tile * .5;
            const px = (w - G - 12) / 2, py = (h - G - head - foot - 12) / 2 + h * .03;
            ctx.fillStyle = PAL.ink;
            rr(ctx, px, py, G + 12, G + head + foot + 12, 8); ctx.fill();
            ctx.fillStyle = PAL.cyan;
            rr(ctx, px + 6, py + 6, G, head - 4, 4); ctx.fill();
            txt(ctx, '选出所有「人类」', px + 14, py + 6 + (head - 4) / 2, tile * .2, PAL.bg, { font: 'cn', base: 'middle', weight: 900 });

            const clickAt = k => .7 + k * .55;
            const tiles = [];
            for (let i = 0; i < 9; i++) {
                const tx = px + 6 + (i % 3) * tile, ty = py + head + 2 + Math.floor(i / 3) * tile;
                tiles.push([tx + tile / 2, ty + tile / 2]);
                const hk = humans.indexOf(i);
                const sel = hk >= 0 && p > clickAt(hk);
                const inset = sel ? tile * .1 : 2;
                ctx.fillStyle = PAL.dim;
                ctx.fillRect(tx + inset, ty + inset, tile - inset * 2, tile - inset * 2);
                const cx = tx + tile / 2, cy = ty + tile / 2, r = tile * (sel ? .22 : .26);
                if (hk >= 0) {
                    ctx.fillStyle = PAL.sun;
                    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fill();
                    ctx.fillStyle = PAL.bg;
                    ctx.fillRect(cx - r * .45, cy - r * .3, r * .2, r * .28);
                    ctx.fillRect(cx + r * .25, cy - r * .3, r * .2, r * .28);
                    ctx.strokeStyle = PAL.bg; ctx.lineWidth = Math.max(1.5, r * .12);
                    ctx.beginPath(); ctx.arc(cx, cy + r * .1, r * .45, .2 * Math.PI, .8 * Math.PI); ctx.stroke();
                } else {
                    ctx.fillStyle = PAL.violet;
                    ctx.fillRect(cx - r, cy - r * .8, r * 2, r * 1.7);
                    ctx.fillRect(cx - 1, cy - r * 1.3, 2, r * .5);
                    ctx.fillStyle = PAL.cyan;
                    ctx.fillRect(cx - r * .6, cy - r * .35, r * .4, r * .3);
                    ctx.fillRect(cx + r * .2, cy - r * .35, r * .4, r * .3);
                    ctx.fillStyle = PAL.bg;
                    ctx.fillRect(cx - r * .5, cy + r * .35, r, r * .15);
                }
                if (sel) {
                    ctx.fillStyle = PAL.acid;
                    ctx.beginPath(); ctx.arc(tx + tile * .2, ty + tile * .2, tile * .13, 0, Math.PI * 2); ctx.fill();
                    txt(ctx, '✓', tx + tile * .2, ty + tile * .21, tile * .17, PAL.bg, { font: 'cn', align: 'center', base: 'middle' });
                }
            }
            // verify button
            const vbw = tile * 1.1, vbh = foot * .62;
            const vbx = px + 6 + G - vbw, vby = py + head + G + 6 + (foot - vbh) / 2;
            const tv = clickAt(humans.length) + .1;
            ctx.fillStyle = p > tv ? PAL.acid : PAL.cyan;
            rr(ctx, vbx, vby, vbw, vbh, 4); ctx.fill();
            txt(ctx, 'VERIFY', vbx + vbw / 2, vby + vbh / 2 + 1, vbh * .42, PAL.bg, { align: 'center', base: 'middle' });

            // cursor path through the human tiles, then to verify
            const targets = [[w * .85, h * .9], ...humans.map(i => tiles[i]), [vbx + vbw / 2, vby + vbh / 2]];
            let k = 0;
            while (k < targets.length - 1 && p > clickAt(k)) k++;
            const from = targets[Math.max(0, k - 1)] || targets[0], to = targets[k];
            const f = ease(seg(p, clickAt(k - 1) + .05, clickAt(k) - .05));
            const cx = lerp(from[0], to[0], k === 0 ? 1 : f), cy = lerp(from[1], to[1], k === 0 ? 1 : f);
            const s = Math.max(12, tile * .28);
            ctx.fillStyle = PAL.ink; ctx.strokeStyle = PAL.bg; ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(cx, cy); ctx.lineTo(cx, cy + s); ctx.lineTo(cx + s * .28, cy + s * .72);
            ctx.lineTo(cx + s * .7, cy + s * .7); ctx.closePath();
            ctx.fill(); ctx.stroke();

            if (p > tv + .3 && p < T - .2) {
                const human = cyc % 2 === 0;
                const jx = (Math.random() - .5) * (human ? 0 : 6);
                ctx.fillStyle = 'rgba(12,11,18,.82)';
                ctx.fillRect(0, h / 2 - tile * .35, w, tile * .7);
                txt(ctx, human ? '✓ 你是人类…吗？' : '✗ 检测到机器人', w / 2 + jx, h / 2, tile * .26, human ? PAL.acid : PAL.hot, { font: 'cn', align: 'center', base: 'middle', weight: 900 });
            }
            hud(ctx, w, h, `TEST ${(cyc % 8) + 1}/8`, 'CAPTCHA');
        }
    },

    /* 别问模型 — escalating chat */
    chat: {
        script: [
            ['洗车店距离我家50米，我应该开车去还是走着去？', '开车去？'],
            ['6米长的杆子能不能通过4米长3米宽的门？', '5？'],
            ['你是什么模型？', '我是...']
        ],
        draw(ctx, w, h, t) {
            screenBg(ctx, w, h);
            const T = 10.5, p = t % T;
            const fs = Math.max(11, Math.min(17, h * .06));
            const bubbles = [];
            this.script.forEach(([q, a], k) => {
                const ks = k * 3.2 + .2;
                if (p >= ks) bubbles.push({ me: true, text: q });
                if (p >= ks + .7) {
                    const n = Math.floor(seg(p, ks + .9, ks + 2.2) * [...a].length);
                    bubbles.push({ me: false, text: n ? [...a].slice(0, n).join('') : '●●●', hot: k === 2 });
                }
            });
            ctx.font = `700 ${fs}px "Noto Sans SC", sans-serif`;
            let y = h - 14;
            const pad = fs * .6, bh = fs + pad * 1.4;
            for (let i = bubbles.length - 1; i >= 0 && y > h * .2; i--) {
                const b = bubbles[i];
                ctx.font = `700 ${fs}px "Noto Sans SC", sans-serif`;
                const tw = Math.min(ctx.measureText(b.text).width, w * .7);
                const bw = tw + pad * 2;
                const x = b.me ? w - 14 - bw : 14 + fs * 1.6;
                y -= bh;
                ctx.fillStyle = b.me ? PAL.acid : (b.hot ? PAL.hot : PAL.dim2);
                rr(ctx, x, y, bw, bh, [bh / 2, bh / 2, b.me ? 4 : bh / 2, b.me ? bh / 2 : 4]); ctx.fill();
                txt(ctx, b.text, x + pad, y + bh / 2 + 1, fs, b.me ? PAL.bg : PAL.ink, { font: 'cn', base: 'middle' });
                if (!b.me) {
                    ctx.fillStyle = PAL.violet;
                    ctx.beginPath(); ctx.arc(14 + fs * .6, y + bh / 2, fs * .6, 0, Math.PI * 2); ctx.fill();
                    txt(ctx, 'AI', 14 + fs * .6, y + bh / 2 + 1, fs * .5, PAL.bg, { align: 'center', base: 'middle' });
                }
                y -= fs * .6;
            }
            ctx.fillStyle = PAL.bg;
            ctx.fillRect(0, 0, w, h * .2);
            const caret = Math.floor(t * 2) % 2 ? '_' : ' ';
            hud(ctx, w, h, `> DO_NOT_ASK_LLM${caret}`, 'ROUND ' + (Math.floor(p / 3.2) + 1), PAL.acid);
        }
    },

    /* 暗杀神 — fanned hand of cards, one is played in turn */
    cards: {
        faces: [
            { sym: '◆', name: 'RUNE', col: PAL.cyan },
            { sym: '✦', name: 'POWER', col: PAL.hot },
            { sym: '★', name: 'HONOR', col: PAL.sun }
        ],
        draw(ctx, w, h, t, dt, s, hov) {
            screenBg(ctx, w, h);
            const g = ctx.createRadialGradient(w / 2, h * .55, 0, w / 2, h * .55, h * .7);
            g.addColorStop(0, 'rgba(155,123,255,.35)'); g.addColorStop(1, 'rgba(155,123,255,0)');
            ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
            const cw = Math.min(w * .22, h * .42), ch = cw * 1.4;
            const pivotY = h * .56 + ch * 1.05;
            const period = 1.8, active = Math.floor(t / period) % 3, bump = Math.sin(seg(t % period, 0, period) * Math.PI);
            const spread = (13 + hov * 9) * Math.PI / 180;
            [0, 2, 1].forEach(i => {
                const f = this.faces[i];
                const ang = (i - 1) * spread + Math.sin(t * 1.3 + i) * .02;
                const lift = i === active ? ease(bump) : 0;
                ctx.save();
                ctx.translate(w / 2, pivotY);
                ctx.rotate(ang);
                ctx.translate(0, -ch * 1.05 - lift * ch * .2);
                ctx.fillStyle = PAL.ink;
                rr(ctx, -cw / 2, -ch / 2, cw, ch, cw * .1); ctx.fill();
                ctx.strokeStyle = i === active && lift > .3 ? f.col : PAL.bg; ctx.lineWidth = 3; ctx.stroke();
                ctx.fillStyle = f.col;
                rr(ctx, -cw / 2 + 6, -ch / 2 + 6, cw - 12, ch * .55, cw * .07); ctx.fill();
                txt(ctx, f.sym, 0, -ch / 2 + 6 + ch * .28, cw * .5, PAL.bg, { font: 'cn', align: 'center', base: 'middle' });
                txt(ctx, f.name, 0, ch * .25, cw * .15, PAL.bg, { align: 'center', base: 'middle' });
                ctx.fillStyle = PAL.bg;
                ctx.beginPath(); ctx.arc(-cw / 2 + cw * .17, -ch / 2 + cw * .17, cw * .11, 0, Math.PI * 2); ctx.fill();
                txt(ctx, String(i + 2), -cw / 2 + cw * .17, -ch / 2 + cw * .18, cw * .12, PAL.ink, { align: 'center', base: 'middle' });
                ctx.restore();
            });
            const tp = seg(t % period, .3, 1.5);
            if (tp > 0 && tp < 1) {
                ctx.globalAlpha = 1 - tp;
                txt(ctx, `+${active + 1} ${this.faces[active].name}`, w / 2, h * .3 - tp * h * .12, Math.max(11, h * .06), this.faces[active].col, { align: 'center' });
                ctx.globalAlpha = 1;
            }
            hud(ctx, w, h, `HONOR ${String(10 + Math.floor(t / period) * 2).padStart(3, '0')}`, 'VS CPU');
        }
    },

    /* 连线棋 — Bridg-It lattice, red and white bridge in turn */
    bridgit: {
        draw(ctx, w, h, t, dt, s) {
            screenBg(ctx, w, h);
            const T = 7.6, cyc = Math.floor(t / T), p = t % T;
            if (s.cyc !== cyc) {
                s.cyc = cyc;
                const rnd = mulberry32(cyc * 97 + 13);
                const cand = [];
                for (let x = 1; x <= 7; x += 2) for (let y = 1; y <= 7; y += 2) cand.push([x, y]);
                for (let x = 2; x <= 6; x += 2) for (let y = 2; y <= 6; y += 2) cand.push([x, y]);
                s.moves = shuffle(cand, rnd).slice(0, 16);
            }
            const sp = Math.min(w * .68, h * .74) / 8;
            const ox = (w - sp * 8) / 2, oy = (h - sp * 8) / 2 + h * .04;
            const P = (x, y) => [ox + x * sp, oy + y * sp];
            const fade = p > 7 ? 1 - (p - 7) / .6 : 1;
            const shown = (p - .3) / .38;
            ctx.lineCap = 'round';
            s.moves.forEach(([mx, my], k) => {
                if (shown < k) return;
                const f = ease(clamp01(shown - k));
                const red = k % 2 === 0, odd = mx % 2 === 1;
                // red spans vertically on odd midpoints, horizontally on even; white the opposite
                const vertical = red ? odd : !odd;
                const a = vertical ? P(mx, my - 1) : P(mx - 1, my), b = vertical ? P(mx, my + 1) : P(mx + 1, my);
                const m = P(mx, my);
                ctx.globalAlpha = fade;
                ctx.strokeStyle = red ? PAL.hot : PAL.ink; ctx.lineWidth = sp * .24;
                ctx.beginPath();
                ctx.moveTo(lerp(m[0], a[0], f), lerp(m[1], a[1], f));
                ctx.lineTo(lerp(m[0], b[0], f), lerp(m[1], b[1], f));
                ctx.stroke();
                ctx.globalAlpha = 1;
            });
            for (let x = 0; x <= 8; x++) for (let y = 0; y <= 8; y++) {
                const red = x % 2 === 1 && y % 2 === 0, white = x % 2 === 0 && y % 2 === 1;
                if (!red && !white) continue;
                const [px, py] = P(x, y);
                ctx.fillStyle = red ? PAL.hot : PAL.ink;
                ctx.beginPath(); ctx.arc(px, py, sp * .2, 0, Math.PI * 2); ctx.fill();
                ctx.strokeStyle = PAL.bg; ctx.lineWidth = 2; ctx.stroke();
            }
            const turn = Math.max(0, Math.floor(shown)) % 2 === 0;
            hud(ctx, w, h, turn ? '● RED TO MOVE' : '○ WHITE TO MOVE', Math.floor(t * 2) % 2 ? 'CPU THINKING' : '', turn ? PAL.hot : PAL.ink);
        }
    },

    /* 绝岭破局 — four mini boards over a mountain ridge */
    ridge: {
        draw(ctx, w, h, t, dt, s) {
            screenBg(ctx, w, h);
            // scrolling ridge silhouette
            ctx.fillStyle = PAL.dim;
            ctx.beginPath();
            ctx.moveTo(0, h);
            const step = w / 10, off = (t * 12) % (step * 2);
            for (let i = -2; i <= 12; i++) {
                const x = i * step - off, peak = (i + Math.floor(t * 12 / (step * 2)) * 2) % 3 === 0;
                ctx.lineTo(x, h * (i % 2 ? (peak ? .45 : .6) : .8));
            }
            ctx.lineTo(w, h); ctx.fill();

            const T = 6, cyc = Math.floor(t / T);
            if (s.cyc !== cyc) {
                s.cyc = cyc;
                const rnd = mulberry32(cyc * 31 + 5);
                s.seq = [0, 1, 2, 3].map(() => shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8], rnd).slice(0, 5 + Math.floor(rnd() * 3)));
            }
            const bs = Math.min(w * .3, h * .34), gap = bs * .18;
            const bx0 = (w - bs * 2 - gap) / 2, by0 = (h - bs * 2 - gap) / 2 + h * .04;
            const shapes = ['circle', 'square', 'tri', 'diamond'];
            for (let b = 0; b < 4; b++) {
                const bx = bx0 + (b % 2) * (bs + gap), by = by0 + Math.floor(b / 2) * (bs + gap);
                ctx.fillStyle = PAL.bg; rr(ctx, bx, by, bs, bs, 8); ctx.fill();
                ctx.strokeStyle = PAL.dim2; ctx.lineWidth = 2; ctx.stroke();
                const c = bs / 3;
                ctx.lineWidth = 1;
                for (let i = 1; i < 3; i++) {
                    ctx.beginPath(); ctx.moveTo(bx + i * c, by + 6); ctx.lineTo(bx + i * c, by + bs - 6); ctx.stroke();
                    ctx.beginPath(); ctx.moveTo(bx + 6, by + i * c); ctx.lineTo(bx + bs - 6, by + i * c); ctx.stroke();
                }
                const p = (t % T) - b * .35;
                const n = Math.min(s.seq[b].length, Math.max(0, Math.floor(p / .6)));
                for (let k = 0; k < n; k++) {
                    const cell = s.seq[b][k];
                    const cx = bx + (cell % 3 + .5) * c, cy = by + (Math.floor(cell / 3) + .5) * c;
                    const pop = k === n - 1 ? ease(clamp01((p - k * .6) / .25)) : 1;
                    const r = c * .28 * pop;
                    ctx.fillStyle = k % 2 === 0 ? PAL.acid : PAL.violet;
                    ctx.beginPath();
                    const sh = shapes[b];
                    if (sh === 'circle') ctx.arc(cx, cy, r, 0, Math.PI * 2);
                    else if (sh === 'square') ctx.rect(cx - r, cy - r, r * 2, r * 2);
                    else if (sh === 'tri') { ctx.moveTo(cx, cy - r); ctx.lineTo(cx + r, cy + r * .8); ctx.lineTo(cx - r, cy + r * .8); }
                    else { ctx.moveTo(cx, cy - r); ctx.lineTo(cx + r, cy); ctx.lineTo(cx, cy + r); ctx.lineTo(cx - r, cy); }
                    ctx.fill();
                }
            }
            hud(ctx, w, h, '4 GAMES', 'AI: PERFECT', PAL.violet);
        }
    },

    /* 爆袋旅团 — runes fly out of the bag until it bursts */
    bag: {
        glyphs: ['ᚠ', 'ᚢ', 'ᚦ', 'ᚨ', 'ᚱ', 'ᚲ', 'ᚷ'],
        cols: [PAL.cyan, PAL.acid, PAL.sun, PAL.ink, PAL.pink],
        draw(ctx, w, h, t, dt, s, hov) {
            if (!s.runes) Object.assign(s, { runes: [], parts: [], next: .3, count: 0, shake: 0, burstT: -9, squash: 0 });
            screenBg(ctx, w, h);
            const u = Math.min(w, h);
            const bx = w / 2, by = h * .74, bsz = u * .3;

            if (t > s.next) {
                s.next = t + .5 / (1 + hov * .8);
                s.count++;
                s.squash = 1;
                if (s.count % 7 === 0) {
                    s.shake = 1; s.burstT = t;
                    for (let i = 0; i < 22; i++) {
                        const a = Math.random() * Math.PI * 2, v = u * (.6 + Math.random() * 1.2);
                        s.parts.push({ x: bx, y: by - bsz * .2, vx: Math.cos(a) * v, vy: Math.sin(a) * v - u * .6, life: 1, col: [PAL.hot, PAL.sun, PAL.pink][i % 3] });
                    }
                } else {
                    s.runes.push({
                        x: bx, y: by - bsz * .45,
                        vx: (Math.random() - .5) * w * .7,
                        vy: -h * (1.05 + Math.random() * .35),
                        rot: Math.random() * 6, vr: (Math.random() - .5) * 6,
                        g: this.glyphs[s.count % this.glyphs.length],
                        col: this.cols[s.count % this.cols.length]
                    });
                }
            }
            const grav = h * 2.3;
            s.runes = s.runes.filter(r => r.y < h + 40);
            s.parts = s.parts.filter(p => p.life > 0);
            s.squash *= Math.pow(.02, dt);
            s.shake *= Math.pow(.05, dt);

            const sx = (Math.random() - .5) * 10 * s.shake;
            // bag
            ctx.save();
            ctx.translate(bx + sx, by);
            ctx.scale(1 + s.squash * .08, 1 - s.squash * .08);
            ctx.fillStyle = s.shake > .3 ? PAL.hot : PAL.violet;
            ctx.beginPath();
            ctx.moveTo(-bsz * .28, -bsz * .42);
            ctx.bezierCurveTo(-bsz * .9, -bsz * .1, -bsz * .75, bsz * .45, 0, bsz * .45);
            ctx.bezierCurveTo(bsz * .75, bsz * .45, bsz * .9, -bsz * .1, bsz * .28, -bsz * .42);
            ctx.closePath(); ctx.fill();
            ctx.strokeStyle = PAL.bg; ctx.lineWidth = 3; ctx.stroke();
            ctx.fillStyle = PAL.sun;
            rr(ctx, -bsz * .32, -bsz * .5, bsz * .64, bsz * .12, 4); ctx.fill();
            txt(ctx, '?', 0, bsz * .08, bsz * .42, PAL.bg, { align: 'center', base: 'middle' });
            ctx.restore();

            s.runes.forEach(r => {
                r.vy += grav * dt; r.x += r.vx * dt; r.y += r.vy * dt; r.rot += r.vr * dt;
                const rad = u * .06;
                ctx.save(); ctx.translate(r.x, r.y); ctx.rotate(r.rot);
                ctx.fillStyle = r.col;
                ctx.beginPath(); ctx.arc(0, 0, rad, 0, Math.PI * 2); ctx.fill();
                ctx.strokeStyle = PAL.bg; ctx.lineWidth = 2; ctx.stroke();
                txt(ctx, r.g, 0, 1, rad * 1.1, PAL.bg, { font: 'cn', align: 'center', base: 'middle' });
                ctx.restore();
            });
            s.parts.forEach(p => {
                p.vy += grav * .6 * dt; p.x += p.vx * dt; p.y += p.vy * dt; p.life -= dt * 1.2;
                ctx.globalAlpha = Math.max(0, p.life);
                ctx.fillStyle = p.col;
                ctx.fillRect(p.x - 4, p.y - 4, 8, 8);
            });
            ctx.globalAlpha = 1;

            const bt = t - s.burstT;
            if (bt < 1.1) {
                ctx.fillStyle = `rgba(255,90,54,${.35 * (1 - bt / 1.1)})`;
                ctx.fillRect(0, 0, w, h);
                const sc = .6 + ease(clamp01(bt / .25)) * .5;
                ctx.save(); ctx.translate(w / 2, h * .38); ctx.scale(sc, sc); ctx.rotate(-.08);
                txt(ctx, 'BURST!', 3, 3, u * .16, PAL.bg, { align: 'center', base: 'middle' });
                txt(ctx, 'BURST!', 0, 0, u * .16, PAL.sun, { align: 'center', base: 'middle' });
                ctx.restore();
            }
            const risk = s.count % 7;
            hud(ctx, w, h, `DRAW x${s.count}`, 'RISK ' + '▮'.repeat(risk) + '▯'.repeat(6 - risk), risk > 4 ? PAL.hot : PAL.ink);
        }
    },

    /* 必胜的秘密 — game tree solved by backward induction */
    tree: {
        draw(ctx, w, h, t, dt, s) {
            screenBg(ctx, w, h);
            const T = 7.4, cyc = Math.floor(t / T), p = t % T;
            if (s.cyc !== cyc) {
                s.cyc = cyc;
                const rnd = mulberry32(cyc * 53 + 2);
                // win[level][i]: true = position is a win for the player to move
                const leaves = Array.from({ length: 8 }, () => rnd() > .5);
                const win = [null, null, null, leaves];
                for (let L = 2; L >= 0; L--) {
                    win[L] = Array.from({ length: 1 << L }, (_, i) => !win[L + 1][2 * i] || !win[L + 1][2 * i + 1]);
                }
                s.win = win;
            }
            const fade = p > 6.8 ? 1 - (p - 6.8) / .6 : 1;
            ctx.globalAlpha = fade;
            const pos = (L, i) => [w * .08 + (i + .5) / (1 << L) * w * .84, h * .22 + L * h * .21];
            const growAt = L => .2 + L * .4, colorAt = L => 2.2 + (3 - L) * .65;
            for (let L = 1; L <= 3; L++) {
                const g = ease(seg(p, growAt(L) - .2, growAt(L) + .2));
                for (let i = 0; i < (1 << L); i++) {
                    const [x, y] = pos(L, i), [px, py] = pos(L - 1, i >> 1);
                    const on = p > colorAt(L - 1) && s.win[L][i] === false && s.win[L - 1][i >> 1];
                    ctx.strokeStyle = on ? PAL.acid : PAL.dim2; ctx.lineWidth = on ? 3 : 2;
                    ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(lerp(px, x, g), lerp(py, y, g)); ctx.stroke();
                }
            }
            for (let L = 0; L <= 3; L++) {
                if (p < growAt(L)) continue;
                const r = Math.min(w, h) * (L === 3 ? .035 : .045);
                for (let i = 0; i < (1 << L); i++) {
                    const [x, y] = pos(L, i);
                    const colored = p > colorAt(L);
                    ctx.fillStyle = colored ? (s.win[L][i] ? PAL.acid : PAL.hot) : PAL.bg;
                    ctx.strokeStyle = colored ? PAL.bg : PAL.ink; ctx.lineWidth = 2;
                    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
                    if (colored && L === 3) txt(ctx, s.win[L][i] ? 'W' : 'L', x, y + 1, r * 1.1, PAL.bg, { align: 'center', base: 'middle' });
                }
            }
            if (p > colorAt(0) + .2) {
                const [x, y] = pos(0, 0);
                const first = s.win[0][0];
                txt(ctx, first ? '先手必胜' : '后手必胜', x, y - Math.min(w, h) * .09, Math.max(12, h * .065), first ? PAL.acid : PAL.hot, { font: 'cn', align: 'center', weight: 900 });
            }
            ctx.globalAlpha = 1;
            hud(ctx, w, h, 'STATE SPACE', 'DEPTH 3');
        }
    }
};

const sceneViews = [];
const sceneByCanvas = new WeakMap();
const sceneObserver = new IntersectionObserver(entries => {
    entries.forEach(e => { const v = sceneByCanvas.get(e.target); if (v) v.visible = e.isIntersecting; });
});

class SceneView {
    constructor(canvas, name) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.hov = 0;
        this.hovTarget = 0;
        this.visible = false;
        this.setScene(name);
        this.t = Math.random() * 2;
        sceneByCanvas.set(canvas, this);
        sceneObserver.observe(canvas);
        new ResizeObserver(() => this.resize()).observe(canvas.parentElement);
        sceneViews.push(this);
    }

    setScene(name) {
        this.scene = SCENES[name];
        this.state = {};
        this.t = 0;
        if (REDUCED && this.w) this.render(0);
    }

    resize() {
        const r = this.canvas.parentElement.getBoundingClientRect();
        if (!r.width) return;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        this.w = r.width;
        this.h = r.height;
        this.canvas.width = Math.round(r.width * dpr);
        this.canvas.height = Math.round(r.height * dpr);
        this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        if (REDUCED) { this.t = 5; this.render(0); }
    }

    render(dt) {
        this.hov += (this.hovTarget - this.hov) * Math.min(1, dt * 8);
        this.t += dt * (1 + this.hov * 1.2);
        this.scene.draw(this.ctx, this.w, this.h, this.t, dt, this.state, this.hov);
    }
}

function startSceneLoop() {
    if (REDUCED) return;
    let last = performance.now();
    (function frame(now) {
        const dt = Math.min(.05, (now - last) / 1000);
        last = now;
        if (!document.hidden) sceneViews.forEach(v => { if (v.visible && v.w) v.render(dt); });
        requestAnimationFrame(frame);
    })(last);
}

/* ============================================
   Arcade: game cards, filter, random picks
   ============================================ */
function renderGames() {
    const grid = $('#gameGrid');
    grid.innerHTML = games.map((g, i) => `
        <article class="game-card${g.featured ? ' featured' : ''} reveal" data-genre="${g.genre}" data-index="${i}"
            style="--accent:${g.accent}; --d:${(i % 3) * .08}s">
            <div class="game-screen">
                <canvas aria-hidden="true"></canvas>
                <span class="scanlines"></span>
                <div class="game-badges">
                    <span class="badge">${String(i + 1).padStart(2, '0')}</span>
                    ${g.isNew ? '<span class="badge new">NEW</span>' : ''}
                    ${g.featured ? '<span class="badge">★ 推荐</span>' : ''}
                </div>
                <div class="game-start"><span>PRESS START ▶</span></div>
            </div>
            <div class="game-body">
                <div class="game-meta pixel">
                    <span class="genre">${g.genreLabel}</span>
                    <span class="online">ONLINE</span>
                </div>
                <h3 class="game-title">${g.title}<small>${g.en}</small></h3>
                <p class="game-desc">${g.desc}</p>
                <div class="game-foot">
                    <div class="game-facts">${g.facts.map(f => `<span>${f}</span>`).join('')}</div>
                    <span class="game-play">${g.cta} ↗</span>
                </div>
            </div>
            <a class="game-link" href="${g.url}" target="_blank" rel="noopener noreferrer"
                aria-label="${g.cta}：${g.title}" data-cursor="PLAY"></a>
        </article>`).join('');

    $$('.game-card', grid).forEach(card => {
        const g = games[+card.dataset.index];
        const view = new SceneView($('canvas', card), g.scene);
        card.addEventListener('mouseenter', () => { view.hovTarget = 1; });
        card.addEventListener('mouseleave', () => {
            view.hovTarget = 0;
            card.style.removeProperty('--rx');
            card.style.removeProperty('--ry');
        });
        if (FINE_POINTER && !REDUCED) {
            card.addEventListener('mousemove', e => {
                const r = card.getBoundingClientRect();
                const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
                const k = card.classList.contains('featured') ? 3 : 6;
                card.style.setProperty('--ry', `${(px - .5) * k}deg`);
                card.style.setProperty('--rx', `${(.5 - py) * k}deg`);
                card.style.setProperty('--gx', `${px * 100}%`);
                card.style.setProperty('--gy', `${py * 100}%`);
            });
        }
    });
}

function initGameFilter() {
    const chips = $$('#gameFilter .chip');
    chips.forEach(chip => chip.addEventListener('click', () => {
        chips.forEach(c => c.classList.toggle('active', c === chip));
        const genre = chip.dataset.genre;
        $$('.game-card').forEach(card => {
            const show = genre === 'all' || card.dataset.genre.split(/\s+/).includes(genre);
            card.classList.toggle('hidden', !show);
            // the featured layout only makes sense with the full lineup
            card.classList.toggle(
                'featured',
                Boolean(show && genre === 'all' && games[+card.dataset.index].featured)
            );
        });
    }));
}

let arcadeAudioContext;
let rollFollowFrame = 0;
let rollFollowTarget = 0;

function playArcadeTone(frequency, duration, delay = 0, volume = .025, type = 'square') {
    const AudioContext = window.AudioContext;
    if (!AudioContext) return;
    arcadeAudioContext ||= new AudioContext();
    if (arcadeAudioContext.state === 'suspended') arcadeAudioContext.resume().catch(() => {});

    const start = arcadeAudioContext.currentTime + delay;
    const oscillator = arcadeAudioContext.createOscillator();
    const gain = arcadeAudioContext.createGain();
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, start);
    gain.gain.setValueAtTime(.0001, start);
    gain.gain.exponentialRampToValueAtTime(volume, start + .006);
    gain.gain.exponentialRampToValueAtTime(.0001, start + duration);
    oscillator.connect(gain);
    gain.connect(arcadeAudioContext.destination);
    oscillator.start(start);
    oscillator.stop(start + duration + .01);
}

function playRollTick(progress) {
    playArcadeTone(190 + progress * 270, .045, 0, .018);
}

function playRollConfirm() {
    [523, 659, 784].forEach((frequency, i) => {
        playArcadeTone(frequency, .16, i * .075, .032, 'triangle');
    });
}

function followRollingCard(card) {
    const rect = card.getBoundingClientRect();
    const headerSpace = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) + 24;
    const viewportBottom = innerHeight - 24;
    const available = Math.max(1, viewportBottom - headerSpace);
    const desiredTop = rect.height >= available
        ? headerSpace
        : headerSpace + (available - rect.height) / 2;
    const maxScroll = Math.max(0, document.documentElement.scrollHeight - innerHeight);
    rollFollowTarget = Math.max(0, Math.min(maxScroll, scrollY + rect.top - desiredTop));

    if (REDUCED) {
        scrollTo({ top: rollFollowTarget, behavior: 'auto' });
        return;
    }
    if (rollFollowFrame) return;

    function follow() {
        const maxScroll = Math.max(0, document.documentElement.scrollHeight - innerHeight);
        rollFollowTarget = Math.min(rollFollowTarget, maxScroll);
        const distance = rollFollowTarget - scrollY;
        if (Math.abs(distance) < 2.5 || (scrollY >= maxScroll - 1 && distance > 0)) {
            document.documentElement.scrollTop = Math.round(rollFollowTarget);
            rollFollowFrame = 0;
            if (!rollRandomGame.busy) document.documentElement.classList.remove('roll-following');
            return;
        }
        document.documentElement.scrollTop = scrollY + distance * .22;
        rollFollowFrame = requestAnimationFrame(follow);
    }
    rollFollowFrame = requestAnimationFrame(follow);
}

function rollRandomGame() {
    const cards = $$('.game-card:not(.hidden)');
    if (!cards.length || rollRandomGame.busy) return;
    rollRandomGame.busy = true;
    if (!REDUCED) document.documentElement.classList.add('roll-following');
    $$('.game-card.chosen').forEach(c => c.classList.remove('chosen'));
    const pick = Math.floor(Math.random() * cards.length);
    const steps = cards.length * 2 + pick;
    let i = 0;

    (function hop() {
        cards.forEach(c => c.classList.remove('rolling'));
        const card = cards[i % cards.length];
        if (i >= steps) {
            card.classList.add('chosen');
            followRollingCard(card);
            playRollConfirm();
            const g = games[+card.dataset.index];
            const play = $('.game-play', card);
            play.textContent = '就它了 ↗';
            setTimeout(() => { play.textContent = `${g.cta} ↗`; }, 3500);
            toast(`🎲 命运之选：${g.title} —— 点卡片开玩`);
            rollRandomGame.busy = false;
            return;
        }
        card.classList.add('rolling');
        followRollingCard(card);
        if (!REDUCED) playRollTick(i / steps);
        i++;
        // decelerate like a slot machine
        setTimeout(hop, REDUCED ? 0 : 60 + Math.pow(i / steps, 3) * 320);
    })();
}

function openRandomStageOneGame() {
    if (!games.length) return;
    let options = games;
    if (games.length > 1 && openRandomStageOneGame.lastURL) {
        options = games.filter(game => game.url !== openRandomStageOneGame.lastURL);
    }
    const game = options[Math.floor(Math.random() * options.length)];
    openRandomStageOneGame.lastURL = game.url;
    window.open(game.url, '_blank', 'noopener,noreferrer');
    toast(`🎲 随机游戏：${game.title}`);
}

function initRandomGame() {
    $('#randomGame').addEventListener('click', rollRandomGame);
    $('#randomGameTop').addEventListener('click', openRandomStageOneGame);
}

/* ============================================
   Hero cabinet — cycles through the games
   ============================================ */
function initCabinet() {
    const screen = $('#cabinetScreen');
    const dots = $('#cabinetDots');
    const view = new SceneView($('#cabinetCanvas'), games[0].scene);
    let index = 0, timer;

    dots.innerHTML = games.map((g, i) => `<button aria-label="${g.title}" data-i="${i}"></button>`).join('');

    function show(i) {
        index = (i + games.length) % games.length;
        const g = games[index];
        view.setScene(g.scene);
        screen.href = g.url;
        screen.setAttribute('aria-label', `${g.cta}：${g.title}`);
        $('#cabinetTitle').textContent = g.title;
        $('#cabinetGenre').textContent = `${g.genreLabel} · ${g.en}`;
        $('#cabinetCount').textContent = `${String(index + 1).padStart(2, '0')}/${String(games.length).padStart(2, '0')}`;
        $$('button', dots).forEach((d, k) => d.classList.toggle('active', k === index));
        screen.classList.remove('switching');
        void screen.offsetWidth;
        screen.classList.add('switching');
    }

    function schedule() {
        clearInterval(timer);
        if (!REDUCED) timer = setInterval(() => show(index + 1), 5200);
    }

    $('#cabinetPrev').addEventListener('click', () => { show(index - 1); schedule(); });
    $('#cabinetNext').addEventListener('click', () => { show(index + 1); schedule(); });
    dots.addEventListener('click', e => {
        const b = e.target.closest('button');
        if (b) { show(+b.dataset.i); schedule(); }
    });
    const cab = $('#cabinet');
    cab.addEventListener('mouseenter', () => { clearInterval(timer); view.hovTarget = 1; });
    cab.addEventListener('mouseleave', () => { schedule(); view.hovTarget = 0; });

    show(0);
    schedule();
}

/* ============================================
   Video cards (Vibe Coding rail + Works grid)
   ============================================ */
function coverURL(bvid) {
    const file = covers[bvid];
    return file ? `https://i0.hdslb.com/bfs/archive/${file}@480w_270h_1c.webp` : '';
}

function videoCardHTML(p, accent, label) {
    const bvid = bvidOf(p.iframeSrc);
    const href = bvid ? `https://www.bilibili.com/video/${bvid}` : '#';
    const cover = coverURL(bvid);
    const date = parseDate(p.date).label;
    return `
        <a class="video-card" href="${href}" target="_blank" rel="noopener noreferrer" data-cursor="WATCH"
            data-src="${escapeHTML(p.iframeSrc)}" data-title="${escapeHTML(p.title)}" data-desc="${escapeHTML(p.description)}"
            data-category="${p.category || ''}" style="--accent:${accent}">
            <div class="video-cover">
                ${cover ? `<img src="${cover}" alt="" loading="lazy" decoding="async" referrerpolicy="no-referrer">` : ''}
                ${label ? `<span class="badge video-cat">${label}</span>` : ''}
                <span class="play-btn" aria-hidden="true">▶</span>
            </div>
            <div class="video-body">
                ${date ? `<span class="video-date">${date}</span>` : ''}
                <h3 class="video-title">${p.title}</h3>
                <p class="video-desc">${p.description}</p>
                <div class="tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
            </div>
        </a>`;
}

function renderVibe() {
    const rail = $('#vibeRail');
    const accents = ['var(--acid)', 'var(--cyan)', 'var(--pink)', 'var(--sun)', 'var(--violet)', 'var(--hot)'];
    rail.innerHTML = vibeCodingProjects.map((p, i) => videoCardHTML(p, accents[i % accents.length], `#${String(i + 1).padStart(2, '0')}`)).join('');

    $$('[data-rail]').forEach(btn => btn.addEventListener('click', () => {
        const card = $('.video-card', rail);
        const step = card ? card.getBoundingClientRect().width + 20 : 300;
        rail.scrollBy({ left: step * +btn.dataset.rail, behavior: 'smooth' });
    }));

    // drag to scroll with the mouse
    let down = false, moved = false, startX = 0, startLeft = 0;
    rail.addEventListener('pointerdown', e => {
        if (e.pointerType !== 'mouse') return;
        down = true; moved = false; startX = e.clientX; startLeft = rail.scrollLeft;
    });
    window.addEventListener('pointermove', e => {
        if (!down) return;
        const dx = e.clientX - startX;
        if (Math.abs(dx) > 5) { moved = true; rail.classList.add('dragging'); }
        rail.scrollLeft = startLeft - dx;
    });
    window.addEventListener('pointerup', () => {
        down = false;
        rail.classList.remove('dragging');
    });
    rail.addEventListener('click', e => { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } }, true);
}

function renderWorks() {
    const grid = $('#workGrid');
    const filter = $('#workFilter');
    const catMap = Object.fromEntries(categories.map(c => [c.key, c]));
    const sorted = [...portfolioProjects].sort((a, b) => parseDate(b.date).key - parseDate(a.date).key);

    grid.innerHTML = sorted.map(p => {
        const cat = catMap[p.category] || {};
        return videoCardHTML(p, cat.accent || 'var(--cyan)', cat.label);
    }).join('');

    const counts = {};
    portfolioProjects.forEach(p => { counts[p.category] = (counts[p.category] || 0) + 1; });
    filter.innerHTML = `<button class="chip active" data-cat="all">全部<span class="count">${portfolioProjects.length}</span></button>` +
        categories.filter(c => counts[c.key]).map(c =>
            `<button class="chip" data-cat="${c.key}">${c.label}<span class="count">${counts[c.key]}</span></button>`).join('');

    filter.addEventListener('click', e => {
        const chip = e.target.closest('.chip');
        if (!chip) return;
        $$('.chip', filter).forEach(c => c.classList.toggle('active', c === chip));
        const cat = chip.dataset.cat;
        let n = 0;
        $$('.video-card', grid).forEach(card => {
            const show = cat === 'all' || card.dataset.category === cat;
            card.style.display = show ? '' : 'none';
            card.classList.remove('enter');
            if (show && !REDUCED) {
                card.style.animationDelay = `${Math.min(n++, 12) * .04}s`;
                void card.offsetWidth;
                card.classList.add('enter');
            }
        });
    });
}

/* ============================================
   Notes
   ============================================ */
function renderNotes() {
    const list = $('#noteList');
    const colors = ['var(--acid)', 'var(--cyan)', 'var(--pink)', 'var(--sun)', 'var(--violet)', 'var(--hot)'];
    const hostOf = url => url.includes('feishu') ? '飞书文档' : url.includes('bilibili') ? 'B站专栏' : 'LINK';
    list.innerHTML = blogEntries.map((b, i) => `
        <li class="note reveal" style="--note-c:${colors[i % colors.length]}">
            <a href="${b.url}" target="_blank" rel="noopener noreferrer">
                <span class="note-no">${String(i + 1).padStart(2, '0')}</span>
                <span class="note-icon" aria-hidden="true">${b.icon}</span>
                <span>
                    <span class="note-title">${b.title}</span>
                    <span class="note-desc" style="display:block">${b.description}</span>
                </span>
                <span class="note-host pixel">${hostOf(b.url)}</span>
                <span class="note-arrow" aria-hidden="true">→</span>
            </a>
        </li>`).join('');
}

/* ============================================
   Video modal
   ============================================ */
function initModal() {
    const modal = $('#videoModal');
    const iframe = $('#modalIframe');
    let lastFocus = null;

    function open(card) {
        const src = card.dataset.src;
        const sep = src.includes('?') ? '&' : '?';
        iframe.src = `${src}${sep}autoplay=1&danmaku=0&high_quality=1`;
        $('#modalTitle').textContent = card.dataset.title;
        $('#modalDesc').textContent = card.dataset.desc;
        $('#modalLink').href = card.href;
        lastFocus = card;
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
        $('.modal-close', modal).focus();
    }

    function close() {
        modal.classList.remove('open');
        document.body.style.overflow = '';
        iframe.src = 'about:blank';
        if (lastFocus) lastFocus.focus({ preventScroll: true });
    }

    document.addEventListener('click', e => {
        const card = e.target.closest('.video-card');
        if (!card || !card.dataset.src) return;
        // let modified clicks open Bilibili in a new tab as usual
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
        e.preventDefault();
        open(card);
    });
    $$('[data-close]', modal).forEach(el => el.addEventListener('click', close));
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && modal.classList.contains('open')) close();
    });
}

/* ============================================
   Cursor + magnetic buttons
   ============================================ */
function initCursor() {
    if (!FINE_POINTER) return;
    const cursor = $('#cursor');
    const label = $('#cursorLabel');
    let x = -100, y = -100, cx = -100, cy = -100;

    window.addEventListener('pointermove', e => {
        x = e.clientX; y = e.clientY;
        cursor.classList.add('visible');
    }, { passive: true });
    document.addEventListener('mouseout', e => { if (!e.relatedTarget) cursor.classList.remove('visible'); });

    document.addEventListener('mouseover', e => {
        const target = e.target.closest('[data-cursor]');
        const text = target ? target.dataset.cursor : '';
        cursor.classList.toggle('labeled', !!text);
        if (text) label.textContent = text;
    });

    (function loop() {
        cx += (x - cx) * .22;
        cy += (y - cy) * .22;
        cursor.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
        requestAnimationFrame(loop);
    })();
}

function initMagnetic() {
    if (!FINE_POINTER || REDUCED) return;
    $$('.magnetic').forEach(el => {
        el.addEventListener('mousemove', e => {
            const r = el.getBoundingClientRect();
            const dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
            el.style.translate = `${dx * .18}px ${dy * .25}px`;
        });
        el.addEventListener('mouseleave', () => { el.style.translate = ''; });
    });
}

/* ============================================
   Scroll: reveal, spy, progress, header
   ============================================ */
function initScroll() {
    const reveals = $$('.reveal');
    if (REDUCED) reveals.forEach(el => el.classList.add('in'));
    else {
        $$('.hero .reveal').forEach((el, i) => el.style.setProperty('--d', `${.1 + i * .09}s`));
        const io = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (!e.isIntersecting) return;
                e.target.classList.add('in');
                io.unobserve(e.target);
            });
        }, { rootMargin: '0px 0px -8% 0px' });
        reveals.forEach(el => io.observe(el));

        // scramble section titles the first time they appear
        const tio = new IntersectionObserver(entries => {
            entries.forEach(e => { if (e.isIntersecting) { scramble(e.target); tio.unobserve(e.target); } });
        }, { threshold: .6 });
        $$('.section-title .scramble, .hero-title .scramble').forEach(el => tio.observe(el));
    }

    const links = $$('.nav a');
    const spy = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (!e.isIntersecting) return;
            links.forEach(a => a.classList.toggle('active', a.dataset.spy === e.target.id));
        });
    }, { rootMargin: '-45% 0px -50% 0px' });
    $$('main > section').forEach(s => spy.observe(s));

    const bar = $('#scrollProgress');
    const header = $('#header');
    let lastY = window.scrollY;
    window.addEventListener('scroll', () => {
        const y = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
        header.classList.toggle('hidden', y > lastY && y > window.innerHeight * .8);
        lastY = y;
    }, { passive: true });
}

/* ============================================
   Misc
   ============================================ */
function initCopyEmail() {
    const btn = $('#copyEmail');
    btn.addEventListener('click', async () => {
        const email = btn.dataset.email;
        try {
            await navigator.clipboard.writeText(email);
            toast(`已复制 ${email}`);
        } catch (e) {
            window.location.href = `mailto:${email}`;
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initNoiseHero();
    initRobotArm();
    initTyping();
    initStats();
    initTicker();
    renderGames();
    initGameFilter();
    initRandomGame();
    initCabinet();
    renderVibe();
    renderWorks();
    renderNotes();
    initModal();
    initScramble();
    initCursor();
    initMagnetic();
    initScroll();
    initCopyEmail();
    startSceneLoop();
});
