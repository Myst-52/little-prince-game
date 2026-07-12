/**
 * 小王子 · 星际漫游 - 游戏逻辑
 * 一个基于《小王子》故事的文字冒险游戏
 */

// ==================== 游戏状态 ====================
const gameState = {
    currentScene: 'start',
    love: 0,
    stars: 0,
    items: [],
    visitedPlanets: [],
    choices: []
};

// ==================== 故事数据 ====================
const storyData = {
    // ===== 序章 =====
    start: {
        chapter: '序章',
        location: '飞行员的回忆',
        locationIcon: '✈️',
        text: `
            <p>在我六岁那年，我读到了一本关于原始森林的书，叫做《真实的故事》。</p>
            <p>书中写道：<em>"蟒蛇吞噬猎物，不加咀嚼。"</em></p>
            <p>于是，我画出了我的第一幅画：一顶帽子。但大人们说那是一顶帽子，没有人看出那是蟒蛇正在消化一头大象。</p>
            <p>从此，我放弃了画家的生涯，成为了一名飞行员。</p>
            <p>直到有一天，我的飞机迫降在撒哈拉沙漠，我遇见了那个来自B-612小行星的男孩——</p>
            <p><span class="highlight">小王子。</span></p>
        `,
        choices: [
            { text: '听小王子讲述他的故事', next: 'prince_story', love: 5 },
            { text: '先修理飞机，再慢慢聊天', next: 'fix_plane', love: 2 }
        ]
    },

    // ===== B-612星球 =====
    prince_story: {
        chapter: '第一章',
        location: 'B-612星球',
        locationIcon: '🌍',
        text: `
            <p>小王子告诉我，他来自一个很小很小的星球，小到只能容纳三座火山和一朵玫瑰花。</p>
            <p>"她是一朵非常骄傲的花，"小王子说，眼睛里闪烁着光芒，"她总是假装咳嗽，让我给她挡风，给我讲太阳系的故事。"</p>
            <p>但有一天，他们吵架了。</p>
            <p>小王子离开了他的星球，踏上了星际旅行。他先后拜访了六个小行星，遇到了各种各样奇怪的人。</p>
            <p><em>"我想要一个朋友，"</em>小王子轻声说，"而不是一个只会命令我的国王。"</p>
        `,
        choices: [
            { text: '拜访国王的星球', next: 'planet_king', star: 1 },
            { text: '拜访爱虚荣的人的星球', next: 'planet_vain', star: 1 },
            { text: '拜访酒鬼的星球', next: 'planet_drunkard', star: 1 }
        ]
    },

    fix_plane: {
        chapter: '第一章',
        location: '撒哈拉沙漠',
        locationIcon: '🏜️',
        text: `
            <p>我开始修理飞机，但小王子坐在一旁，用那双清澈的眼睛看着我。</p>
            <p>"你也是从别的星球来的吗？"他问。</p>
            <p>"不，我从地球来。"我回答。</p>
            <p>小王子看起来若有所思："地球...那是哪里？"</p>
            <p>"在这片沙漠里，有很多人，有很多房子和城市。"我说。</p>
            <p>小王子笑了："沙漠之所以美丽，是因为它在某个角落里藏着一口水井。"</p>
        `,
        choices: [
            { text: '带小王子去看星空', next: 'starry_night', love: 8 },
            { text: '继续修理飞机', next: 'continue_fix', love: 3 }
        ]
    },

    starry_night: {
        chapter: '第二章',
        location: '撒哈拉沙漠·星空下',
        locationIcon: '✨',
        text: `
            <p>我们躺在沙漠的沙地上，仰望着满天繁星。</p>
            <p>"因为你在你的玫瑰上花费了时间，才使得你的玫瑰变得如此重要。"小王子轻声说。</p>
            <p>我抬头看着那些星星，仿佛都能听到小王子的笑声。</p>
            <p><em>"如果你爱上了一朵生长在某颗星球上的花，那么当你仰望星空时，就会感到甜蜜。所有的星星都像开了花。"</em></p>
            <p>我感到眼眶湿润了。</p>
            <p>在这个夜晚，我收集到了一颗闪闪发光的星星。</p>
        `,
        choices: [
            { text: '询问小王子为什么离开玫瑰', next: 'why_leave', love: 5 },
            { text: '分享我小时候画的蟒蛇', next: 'draw_snake', love: 10 }
        ]
    },

    why_leave: {
        chapter: '第三章',
        location: '撒哈拉沙漠·回忆',
        locationIcon: '💭',
        text: `
            <p>"我那时候太年轻了，还不懂得怎样去爱她。"小王子说。</p>
            <p>"她总是说一些口是心非的话，我却太年轻了，不知道怎么去理解她。"</p>
            <p>"我不该听她说的那些赌气话，我应该看她做了什么，而不是说了什么。"</p>
            <p>"我让她自由了，但我不知道她现在好不好。"</p>
            <p>小王子的眼睛里泛起了泪光。</p>
            <p><em>"如果你驯服了我，我的生活就会充满阳光。"</em></p>
        `,
        choices: [
            { text: '安慰小王子，告诉他玫瑰也在等他', next: 'comfort_prince', love: 15 },
            { text: '带他去找沙漠里的那口水井', next: 'find_well', love: 8 }
        ]
    },

    comfort_prince: {
        chapter: '第四章',
        location: '撒哈拉沙漠·希望之地',
        locationIcon: '🌸',
        text: `
            <p>"你有没有想过，你的玫瑰可能也在某个地方想念着你？"我轻声说。</p>
            <p>小王子抬起头，眼睛里重新燃起了光芒。</p>
            <p>"她...她会吗？"</p>
            <p>"当然。你对她来说是独一无二的，她对你来说也是独一无二的。"</p>
            <p>小王子沉默了很久，然后露出了一个温暖的微笑。</p>
            <p>"谢谢你。我想...我想回家了。"</p>
            <p>"你要回到她身边吗？"</p>
            <p><em>"是的，因为我想明白了——重要的东西，用眼睛是看不见的，要用心去感受。"</em></p>
        `,
        choices: [
            { text: '帮助小王子找到回家的路', next: 'ending_home', love: 20 },
            { text: '告诉小王子，我会永远记得他', next: 'ending_friendship', love: 25 }
        ]
    },

    draw_snake: {
        chapter: '第三章',
        location: '撒哈拉沙漠·篝火旁',
        locationIcon: '🔥',
        text: `
            <p>我从口袋里掏出纸笔，画了一幅画。</p>
            <p>"你看，这是我六岁的时候画的。"</p>
            <p>小王子仔细地看着，然后笑了。</p>
            <p>"哦，这是一条蟒蛇正在消化一头大象！"</p>
            <p>我惊讶地看着他："你怎么知道的？"</p>
            <p><em>"因为我在我的星球上也画过。"</em></p>
            <p>在那一刻，我感到一种奇妙的联结——在这个世界上，终于有人能看懂我的画了。</p>
        `,
        choices: [
            { text: '问小王子他的星球上有什么', next: 'prince_planet', love: 12 },
            { text: '一起画更多的画', next: 'draw_together', love: 15 }
        ]
    },

    draw_together: {
        chapter: '第四章',
        location: '撒哈拉沙漠·艺术之夜',
        locationIcon: '🎨',
        text: `
            <p>我们坐在篝火旁，一起画着那些只有我们能懂的画。</p>
            <p>我画了一顶帽子，小王子画了一朵玫瑰。</p>
            <p>我画了一架飞机，小王子画了一颗小小的星球。</p>
            <p>"你知道吗？"小王子说，"在这个世界上，大人们只对数字感兴趣。如果你说'我看见了一座漂亮的房子'，他们不会想象那座房子的样子。但如果你说'那座房子价值十万法郎'，他们就会说'哦，多漂亮的房子啊！'"</p>
            <p>我忍不住笑了："你说得太对了。"</p>
            <p><em>"所以我们才需要孩子们的画——那些只有用心才能看见的画。"</em></p>
        `,
        choices: [
            { text: '告诉小王子他是我遇到的最特别的人', next: 'ending_friendship', love: 30 },
            { text: '把这幅画永远珍藏', next: 'ending_treasure', love: 25 }
        ]
    },

    planet_king: {
        chapter: '第二章',
        location: '国王的星球',
        locationIcon: '👑',
        text: `
            <p>小王子来到了第一个星球，这里住着一位国王。</p>
            <p>"啊！臣民来了！"国王看到小王子，高兴地说。</p>
            <p>"可是我并不是您的臣民啊。"小王子困惑地说。</p>
            <p>"没关系，我命令你做我的臣民。"国王回答。</p>
            <p>国王的命令很奇怪：他命令太阳落山，命令将军去打仗，命令大臣们闭嘴。</p>
            <p><em>"但这些事情不是本来就会发生的吗？"小王子问。</em></p>
            <p>"没错，"国王说，"但命令别人做他们本来就会做的事，这才是权力的真正体现。"</p>
        `,
        choices: [
            { text: '拜访下一颗星球：爱虚荣的人', next: 'planet_vain', star: 2, love: -2 },
            { text: '回到B-612星球看望玫瑰', next: 'return_rose', love: 5 }
        ]
    },

    planet_vain: {
        chapter: '第三章',
        location: '爱虚荣的人的星球',
        locationIcon: '🎩',
        text: `
            <p>第二个星球上住着一个爱虚荣的人。</p>
            <p>"哦！有崇拜者来看我了！"爱虚荣的人看到小王子，大声喊道。</p>
            <p>"崇拜是什么意思？"小王子问。</p>
            <p>"崇拜就是承认我是这个星球上最漂亮、最聪明、最富有的人。"</p>
            <p>"但这个星球上只有你一个人啊。"小王子说。</p>
            <p>爱虚荣的人皱起了眉头："请不要破坏我的幻想。"</p>
            <p><em>"大人真的很奇怪。"小王子在离开的时候这样想着。</em></p>
        `,
        choices: [
            { text: '继续拜访酒鬼的星球', next: 'planet_drunkard', star: 2, love: -3 },
            { text: '回到B-612星球看望玫瑰', next: 'return_rose', love: 5 }
        ]
    },

    planet_drunkard: {
        chapter: '第四章',
        location: '酒鬼的星球',
        locationIcon: '🍷',
        text: `
            <p>第三个星球上住着一个酒鬼。</p>
            <p>"你在干什么？"小王子问。</p>
            <p>"我在喝酒。"酒鬼悲伤地回答。</p>
            <p>"你为什么要喝酒？"</p>
            <p>"为了忘记。"</p>
            <p>"忘记什么？"</p>
            <p><em>"忘记我的羞耻。"</em></p>
            <p>"什么羞耻？"</p>
            <p>"喝酒的羞耻。"</p>
            <p>小王子困惑地离开了。大人们的世界真的很难理解。</p>
        `,
        choices: [
            { text: '继续拜访商人的星球', next: 'planet_businessman', star: 2, love: -2 },
            { text: '回到B-612星球看望玫瑰', next: 'return_rose', love: 5 }
        ]
    },

    planet_businessman: {
        chapter: '第五章',
        location: '商人的星球',
        locationIcon: '💰',
        text: `
            <p>第四个星球上住着一个商人。</p>
            <p>"你好。"小王子说。</p>
            <p>"你好。"商人说，"我正在计算星星的数量。"</p>
            <p>"你为什么要做这件事？"</p>
            <p>"因为星星是我的。"</p>
            <p>"星星是你的？"小王子很惊讶。</p>
            <p>"没错，我第一个想到要拥有它们，所以它们就是我的。"</p>
            <p><em>"但你对它们有什么用呢？"小王子问。</em></p>
            <p>"我让它们变富。"商人回答。</p>
        `,
        choices: [
            { text: '告诉商人星星不能被拥有', next: 'ending_truth', love: 10, star: 3 },
            { text: '回到B-612星球看望玫瑰', next: 'return_rose', love: 5 }
        ]
    },

    return_rose: {
        chapter: '终章',
        location: 'B-612星球',
        locationIcon: '🌹',
        text: `
            <p>小王子回到了他的星球。</p>
            <p>那朵骄傲的玫瑰依然在那里，她的四根刺在微风中轻轻摇晃。</p>
            <p>"你回来了。"玫瑰说，语气里带着一丝惊讶。</p>
            <p>"是的，我回来了。"小王子说，"对不起，我不该离开你。"</p>
            <p>"我也对不起，"玫瑰说，"我不该那么任性。"</p>
            <p>在那一刻，两颗心重新连接在一起。</p>
            <p><em>"重要的东西，用眼睛是看不见的。"</em></p>
        `,
        choices: [
            { text: '这就是结局，一切都好', next: 'ending_home', love: 20 }
        ]
    },

    // ===== 结局 =====
    ending_home: {
        chapter: '结局',
        location: 'B-612星球',
        locationIcon: '🌟',
        text: `
            <p>小王子终于回到了他的星球，回到了他的玫瑰身边。</p>
            <p>那些曾经的争吵和误解，在爱面前变得微不足道。</p>
            <p>"你知道吗？"小王子说，"我在旅途中遇到了很多奇怪的人，但没有一个人能理解我。"</p>
            <p>"直到我遇见了你。"他看着那朵玫瑰，眼睛里充满了温柔。</p>
            <p><em>"因为你在你的玫瑰上花费了时间，才使得你的玫瑰变得如此重要。"</em></p>
            <p>而我，作为一个飞行员，永远记住了那个来自B-612星球的男孩，和他教会我的道理：</p>
            <p><span class="highlight">真正重要的东西，用眼睛是看不见的，要用心去感受。</span></p>
        `,
        isEnding: true,
        endingType: 'home'
    },

    ending_friendship: {
        chapter: '结局',
        location: '撒哈拉沙漠·永恒的友谊',
        locationIcon: '💫',
        text: `
            <p>在那个夜晚，我和小王子成为了永远的朋友。</p>
            <p>虽然他最终还是要回到他的星球，回到他的玫瑰身边，但我知道，我们之间的联结永远不会消失。</p>
            <p>"每当你仰望星空的时候，"小王子说，"你就会想起我。因为我会住在其中一颗星星上，我会在其中一颗星星上笑着。"</p>
            <p><em>"对你来说，我会是独一无二的；对你来说，我也是独一无二的。"</em></p>
            <p>我看着小王子的身影渐渐消失在星光中，心里充满了感激。</p>
            <p>感谢你，小王子，教会我什么是真正的友谊，什么是真正重要的东西。</p>
            <p><span class="highlight">所有的大人都曾经是小孩，虽然，只有少数的人记得。</span></p>
        `,
        isEnding: true,
        endingType: 'friendship'
    },

    ending_treasure: {
        chapter: '结局',
        location: '撒哈拉沙漠·珍藏的回忆',
        locationIcon: '🎁',
        text: `
            <p>我小心翼翼地收起了那幅画，那是我和小王子一起创作的。</p>
            <p>"这幅画是我最珍贵的宝藏。"我对小王子说。</p>
            <p>小王子微笑着："画只是纸，但我们在画画时的时光，才是真正的宝藏。"</p>
            <p>在那一刻，我明白了：真正的宝藏不是物品本身，而是与所爱之人共度的时光。</p>
            <p><em>"如果你想要一个人做你的朋友，你就要驯服他。"</em></p>
            <p>而驯服一个人，需要耐心，需要时间，需要真心。</p>
            <p><span class="highlight">有些东西，只有用心才能看见。</span></p>
        `,
        isEnding: true,
        endingType: 'treasure'
    },

    ending_truth: {
        chapter: '结局',
        location: '商人的星球·真理之地',
        locationIcon: '💡',
        text: `
            <p>"你错了。"小王子对商人说，"星星不能被拥有。"</p>
            <p>"它们属于每一个仰望它们的人。你不能拥有星星，就像你不能拥有风一样。"</p>
            <p>商人生气地瞪着小王子，但他无法反驳。</p>
            <p>"你知道吗？"小王子继续说，"我曾经拥有一朵玫瑰，我本以为她是我的。但我错了——她不是我的，我也没有拥有她。"</p>
            <p><em>"真正的拥有，不是把对方关在笼子里，而是让她自由，同时知道她会回来。"</em></p>
            <p>我听了小王子的话，突然明白了什么才是真正的爱。</p>
            <p><span class="highlight">爱不是占有，而是给予自由。</span></p>
        `,
        isEnding: true,
        endingType: 'truth'
    },

    continue_fix: {
        chapter: '第二章',
        location: '撒哈拉沙漠·修理中',
        locationIcon: '🔧',
        text: `
            <p>我继续修理我的飞机，但小王子一直在旁边问我问题。</p>
            <p>"羊会吃灌木吗？"</p>
            <p>"会的。"</p>
            <p>"那羊会吃猴面包树吗？"</p>
            <p>"不会，猴面包树太大了。"</p>
            <p>"猴面包树在变成大树之前，也是小树苗啊。"小王子说。</p>
            <p>"没错。"</p>
            <p><em>"那么问题来了——在B-612星球上，小羊能吃掉猴面包树的幼苗吗？"</em></p>
            <p>我突然意识到，小王子在担心他的星球。</p>
        `,
        choices: [
            { text: '告诉小王子要防止猴面包树长大', next: 'prince_story', love: 8 },
            { text: '先帮小王子解决这个担忧', next: 'prince_story', love: 10 }
        ]
    },

    prince_planet: {
        chapter: '第五章',
        location: 'B-612星球·回忆',
        locationIcon: '🌸',
        text: `
            <p>"在我的星球上，"小王子说，"有一朵非常美丽的玫瑰。"</p>
            <p>"她只有四根刺，但她觉得自己很厉害。"</p>
            <p>"我每天给她浇水，给她挡风，为她除虫。"</p>
            <p>"但她总是抱怨，说我这不好那不好。"</p>
            <p>"有一天，我离开了她。"</p>
            <p><em>"但现在，我好想她。"</em></p>
            <p>小王子的眼睛湿润了。</p>
        `,
        choices: [
            { text: '安慰小王子', next: 'comfort_prince', love: 12 },
            { text: '问小王子为什么不回去找她', next: 'why_leave', love: 10 }
        ]
    },

    find_well: {
        chapter: '第四章',
        location: '撒哈拉沙漠·水井旁',
        locationIcon: '🪣',
        text: `
            <p>我带着小王子在沙漠中寻找那口传说中的水井。</p>
            <p>"水井在哪里？"小王子问。</p>
            <p>"我们用心去找，就一定能找到。"我说。</p>
            <p>我们走了很久很久，终于在黎明时分，发现了一口古老的水井。</p>
            <p>我们打上水，喝了一口，那水又甜又清凉。</p>
            <p><em>"沙漠之所以美丽，是因为它在某个角落里藏着一口水井。"</em>小王子说。</p>
            <p>在那一刻，我明白了：真正美好的东西，往往隐藏在最不起眼的地方。</p>
        `,
        choices: [
            { text: '与小王子一起喝这珍贵的水', next: 'ending_friendship', love: 15, star: 5 },
            { text: '把这口水井的秘密分享给更多人', next: 'ending_truth', love: 12 }
        ]
    }
};

