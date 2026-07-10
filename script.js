/**
 * 灏忕帇瀛?路 鏄熼檯婕父 - 娓告垙閫昏緫
 * 涓€涓熀浜庛€婂皬鐜嬪瓙銆嬫晠浜嬬殑鏂囧瓧鍐掗櫓娓告垙
 */

// ==================== 娓告垙鐘舵€?====================
const gameState = {
    currentScene: 'start',
    love: 0,
    stars: 0,
    items: [],
    visitedPlanets: [],
    choices: []
};

// ==================== 鏁呬簨鏁版嵁 ====================
const storyData = {
    // ===== 搴忕珷 =====
    start: {
        chapter: '搴忕珷',
        location: '椋炶鍛樼殑鍥炲繂',
        locationIcon: '鉁堬笍',
        text: `
            <p>鍦ㄦ垜鍏瞾閭ｅ勾锛屾垜璇诲埌浜嗕竴鏈叧浜庡師濮嬫．鏋楃殑涔︼紝鍙仛銆婄湡瀹炵殑鏁呬簨銆嬨€?/p>
            <p>涔︿腑鍐欓亾锛?em>"锜掕泧鍚炲櫖鐚庣墿锛屼笉鍔犲拃鍤笺€?</em></p>
            <p>浜庢槸锛屾垜鐢诲嚭浜嗘垜鐨勭涓€骞呯敾锛氫竴椤跺附瀛愩€備絾澶т汉浠閭ｆ槸涓€椤跺附瀛愶紝娌℃湁浜虹湅鍑洪偅鏄煉铔囨鍦ㄦ秷鍖栦竴澶村ぇ璞°€?/p>
            <p>浠庢锛屾垜鏀惧純浜嗙敾瀹剁殑鐢熸动锛屾垚涓轰簡涓€鍚嶉琛屽憳銆?/p>
            <p>鐩村埌鏈変竴澶╋紝鎴戠殑椋炴満杩檷鍦ㄦ拻鍝堟媺娌欐紶锛屾垜閬囪浜嗛偅涓潵鑷狟-612灏忚鏄熺殑鐢峰鈥斺€?/p>
            <p><span class="highlight">灏忕帇瀛愩€?/span></p>
        `,
        choices: [
            { text: '鍚皬鐜嬪瓙璁茶堪浠栫殑鏁呬簨', next: 'prince_story', love: 5 },
            { text: '鍏堜慨鐞嗛鏈猴紝鍐嶆參鎱㈣亰澶?, next: 'fix_plane', love: 2 }
        ]
    },

    // ===== B-612鏄熺悆 =====
    prince_story: {
        chapter: '绗竴绔?,
        location: 'B-612鏄熺悆',
        locationIcon: '馃實',
        text: `
            <p>灏忕帇瀛愬憡璇夋垜锛屼粬鏉ヨ嚜涓€涓緢灏忓緢灏忕殑鏄熺悆锛屽皬鍒板彧鑳藉绾充笁搴х伀灞卞拰涓€鏈电帿鐟拌姳銆?/p>
            <p>"濂规槸涓€鏈甸潪甯搁獎鍌茬殑鑺憋紝"灏忕帇瀛愯锛岀溂鐫涢噷闂儊鐫€鍏夎姃锛?濂规€绘槸鍋囪鍜冲椊锛岃鎴戠粰濂规尅椋庯紝缁欐垜璁插お闃崇郴鐨勬晠浜嬨€?</p>
            <p>浣嗘湁涓€澶╋紝浠栦滑鍚垫灦浜嗐€?/p>
            <p>灏忕帇瀛愮寮€浜嗕粬鐨勬槦鐞冿紝韪忎笂浜嗘槦闄呮梾琛屻€備粬鍏堝悗鎷滆浜嗗叚涓皬琛屾槦锛岄亣鍒颁簡鍚勭鍚勬牱濂囨€殑浜恒€?/p>
            <p><em>"鎴戞兂瑕佷竴涓湅鍙嬶紝"</em>灏忕帇瀛愯交澹拌锛?鑰屼笉鏄竴涓彧浼氬懡浠ゆ垜鐨勫浗鐜嬨€?</p>
        `,
        choices: [
            { text: '鎷滆鍥界帇鐨勬槦鐞?, next: 'planet_king', star: 1 },
            { text: '鎷滆鐖辫櫄鑽ｇ殑浜虹殑鏄熺悆', next: 'planet_vain', star: 1 },
            { text: '鎷滆閰掗鐨勬槦鐞?, next: 'planet_drunkard', star: 1 }
        ]
    },

    fix_plane: {
        chapter: '绗竴绔?,
        location: '鎾掑搱鎷夋矙婕?,
        locationIcon: '馃彍锔?,
        text: `
            <p>鎴戝紑濮嬩慨鐞嗛鏈猴紝浣嗗皬鐜嬪瓙鍧愬湪涓€鏃侊紝鐢ㄩ偅鍙屾竻婢堢殑鐪肩潧鐪嬬潃鎴戙€?/p>
            <p>"浣犱篃鏄粠鍒殑鏄熺悆鏉ョ殑鍚楋紵"浠栭棶銆?/p>
            <p>"涓嶏紝鎴戜粠鍦扮悆鏉ャ€?鎴戝洖绛斻€?/p>
            <p>灏忕帇瀛愮湅璧锋潵鑻ユ湁鎵€鎬濓細"鍦扮悆...閭ｆ槸鍝噷锛?</p>
            <p>"鍦ㄨ繖鐗囨矙婕犻噷锛屾湁寰堝浜猴紝鏈夊緢澶氭埧瀛愬拰鍩庡競銆?鎴戣銆?/p>
            <p>灏忕帇瀛愮瑧浜嗭細"娌欐紶涔嬫墍浠ョ編涓斤紝鏄洜涓哄畠鍦ㄦ煇涓钀介噷钘忕潃涓€鍙ｆ按浜曘€?</p>
        `,
        choices: [
            { text: '甯﹀皬鐜嬪瓙鍘荤湅鏄熺┖', next: 'starry_night', love: 8 },
            { text: '缁х画淇悊椋炴満', next: 'continue_fix', love: 3 }
        ]
    },

    starry_night: {
        chapter: '绗簩绔?,
        location: '鎾掑搱鎷夋矙婕犅锋槦绌轰笅',
        locationIcon: '鉁?,
        text: `
            <p>鎴戜滑韬哄湪娌欐紶鐨勬矙鍦颁笂锛屼话鏈涚潃婊″ぉ绻佹槦銆?/p>
            <p>"鍥犱负浣犲湪浣犵殑鐜懓涓婅姳璐逛簡鏃堕棿锛屾墠浣垮緱浣犵殑鐜懓鍙樺緱濡傛閲嶈銆?灏忕帇瀛愯交澹拌銆?/p>
            <p>鎴戞姮澶寸湅鐫€閭ｄ簺鏄熸槦锛屼豢浣涢兘鑳藉惉鍒板皬鐜嬪瓙鐨勭瑧澹般€?/p>
            <p><em>"濡傛灉浣犵埍涓婁簡涓€鏈电敓闀垮湪鏌愰鏄熺悆涓婄殑鑺憋紝閭ｄ箞褰撲綘浠版湜鏄熺┖鏃讹紝灏变細鎰熷埌鐢滆湝銆傛墍鏈夌殑鏄熸槦閮藉儚寮€浜嗚姳銆?</em></p>
            <p>鎴戞劅鍒扮溂鐪舵箍娑︿簡銆?/p>
            <p>鍦ㄨ繖涓鏅氾紝鎴戞敹闆嗗埌浜嗕竴棰楅棯闂彂鍏夌殑鏄熸槦銆?/p>
        `,
        choices: [
            { text: '璇㈤棶灏忕帇瀛愪负浠€涔堢寮€鐜懓', next: 'why_leave', love: 5 },
            { text: '鍒嗕韩鎴戝皬鏃跺€欑敾鐨勮煉铔?, next: 'draw_snake', love: 10 }
        ]
    },

    why_leave: {
        chapter: '绗笁绔?,
        location: '鎾掑搱鎷夋矙婕犅峰洖蹇?,
        locationIcon: '馃挱',
        text: `
            <p>"鎴戦偅鏃跺€欏お骞磋交浜嗭紝杩樹笉鎳傚緱鎬庢牱鍘荤埍濂广€?灏忕帇瀛愯銆?/p>
            <p>"濂规€绘槸璇翠竴浜涘彛鏄績闈炵殑璇濓紝鎴戝嵈澶勾杞讳簡锛屼笉鐭ラ亾鎬庝箞鍘荤悊瑙ｅス銆?</p>
            <p>"鎴戜笉璇ュ惉濂硅鐨勯偅浜涜祵姘旇瘽锛屾垜搴旇鐪嬪ス鍋氫簡浠€涔堬紝鑰屼笉鏄浜嗕粈涔堛€?</p>
            <p>"鎴戣濂硅嚜鐢变簡锛屼絾鎴戜笉鐭ラ亾濂圭幇鍦ㄥソ涓嶅ソ銆?</p>
            <p>灏忕帇瀛愮殑鐪肩潧閲屾硾璧蜂簡娉厜銆?/p>
            <p><em>"濡傛灉浣犻┋鏈嶄簡鎴戯紝鎴戠殑鐢熸椿灏变細鍏呮弧闃冲厜銆?</em></p>
        `,
        choices: [
            { text: '瀹夋叞灏忕帇瀛愶紝鍛婅瘔浠栫帿鐟颁篃鍦ㄧ瓑浠?, next: 'comfort_prince', love: 15 },
            { text: '甯︿粬鍘绘壘娌欐紶閲岀殑閭ｅ彛姘翠簳', next: 'find_well', love: 8 }
        ]
    },

    comfort_prince: {
        chapter: '绗洓绔?,
        location: '鎾掑搱鎷夋矙婕犅峰笇鏈涗箣鍦?,
        locationIcon: '馃尭',
        text: `
            <p>"浣犳湁娌℃湁鎯宠繃锛屼綘鐨勭帿鐟板彲鑳戒篃鍦ㄦ煇涓湴鏂规兂蹇电潃浣狅紵"鎴戣交澹拌銆?/p>
            <p>灏忕帇瀛愭姮璧峰ご锛岀溂鐫涢噷閲嶆柊鐕冭捣浜嗗厜鑺掋€?/p>
            <p>"濂?..濂逛細鍚楋紵"</p>
            <p>"褰撶劧銆備綘瀵瑰ス鏉ヨ鏄嫭涓€鏃犱簩鐨勶紝濂瑰浣犳潵璇翠篃鏄嫭涓€鏃犱簩鐨勩€?</p>
            <p>灏忕帇瀛愭矇榛樹簡寰堜箙锛岀劧鍚庨湶鍑轰簡涓€涓俯鏆栫殑寰瑧銆?/p>
            <p>"璋㈣阿浣犮€傛垜鎯?..鎴戞兂鍥炲浜嗐€?</p>
            <p>"浣犺鍥炲埌濂硅韩杈瑰悧锛?</p>
            <p><em>"鏄殑锛屽洜涓烘垜鎯虫槑鐧戒簡鈥斺€旈噸瑕佺殑涓滆タ锛岀敤鐪肩潧鏄湅涓嶈鐨勶紝瑕佺敤蹇冨幓鎰熷彈銆?</em></p>
        `,
        choices: [
            { text: '甯姪灏忕帇瀛愭壘鍒板洖瀹剁殑璺?, next: 'ending_home', love: 20 },
            { text: '鍛婅瘔灏忕帇瀛愶紝鎴戜細姘歌繙璁板緱浠?, next: 'ending_friendship', love: 25 }
        ]
    },

    draw_snake: {
        chapter: '绗笁绔?,
        location: '鎾掑搱鎷夋矙婕犅风瘽鐏梺',
        locationIcon: '馃敟',
        text: `
            <p>鎴戜粠鍙ｈ閲屾帍鍑虹焊绗旓紝鐢讳簡涓€骞呯敾銆?/p>
            <p>"浣犵湅锛岃繖鏄垜鍏瞾鐨勬椂鍊欑敾鐨勩€?</p>
            <p>灏忕帇瀛愪粩缁嗗湴鐪嬬潃锛岀劧鍚庣瑧浜嗐€?/p>
            <p>"鍝︼紝杩欐槸涓€鏉¤煉铔囨鍦ㄦ秷鍖栦竴澶村ぇ璞★紒"</p>
            <p>鎴戞儕璁跺湴鐪嬬潃浠栵細"浣犳€庝箞鐭ラ亾鐨勶紵"</p>
            <p><em>"鍥犱负鎴戝湪鎴戠殑鏄熺悆涓婁篃鐢昏繃銆?</em></p>
            <p>鍦ㄩ偅涓€鍒伙紝鎴戞劅鍒颁竴绉嶅濡欑殑鑱旂粨鈥斺€斿湪杩欎釜涓栫晫涓婏紝缁堜簬鏈変汉鑳界湅鎳傛垜鐨勭敾浜嗐€?/p>
        `,
        choices: [
            { text: '闂皬鐜嬪瓙浠栫殑鏄熺悆涓婃湁浠€涔?, next: 'prince_planet', love: 12 },
            { text: '涓€璧风敾鏇村鐨勭敾', next: 'draw_together', love: 15 }
        ]
    },

    draw_together: {
        chapter: '绗洓绔?,
        location: '鎾掑搱鎷夋矙婕犅疯壓鏈箣澶?,
        locationIcon: '馃帹',
        text: `
            <p>鎴戜滑鍧愬湪绡濈伀鏃侊紝涓€璧风敾鐫€閭ｄ簺鍙湁鎴戜滑鑳芥噦鐨勭敾銆?/p>
            <p>鎴戠敾浜嗕竴椤跺附瀛愶紝灏忕帇瀛愮敾浜嗕竴鏈电帿鐟般€?/p>
            <p>鎴戠敾浜嗕竴鏋堕鏈猴紝灏忕帇瀛愮敾浜嗕竴棰楀皬灏忕殑鏄熺悆銆?/p>
            <p>"浣犵煡閬撳悧锛?灏忕帇瀛愯锛?鍦ㄨ繖涓笘鐣屼笂锛屽ぇ浜轰滑鍙鏁板瓧鎰熷叴瓒ｃ€傚鏋滀綘璇?鎴戠湅瑙佷簡涓€搴ф紓浜殑鎴垮瓙'锛屼粬浠笉浼氭兂璞￠偅搴ф埧瀛愮殑鏍峰瓙銆備絾濡傛灉浣犺'閭ｅ骇鎴垮瓙浠峰€煎崄涓囨硶閮?锛屼粬浠氨浼氳'鍝︼紝澶氭紓浜殑鎴垮瓙鍟婏紒'"</p>
            <p>鎴戝繊涓嶄綇绗戜簡锛?浣犺寰楀お瀵逛簡銆?</p>
            <p><em>"鎵€浠ユ垜浠墠闇€瑕佸瀛愪滑鐨勭敾鈥斺€旈偅浜涘彧鏈夌敤蹇冩墠鑳界湅瑙佺殑鐢汇€?</em></p>
        `,
        choices: [
            { text: '鍛婅瘔灏忕帇瀛愪粬鏄垜閬囧埌鐨勬渶鐗瑰埆鐨勪汉', next: 'ending_friendship', love: 30 },
            { text: '鎶婅繖骞呯敾姘歌繙鐝嶈棌', next: 'ending_treasure', love: 25 }
        ]
    },

    planet_king: {
        chapter: '绗簩绔?,
        location: '鍥界帇鐨勬槦鐞?,
        locationIcon: '馃憫',
        text: `
            <p>灏忕帇瀛愭潵鍒颁簡绗竴涓槦鐞冿紝杩欓噷浣忕潃涓€浣嶅浗鐜嬨€?/p>
            <p>"鍟婏紒鑷ｆ皯鏉ヤ簡锛?鍥界帇鐪嬪埌灏忕帇瀛愶紝楂樺叴鍦拌銆?/p>
            <p>"鍙槸鎴戝苟涓嶆槸鎮ㄧ殑鑷ｆ皯鍟娿€?灏忕帇瀛愬洶鎯戝湴璇淬€?/p>
            <p>"娌″叧绯伙紝鎴戝懡浠や綘鍋氭垜鐨勮嚕姘戙€?鍥界帇鍥炵瓟銆?/p>
            <p>鍥界帇鐨勫懡浠ゅ緢濂囨€細浠栧懡浠ゅお闃宠惤灞憋紝鍛戒护灏嗗啗鍘绘墦浠楋紝鍛戒护澶ц嚕浠棴鍢淬€?/p>
            <p><em>"浣嗚繖浜涗簨鎯呬笉鏄湰鏉ュ氨浼氬彂鐢熺殑鍚楋紵"灏忕帇瀛愰棶銆?/em></p>
            <p>"娌￠敊锛?鍥界帇璇达紝"浣嗗懡浠ゅ埆浜哄仛浠栦滑鏈潵灏变細鍋氱殑浜嬶紝杩欐墠鏄潈鍔涚殑鐪熸浣撶幇銆?</p>
        `,
        choices: [
            { text: '鎷滆涓嬩竴棰楁槦鐞冿細鐖辫櫄鑽ｇ殑浜?, next: 'planet_vain', star: 2, love: -2 },
            { text: '鍥炲埌B-612鏄熺悆鐪嬫湜鐜懓', next: 'return_rose', love: 5 }
        ]
    },

    planet_vain: {
        chapter: '绗笁绔?,
        location: '鐖辫櫄鑽ｇ殑浜虹殑鏄熺悆',
        locationIcon: '馃帺',
        text: `
            <p>绗簩涓槦鐞冧笂浣忕潃涓€涓埍铏氳崳鐨勪汉銆?/p>
            <p>"鍝︼紒鏈夊磭鎷滆€呮潵鐪嬫垜浜嗭紒"鐖辫櫄鑽ｇ殑浜虹湅鍒板皬鐜嬪瓙锛屽ぇ澹板枈閬撱€?/p>
            <p>"宕囨嫓鏄粈涔堟剰鎬濓紵"灏忕帇瀛愰棶銆?/p>
            <p>"宕囨嫓灏辨槸鎵胯鎴戞槸杩欎釜鏄熺悆涓婃渶婕備寒銆佹渶鑱槑銆佹渶瀵屾湁鐨勪汉銆?</p>
            <p>"浣嗚繖涓槦鐞冧笂鍙湁浣犱竴涓汉鍟娿€?灏忕帇瀛愯銆?/p>
            <p>鐖辫櫄鑽ｇ殑浜虹毐璧蜂簡鐪夊ご锛?璇蜂笉瑕佺牬鍧忔垜鐨勫够鎯炽€?</p>
            <p><em>"澶т汉鐪熺殑寰堝鎬€?灏忕帇瀛愬湪绂诲紑鐨勬椂鍊欒繖鏍锋兂鐫€銆?/em></p>
        `,
        choices: [
            { text: '缁х画鎷滆閰掗鐨勬槦鐞?, next: 'planet_drunkard', star: 2, love: -3 },
            { text: '鍥炲埌B-612鏄熺悆鐪嬫湜鐜懓', next: 'return_rose', love: 5 }
        ]
    },

    planet_drunkard: {
        chapter: '绗洓绔?,
        location: '閰掗鐨勬槦鐞?,
        locationIcon: '馃嵎',
        text: `
            <p>绗笁涓槦鐞冧笂浣忕潃涓€涓厭楝笺€?/p>
            <p>"浣犲湪骞蹭粈涔堬紵"灏忕帇瀛愰棶銆?/p>
            <p>"鎴戝湪鍠濋厭銆?閰掗鎮蹭激鍦板洖绛斻€?/p>
            <p>"浣犱负浠€涔堣鍠濋厭锛?</p>
            <p>"涓轰簡蹇樿銆?</p>
            <p>"蹇樿浠€涔堬紵"</p>
            <p><em>"蹇樿鎴戠殑缇炶€汇€?</em></p>
            <p>"浠€涔堢緸鑰伙紵"</p>
            <p>"鍠濋厭鐨勭緸鑰汇€?</p>
            <p>灏忕帇瀛愬洶鎯戝湴绂诲紑浜嗐€傚ぇ浜轰滑鐨勪笘鐣岀湡鐨勫緢闅剧悊瑙ｃ€?/p>
        `,
        choices: [
            { text: '缁х画鎷滆鍟嗕汉鐨勬槦鐞?, next: 'planet_businessman', star: 2, love: -2 },
            { text: '鍥炲埌B-612鏄熺悆鐪嬫湜鐜懓', next: 'return_rose', love: 5 }
        ]
    },

    planet_businessman: {
        chapter: '绗簲绔?,
        location: '鍟嗕汉鐨勬槦鐞?,
        locationIcon: '馃挵',
        text: `
            <p>绗洓涓槦鐞冧笂浣忕潃涓€涓晢浜恒€?/p>
            <p>"浣犲ソ銆?灏忕帇瀛愯銆?/p>
            <p>"浣犲ソ銆?鍟嗕汉璇达紝"鎴戞鍦ㄨ绠楁槦鏄熺殑鏁伴噺銆?</p>
            <p>"浣犱负浠€涔堣鍋氳繖浠朵簨锛?</p>
            <p>"鍥犱负鏄熸槦鏄垜鐨勩€?</p>
            <p>"鏄熸槦鏄綘鐨勶紵"灏忕帇瀛愬緢鎯婅銆?/p>
            <p>"娌￠敊锛屾垜绗竴涓兂鍒拌鎷ユ湁瀹冧滑锛屾墍浠ュ畠浠氨鏄垜鐨勩€?</p>
            <p><em>"浣嗕綘瀵瑰畠浠湁浠€涔堢敤鍛紵"灏忕帇瀛愰棶銆?/em></p>
            <p>"鎴戣瀹冧滑鍙樺瘜銆?鍟嗕汉鍥炵瓟銆?/p>
        `,
        choices: [
            { text: '鍛婅瘔鍟嗕汉鏄熸槦涓嶈兘琚嫢鏈?, next: 'ending_truth', love: 10, star: 3 },
            { text: '鍥炲埌B-612鏄熺悆鐪嬫湜鐜懓', next: 'return_rose', love: 5 }
        ]
    },

    return_rose: {
        chapter: '缁堢珷',
        location: 'B-612鏄熺悆',
        locationIcon: '馃尮',
        text: `
            <p>灏忕帇瀛愬洖鍒颁簡浠栫殑鏄熺悆銆?/p>
            <p>閭ｆ湹楠勫偛鐨勭帿鐟颁緷鐒跺湪閭ｉ噷锛屽ス鐨勫洓鏍瑰埡鍦ㄥ井椋庝腑杞昏交鎽囨檭銆?/p>
            <p>"浣犲洖鏉ヤ簡銆?鐜懓璇达紝璇皵閲屽甫鐫€涓€涓濇儕璁躲€?/p>
            <p>"鏄殑锛屾垜鍥炴潵浜嗐€?灏忕帇瀛愯锛?瀵逛笉璧凤紝鎴戜笉璇ョ寮€浣犮€?</p>
            <p>"鎴戜篃瀵逛笉璧凤紝"鐜懓璇达紝"鎴戜笉璇ラ偅涔堜换鎬с€?</p>
            <p>鍦ㄩ偅涓€鍒伙紝涓ら蹇冮噸鏂拌繛鎺ュ湪涓€璧枫€?/p>
            <p><em>"閲嶈鐨勪笢瑗匡紝鐢ㄧ溂鐫涙槸鐪嬩笉瑙佺殑銆?</em></p>
        `,
        choices: [
            { text: '杩欏氨鏄粨灞€锛屼竴鍒囬兘濂?, next: 'ending_home', love: 20 }
        ]
    },

    // ===== 缁撳眬 =====
    ending_home: {
        chapter: '缁撳眬',
        location: 'B-612鏄熺悆',
        locationIcon: '馃専',
        text: `
            <p>灏忕帇瀛愮粓浜庡洖鍒颁簡浠栫殑鏄熺悆锛屽洖鍒颁簡浠栫殑鐜懓韬竟銆?/p>
            <p>閭ｄ簺鏇剧粡鐨勪簤鍚靛拰璇В锛屽湪鐖遍潰鍓嶅彉寰楀井涓嶈冻閬撱€?/p>
            <p>"浣犵煡閬撳悧锛?灏忕帇瀛愯锛?鎴戝湪鏃呴€斾腑閬囧埌浜嗗緢澶氬鎬殑浜猴紝浣嗘病鏈変竴涓汉鑳界悊瑙ｆ垜銆?</p>
            <p>"鐩村埌鎴戦亣瑙佷簡浣犮€?浠栫湅鐫€閭ｆ湹鐜懓锛岀溂鐫涢噷鍏呮弧浜嗘俯鏌斻€?/p>
            <p><em>"鍥犱负浣犲湪浣犵殑鐜懓涓婅姳璐逛簡鏃堕棿锛屾墠浣垮緱浣犵殑鐜懓鍙樺緱濡傛閲嶈銆?</em></p>
            <p>鑰屾垜锛屼綔涓轰竴涓琛屽憳锛屾案杩滆浣忎簡閭ｄ釜鏉ヨ嚜B-612鏄熺悆鐨勭敺瀛╋紝鍜屼粬鏁欎細鎴戠殑閬撶悊锛?/p>
            <p><span class="highlight">鐪熸閲嶈鐨勪笢瑗匡紝鐢ㄧ溂鐫涙槸鐪嬩笉瑙佺殑锛岃鐢ㄥ績鍘绘劅鍙椼€?/span></p>
        `,
        isEnding: true,
        endingType: 'home'
    },

    ending_friendship: {
        chapter: '缁撳眬',
        location: '鎾掑搱鎷夋矙婕犅锋案鎭掔殑鍙嬭皧',
        locationIcon: '馃挮',
        text: `
            <p>鍦ㄩ偅涓鏅氾紝鎴戝拰灏忕帇瀛愭垚涓轰簡姘歌繙鐨勬湅鍙嬨€?/p>
            <p>铏界劧浠栨渶缁堣繕鏄鍥炲埌浠栫殑鏄熺悆锛屽洖鍒颁粬鐨勭帿鐟拌韩杈癸紝浣嗘垜鐭ラ亾锛屾垜浠箣闂寸殑鑱旂粨姘歌繙涓嶄細娑堝け銆?/p>
            <p>"姣忓綋浣犱话鏈涙槦绌虹殑鏃跺€欙紝"灏忕帇瀛愯锛?浣犲氨浼氭兂璧锋垜銆傚洜涓烘垜浼氫綇鍦ㄥ叾涓竴棰楁槦鏄熶笂锛屾垜浼氬湪鍏朵腑涓€棰楁槦鏄熶笂绗戠潃銆?</p>
            <p><em>"瀵逛綘鏉ヨ锛屾垜浼氭槸鐙竴鏃犱簩鐨勶紱瀵逛綘鏉ヨ锛屾垜涔熸槸鐙竴鏃犱簩鐨勩€?</em></p>
            <p>鎴戠湅鐫€灏忕帇瀛愮殑韬奖娓愭笎娑堝け鍦ㄦ槦鍏変腑锛屽績閲屽厖婊′簡鎰熸縺銆?/p>
            <p>鎰熻阿浣狅紝灏忕帇瀛愶紝鏁欎細鎴戜粈涔堟槸鐪熸鐨勫弸璋婏紝浠€涔堟槸鐪熸閲嶈鐨勪笢瑗裤€?/p>
            <p><span class="highlight">鎵€鏈夌殑澶т汉閮芥浘缁忔槸灏忓锛岃櫧鐒讹紝鍙湁灏戞暟鐨勪汉璁板緱銆?/span></p>
        `,
        isEnding: true,
        endingType: 'friendship'
    },

    ending_treasure: {
        chapter: '缁撳眬',
        location: '鎾掑搱鎷夋矙婕犅风弽钘忕殑鍥炲繂',
        locationIcon: '馃巵',
        text: `
            <p>鎴戝皬蹇冪考缈煎湴鏀惰捣浜嗛偅骞呯敾锛岄偅鏄垜鍜屽皬鐜嬪瓙涓€璧峰垱浣滅殑銆?/p>
            <p>"杩欏箙鐢绘槸鎴戞渶鐝嶈吹鐨勫疂钘忋€?鎴戝灏忕帇瀛愯銆?/p>
            <p>灏忕帇瀛愬井绗戠潃锛?鐢诲彧鏄焊锛屼絾鎴戜滑鍦ㄧ敾鐢绘椂鐨勬椂鍏夛紝鎵嶆槸鐪熸鐨勫疂钘忋€?</p>
            <p>鍦ㄩ偅涓€鍒伙紝鎴戞槑鐧戒簡锛氱湡姝ｇ殑瀹濊棌涓嶆槸鐗╁搧鏈韩锛岃€屾槸涓庢墍鐖变箣浜哄叡搴︾殑鏃跺厜銆?/p>
            <p><em>"濡傛灉浣犳兂瑕佷竴涓汉鍋氫綘鐨勬湅鍙嬶紝浣犲氨瑕侀┋鏈嶄粬銆?</em></p>
            <p>鑰岄┋鏈嶄竴涓汉锛岄渶瑕佽€愬績锛岄渶瑕佹椂闂达紝闇€瑕佺湡蹇冦€?/p>
            <p><span class="highlight">鏈変簺涓滆タ锛屽彧鏈夌敤蹇冩墠鑳界湅瑙併€?/span></p>
        `,
        isEnding: true,
        endingType: 'treasure'
    },

    ending_truth: {
        chapter: '缁撳眬',
        location: '鍟嗕汉鐨勬槦鐞兟风湡鐞嗕箣鍦?,
        locationIcon: '馃挕',
        text: `
            <p>"浣犻敊浜嗐€?灏忕帇瀛愬鍟嗕汉璇达紝"鏄熸槦涓嶈兘琚嫢鏈夈€?</p>
            <p>"瀹冧滑灞炰簬姣忎竴涓话鏈涘畠浠殑浜恒€備綘涓嶈兘鎷ユ湁鏄熸槦锛屽氨鍍忎綘涓嶈兘鎷ユ湁椋庝竴鏍枫€?</p>
            <p>鍟嗕汉鐢熸皵鍦扮灙鐫€灏忕帇瀛愶紝浣嗕粬鏃犳硶鍙嶉┏銆?/p>
            <p>"浣犵煡閬撳悧锛?灏忕帇瀛愮户缁锛?鎴戞浘缁忔嫢鏈変竴鏈电帿鐟帮紝鎴戞湰浠ヤ负濂规槸鎴戠殑銆備絾鎴戦敊浜嗏€斺€斿ス涓嶆槸鎴戠殑锛屾垜涔熸病鏈夋嫢鏈夊ス銆?</p>
            <p><em>"鐪熸鐨勬嫢鏈夛紝涓嶆槸鎶婂鏂瑰叧鍦ㄧ瀛愰噷锛岃€屾槸璁╁ス鑷敱锛屽悓鏃剁煡閬撳ス浼氬洖鏉ャ€?</em></p>
            <p>鎴戝惉浜嗗皬鐜嬪瓙鐨勮瘽锛岀獊鐒舵槑鐧戒簡浠€涔堟墠鏄湡姝ｇ殑鐖便€?/p>
            <p><span class="highlight">鐖变笉鏄崰鏈夛紝鑰屾槸缁欎簣鑷敱銆?/span></p>
        `,
        isEnding: true,
        endingType: 'truth'
    },

    continue_fix: {
        chapter: '绗簩绔?,
        location: '鎾掑搱鎷夋矙婕犅蜂慨鐞嗕腑',
        locationIcon: '馃敡',
        text: `
            <p>鎴戠户缁慨鐞嗘垜鐨勯鏈猴紝浣嗗皬鐜嬪瓙涓€鐩村湪鏃佽竟闂垜闂銆?/p>
            <p>"缇婁細鍚冪亴鏈ㄥ悧锛?</p>
            <p>"浼氱殑銆?</p>
            <p>"閭ｇ緤浼氬悆鐚撮潰鍖呮爲鍚楋紵"</p>
            <p>"涓嶄細锛岀尨闈㈠寘鏍戝お澶т簡銆?</p>
            <p>"鐚撮潰鍖呮爲鍦ㄥ彉鎴愬ぇ鏍戜箣鍓嶏紝涔熸槸灏忔爲鑻楀晩銆?灏忕帇瀛愯銆?/p>
            <p>"娌￠敊銆?</p>
            <p><em>"閭ｄ箞闂鏉ヤ簡鈥斺€斿湪B-612鏄熺悆涓婏紝灏忕緤鑳藉悆鎺夌尨闈㈠寘鏍戠殑骞艰嫍鍚楋紵"</em></p>
            <p>鎴戠獊鐒舵剰璇嗗埌锛屽皬鐜嬪瓙鍦ㄦ媴蹇冧粬鐨勬槦鐞冦€?/p>
        `,
        choices: [
            { text: '鍛婅瘔灏忕帇瀛愯闃叉鐚撮潰鍖呮爲闀垮ぇ', next: 'prince_story', love: 8 },
            { text: '鍏堝府灏忕帇瀛愯В鍐宠繖涓媴蹇?, next: 'prince_story', love: 10 }
        ]
    },

    prince_planet: {
        chapter: '绗簲绔?,
        location: 'B-612鏄熺悆路鍥炲繂',
        locationIcon: '馃尭',
        text: `
            <p>"鍦ㄦ垜鐨勬槦鐞冧笂锛?灏忕帇瀛愯锛?鏈変竴鏈甸潪甯哥編涓界殑鐜懓銆?</p>
            <p>"濂瑰彧鏈夊洓鏍瑰埡锛屼絾濂硅寰楄嚜宸卞緢鍘夊銆?</p>
            <p>"鎴戞瘡澶╃粰濂规祰姘达紝缁欏ス鎸￠锛屼负濂归櫎铏€?</p>
            <p>"浣嗗ス鎬绘槸鎶辨€紝璇存垜杩欎笉濂介偅涓嶅ソ銆?</p>
            <p>"鏈変竴澶╋紝鎴戠寮€浜嗗ス銆?</p>
            <p><em>"浣嗙幇鍦紝鎴戝ソ鎯冲ス銆?</em></p>
            <p>灏忕帇瀛愮殑鐪肩潧婀挎鼎浜嗐€?/p>
        `,
        choices: [
            { text: '瀹夋叞灏忕帇瀛?, next: 'comfort_prince', love: 12 },
            { text: '闂皬鐜嬪瓙涓轰粈涔堜笉鍥炲幓鎵惧ス', next: 'why_leave', love: 10 }
        ]
    },

    find_well: {
        chapter: '绗洓绔?,
        location: '鎾掑搱鎷夋矙婕犅锋按浜曟梺',
        locationIcon: '馃',
        text: `
            <p>鎴戝甫鐫€灏忕帇瀛愬湪娌欐紶涓鎵鹃偅鍙ｄ紶璇翠腑鐨勬按浜曘€?/p>
            <p>"姘翠簳鍦ㄥ摢閲岋紵"灏忕帇瀛愰棶銆?/p>
            <p>"鎴戜滑鐢ㄥ績鍘绘壘锛屽氨涓€瀹氳兘鎵惧埌銆?鎴戣銆?/p>
            <p>鎴戜滑璧颁簡寰堜箙寰堜箙锛岀粓浜庡湪榛庢槑鏃跺垎锛屽彂鐜颁簡涓€鍙ｅ彜鑰佺殑姘翠簳銆?/p>
            <p>鎴戜滑鎵撲笂姘达紝鍠濅簡涓€鍙ｏ紝閭ｆ按鍙堢敎鍙堟竻鍑夈€?/p>
            <p><em>"娌欐紶涔嬫墍浠ョ編涓斤紝鏄洜涓哄畠鍦ㄦ煇涓钀介噷钘忕潃涓€鍙ｆ按浜曘€?</em>灏忕帇瀛愯銆?/p>
            <p>鍦ㄩ偅涓€鍒伙紝鎴戞槑鐧戒簡锛氱湡姝ｇ編濂界殑涓滆タ锛屽線寰€闅愯棌鍦ㄦ渶涓嶈捣鐪肩殑鍦版柟銆?/p>
        `,
        choices: [
            { text: '涓庡皬鐜嬪瓙涓€璧峰枬杩欑弽璐电殑姘?, next: 'ending_friendship', love: 15, star: 5 },
            { text: '鎶婅繖鍙ｆ按浜曠殑绉樺瘑鍒嗕韩缁欐洿澶氫汉', next: 'ending_truth', love: 12 }
        ]
    }
};

// ==================== 娓告垙鍑芥暟 ====================

/**
 * 鍒濆鍖栨槦绌鸿儗鏅? */
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
 * 鏄剧ず鎸囧畾鐣岄潰
 */
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

/**
 * 寮€濮嬫父鎴? */
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
 * 鍔犺浇鍦烘櫙
 */
function loadScene(sceneId) {
    const scene = storyData[sceneId];
    if (!scene) return;
    
    gameState.currentScene = sceneId;
    
    // 鏇存柊鐣岄潰
    document.getElementById('current-location').textContent = scene.location;
    document.querySelector('.location-icon').textContent = scene.locationIcon;
    document.getElementById('chapter-num').textContent = scene.chapter;
    
    // 娓呯┖骞跺姞杞芥晠浜嬫枃鏈?    const storyText = document.getElementById('story-text');
    storyText.innerHTML = '';
    
    // 浣跨敤 setTimeout 妯℃嫙鎵撳瓧鏁堟灉
    const parser = new DOMParser();
    const doc = parser.parseFromString(scene.text, 'text/html');
    const paragraphs = doc.querySelectorAll('p');
    
    paragraphs.forEach((p, index) => {
        setTimeout(() => {
            storyText.appendChild(p.cloneNode(true));
            storyText.scrollTop = storyText.scrollHeight;
        }, index * 150);
    });
    
    // 鍔犺浇閫夐」
    const choicesPanel = document.getElementById('choices-panel');
    choicesPanel.innerHTML = '';
    
    setTimeout(() => {
        if (scene.isEnding) {
            // 缁撳眬鐣岄潰
            const endingIcon = document.getElementById('ending-icon');
            const endingTitle = document.getElementById('ending-title');
            const endingText = document.getElementById('ending-text');
            
            const icons = {
                'home': '馃彔',
                'friendship': '馃挮',
                'treasure': '馃巵',
                'truth': '馃挕'
            };
            
            const titles = {
                'home': '鍥炲',
                'friendship': '姘告亽鐨勫弸璋?,
                'treasure': '鐝嶈棌鐨勫洖蹇?,
                'truth': '鐪熺悊'
            };
            
            endingIcon.textContent = icons[scene.endingType] || '馃専';
            endingTitle.textContent = titles[scene.endingType] || '缁撳眬';
            endingText.innerHTML = scene.text;
            
            document.getElementById('final-love').textContent = gameState.love;
            document.getElementById('final-stars').textContent = gameState.stars;
            
            setTimeout(() => showScreen('ending-screen'), 1500);
        } else {
            // 姝ｅ父閫夐」
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
 * 鍋氬嚭閫夋嫨
 */
function makeChoice(choice) {
    // 鏇存柊娓告垙鐘舵€?    if (choice.love) gameState.love += choice.love;
    if (choice.star) gameState.stars += choice.star;
    if (choice.item && !gameState.items.includes(choice.item)) {
        gameState.items.push(choice.item);
    }
    
    gameState.choices.push(choice.text);
    
    // 鏇存柊鏄剧ず
    updateStats();
    
    // 鍔犺浇涓嬩竴涓満鏅?    loadScene(choice.next);
}

/**
 * 鏇存柊缁熻鏁版嵁
 */
function updateStats() {
    animateStat('love-stat', gameState.love);
    animateStat('star-stat', gameState.stars);
    animateStat('item-stat', gameState.items.length);
}

/**
 * 鏁板瓧鍔ㄧ敾
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
 * 閲嶆柊寮€濮? */
function restartGame() {
    startGame();
}

/**
 * 鏄剧ず鍒朵綔鍚嶅崟
 */
function showCredits() {
    showScreen('credits-screen');
}

/**
 * 杩斿洖棣栭〉
 */
function goToStart() {
    showScreen('start-screen');
}

// ==================== 鍒濆鍖?====================
document.addEventListener('DOMContentLoaded', () => {
    initStars();
    
    // 娣诲姞椤甸潰鍒囨崲鍔ㄧ敾
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
});