// ==================== 游戏函数 ====================

/**
 * 初始化星空背景
 */
function initStars() {
    const starsContainer = document.getElementById('stars');
    const starCount = 150;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.setProperty('--duration', `${2 + Math.random() * 4}s`);
        star.style.setProperty('--max-opacity', `${0.3 + Math.random() * 0.7}`);
        star.style.animationDelay = `${Math.random() * 5}s`;
        starsContainer.appendChild(star);
    }
}

/**
 * 显示指定界面
 */
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

/**
 * 开始游戏
 */
function startGame() {
    gameState.currentScene = 'start';
    gameState.love = 0;
    gameState.stars = 0;
    gameState.items = [];
    gameState.visitedPlanets = [];
    gameState.choices = [];
    
    showScreen('game-screen');
    loadScene('start');
    updateStats();
}

/**
 * 加载场景
 */
function loadScene(sceneId) {
    const scene = storyData[sceneId];
    if (!scene) return;
    
    gameState.currentScene = sceneId;
    
    // 更新界面
    document.getElementById('current-location').textContent = scene.location;
    document.querySelector('.location-icon').textContent = scene.locationIcon;
    document.getElementById('chapter-num').textContent = scene.chapter;
    
    // 清空并加载故事文本
    const storyText = document.getElementById('story-text');
    storyText.innerHTML = '';
    
    // 使用 setTimeout 模拟打字效果
    const parser = new DOMParser();
    const doc = parser.parseFromString(scene.text, 'text/html');
    const paragraphs = doc.querySelectorAll('p');
    
    paragraphs.forEach((p, index) => {
        setTimeout(() => {
            storyText.appendChild(p.cloneNode(true));
            storyText.scrollTop = storyText.scrollHeight;
        }, index * 150);
    });
    
    // 加载选项
    const choicesPanel = document.getElementById('choices-panel');
    choicesPanel.innerHTML = '';
    
    setTimeout(() => {
        if (scene.isEnding) {
            // 结局界面
            const endingIcon = document.getElementById('ending-icon');
            const endingTitle = document.getElementById('ending-title');
            const endingText = document.getElementById('ending-text');
            
            const icons = {
                'home': '🏠',
                'friendship': '💫',
                'treasure': '🎁',
                'truth': '💡'
            };
            
            const titles = {
                'home': '回家',
                'friendship': '永恒的友谊',
                'treasure': '珍藏的回忆',
                'truth': '真理'
            };
            
            endingIcon.textContent = icons[scene.endingType] || '🌟';
            endingTitle.textContent = titles[scene.endingType] || '结局';
            endingText.innerHTML = scene.text;
            
            document.getElementById('final-love').textContent = gameState.love;
            document.getElementById('final-stars').textContent = gameState.stars;
            
            setTimeout(() => showScreen('ending-screen'), 1500);
        } else {
            // 正常选项
            scene.choices.forEach((choice, index) => {
                const btn = document.createElement('button');
                btn.className = 'btn btn-choice';
                btn.innerHTML = choice.text;
                btn.onclick = () => makeChoice(choice);
                btn.style.animationDelay = `${index * 0.1}s`;
                choicesPanel.appendChild(btn);
            });
        }
    }, paragraphs.length * 150 + 200);
}

/**
 * 做出选择
 */
function makeChoice(choice) {
    // 更新游戏状态
    if (choice.love) gameState.love += choice.love;
    if (choice.star) gameState.stars += choice.star;
    if (choice.item && !gameState.items.includes(choice.item)) {
        gameState.items.push(choice.item);
    }
    
    gameState.choices.push(choice.text);
    
    // 更新显示
    updateStats();
    
    // 加载下一个场景
    loadScene(choice.next);
}

/**
 * 更新统计数据
 */
function updateStats() {
    animateStat('love-stat', gameState.love);
    animateStat('star-stat', gameState.stars);
    animateStat('item-stat', gameState.items.length);
}

/**
 * 数字动画
 */
function animateStat(elementId, targetValue) {
    const element = document.getElementById(elementId);
    const currentValue = parseInt(element.textContent) || 0;
    
    if (currentValue !== targetValue) {
        element.classList.add('bump');
        setTimeout(() => {
            element.textContent = targetValue;
            element.classList.remove('bump');
        }, 100);
    }
}

/**
 * 重新开始
 */
function restartGame() {
    startGame();
}

/**
 * 显示制作名单
 */
function showCredits() {
    showScreen('credits-screen');
}

/**
 * 返回首页
 */
function goToStart() {
    showScreen('start-screen');
}

// ==================== 初始化 ====================
document.addEventListener('DOMContentLoaded', () => {
    initStars();
    
    // 添加页面切换动画
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
});
