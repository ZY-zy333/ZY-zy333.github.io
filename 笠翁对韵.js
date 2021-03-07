const localStorageKey="coupletKey";

const coupletArr=[
    {"title":"一东","src":"https://aod.cos.tx.xmcdn.com/group14/M03/2C/D1/wKgDZFWJtyPBBjzpABEybPgdjbI259.m4a","couplet":["天对地，雨对风。大陆对长空。山花对海树，赤日对苍穹。雷隐隐，雾蒙蒙。日下对天中。风高秋月白，雨霁晚霞红。牛女二星河左右，参商两曜斗西东。十月塞边，飒飒寒霜惊戍旅；三冬江上，漫漫朔雪冷渔翁。",
"河对汉，绿对红。雨伯对雷公。烟楼对雪洞，月殿对天宫。云叆叇，日曈曚。腊屐对渔篷。过天星似箭，吐魄月如弓。驿旅客逢梅子雨，池亭人挹藕花风。茅店村前，皓月坠林鸡唱韵；板桥路上，青霜锁道马行踪。",    
"山对海，华对嵩。四岳对三公。宫花对禁柳，塞雁对江龙。清暑殿，广寒宫。拾翠对题红。庄周梦化蝶，吕望兆飞熊。北牖当风停夏扇，南檐曝日省冬烘。鹤舞楼头，玉笛弄残仙子月；凤翔台上，紫箫吹断美人风。"]},
    {"title":"二冬","src":"https://aod.cos.tx.xmcdn.com/group14/M03/2C/D1/wKgDZFWJtyPBBjzpABEybPgdjbI259.m4a","couplet":["晨对午，夏对冬。下饷对高舂。青春对白昼，古柏对苍松。垂钓客，荷锄翁。仙鹤对神龙。凤冠珠闪烁，螭带玉玲珑。三元及第才千顷，一品当朝禄万钟。花萼楼间，仙李盘根调国脉；沉香亭畔，娇杨擅宠起边风。",
"清对淡，薄对浓。暮鼓对晨钟。山茶对石菊，烟锁对云封。金菡萏，玉芙蓉。绿绮对青锋。早汤先宿酒，晚食继朝饔。唐库金钱能化蝶，延津宝剑会成龙。巫峡浪传，云雨荒唐神女庙；岱宗遥望，儿孙罗列丈人峰。",
"繁对简，叠对重。意懒对心慵。仙翁对释伴，道范对儒宗。花灼灼，草茸茸。浪蝶对狂蜂。数竿君子竹，五树大夫松。高皇灭项凭三杰，虞帝承尧殛四凶。内苑佳人，满地风光愁不尽；边关过客，连天烟草憾无穷。"]},
    {"title":"三江","src":"https://aod.cos.tx.xmcdn.com/group14/M03/2C/D1/wKgDZFWJtyPBBjzpABEybPgdjbI259.m4a","couplet":["奇对偶，只对双。大海对长江。金盘对玉盏，宝烛对银釭。朱漆槛，碧纱窗。舞调对歌腔。兴汉推马武，谏夏著龙逄。四收列国群王服，三筑高城众敌降。跨凤登台，潇洒仙姬秦弄玉；斩蛇当道，英雄天子汉刘邦。",
"颜对貌，像对庞。步辇对徒杠。停针对搁笔，意懒对心降。灯闪闪，月幢幢。揽辔对飞艎。柳堤驰骏马，花院吠村尨。酒晕微酡琼杏颊，香尘浅印玉莲双。诗写丹枫，韩女幽怀流御水；泪弹斑竹，舜妃遗憾积湘江。",]},
    {"title":"四支","src":"https://aod.cos.tx.xmcdn.com/group14/M03/2C/D1/wKgDZFWJtyPBBjzpABEybPgdjbI259.m4a","couplet":["泉对石，干对枝。吹竹对弹丝。山亭对水榭，鹦鹉对鸬鹚。五色笔，十香词。泼墨对传卮。神奇韩干画，雄浑李陵诗。几处花街新夺锦，有人香径淡凝脂。万里烽烟，战士边头争保塞；一犁膏雨，农夫村外尽乘时。",
"菹对醢，赋对诗。点漆对描脂。璠簪对珠履，剑客对琴师。沽酒价，买山资。国色对仙姿。晚霞明似锦，春雨细如丝。柳畔长堤千万树，花横野寺两三枝。紫盖黄旗，天象预占江左地；青袍白马，童谣终应寿阳儿。",
"箴对赞，缶对卮。萤焰对蚕丝。轻裾对长袖，瑞草对灵芝。流涕策，断肠诗。喉舌对腰肢。云中熊虎将，天上凤凰儿。禹庙千年垂橘柚，尧阶三尺覆茅茨。湘竹含烟，腰下轻纱笼玳瑁；海棠经雨，脸边清泪湿胭脂。",
"争对让，望对思。野葛对山栀。仙风对道骨，天造对人为。专诸剑，博浪椎。经纬对干支。位尊民物主，德重帝王师。望切不妨人去远，心忙无奈马行迟。金屋闭来，赋乞茂陵题柱笔；玉楼成后，记须昌谷负囊词。"]},
    {"title":"五微","src":"https://aod.cos.tx.xmcdn.com/group14/M03/2C/D1/wKgDZFWJtyPBBjzpABEybPgdjbI259.m4a","couplet":["贤对圣，是对非。觉奥对参微。鱼书对雁字，草舍对柴扉。鸡晓唱，雉朝飞。红瘦对绿肥。举杯邀月饮，骑马踏花归。黄盖能成赤壁捷，陈平善解白登危。太白书堂，瀑泉垂地三千丈；孔明祠庙，老柏参天四十围。",
"戈对甲，幄对帏。荡荡对巍巍。严滩对邵圃，靖菊对夷薇。占鸿渐，采凤飞。虎榜对龙旗。心中罗锦绣，口内吐珠玑。宽宏豁达高皇量，叱咤喑哑霸主威。灭项兴刘，狡兔尽时走狗死；连吴拒魏，貔貅屯处卧龙归。",
"衰对盛，密对稀。祭服对朝衣。鸡窗对雁塔，秋榜对春闱。乌衣巷，燕子矶。久别对初归。天姿真窈窕，圣德实光辉。蟠桃紫阙来金母，岭荔红尘进玉妃。灞上军营，亚父丹心撞玉斗；长安酒市，谪仙狂兴换银龟"]},
    {"title":"六鱼","src":"https://aod.cos.tx.xmcdn.com/group14/M03/2C/D1/wKgDZFWJtyPBBjzpABEybPgdjbI259.m4a","couplet":["羹对饭，柳对榆。短袖对长裾。鸡冠对凤尾，芍药对芙蕖。周有若，汉相如。王屋对匡庐。月明山寺远，风细水亭虚。壮士腰间三尺剑，男儿腹内五车书。疏影暗香，和靖孤山梅蕊放；轻阴清昼，渊明旧宅柳条舒。",
"吾对汝，尔对余。选授对升除。书箱对药柜，耒耜对耰锄。参虽鲁，回不愚。阀阅对阎闾。诸侯千乘国，命妇七香车。穿云采药闻仙子，踏雪寻梅策蹇驴。玉兔金乌，二气精灵为日月；洛龟河马，五行生克在图书。",
"欹对正，密对疏。囊橐对苞苴。罗浮对壶峤，水曲对山纡。骖鹤驾，侍鸾舆。桀溺对长沮。搏虎卞庄子，当熊冯婕妤。南阳高士吟梁父，西蜀才人赋子虚。三径风光，白石黄花供杖履；五湖烟景，青山绿水在樵渔。"]},
    {"title":"七虞","src":"https://aod.cos.tx.xmcdn.com/group14/M03/2C/D1/wKgDZFWJtyPBBjzpABEybPgdjbI259.m4a","couplet":["红对白，有对无。布谷对提壶。毛锥对羽扇，天阙对皇都。谢蝴蝶，郑鹧鸪。蹈海对归湖。花肥春雨润，竹瘦晚风疏。麦饭豆糜终创汉，莼羹胪脍竟归吴。琴调轻弹，杨柳月中潜去听；酒旗斜挂，杏花村里共来沽。",
"罗对绮，茗对蔬。柏秀对松枯。中元对上巳，返璧对还珠。云梦泽，洞庭湖。玉烛对冰壶。苍头犀角带，绿鬓象牙梳。松阴白鹤声相应，镜里青鸾影不孤。竹户半开，对牖不知人在否？柴门深闭，停车还有客来无？",
"宾对主，婢对奴。宝鸭对金凫。升堂对入室，鼓瑟对投壶。觇合璧，颂联珠。提瓮对当垆。仰高红日近，望远白云孤。歆向秘书窥二酉，机云芳誉动三吴。祖饯三杯，老去常斟花下酒；荒田五亩，归来独荷月中锄。",
"君对父，魏对吴。北岳对西湖。菜蔬对茶荈，苣藤对菖蒲。梅花数，竹叶符。廷议对山呼。两都班固赋，八阵孔明图。田庆紫荆堂下茂，王裒青柏墓前枯。出塞中郎，羝有乳时归汉室；质秦太子，马生角日返燕都。"]},
    {"title":"八齐","src":"https://aod.cos.tx.xmcdn.com/group14/M03/2C/D1/wKgDZFWJtyPBBjzpABEybPgdjbI259.m4a","couplet":["鸾对凤，犬对鸡。塞北对关西。长生对益智，老幼对旄倪。颁竹策，剪桐圭。剥枣对蒸梨。绵腰如弱柳，嫩手似柔荑。狡兔能穿三穴隐，鹪鹩权借一枝栖。甪里先生，策杖垂绅扶少主；於陵仲子，辟（纑）织履赖贤妻。",
"鸣对吠，泛对栖。燕语对莺啼。珊瑚对玛瑙，琥珀对玻璃。绛县老，伯州犁。测蠡对燃犀。榆槐堪作荫，桃李自成蹊。投巫救女西门豹，赁浣逢妻百里奚。阙里门墙，陋巷规模原不陋；隋堤基址，迷楼踪迹亦全迷。",
"越对赵，楚对齐。柳岸对桃蹊。纱窗对绣户，画阁对香闺。修月斧，上天梯。螮蝀对虹霓。行乐游春圃，工谀病夏畦。李广不封空射虎，魏明得立为存麑。按辔徐行，细柳功成劳王敬；闻声稍卧，临泾名震止儿啼。"]},
    {"title":"九佳","src":"https://aod.cos.tx.xmcdn.com/group14/M03/2C/D1/wKgDZFWJtyPBBjzpABEybPgdjbI259.m4a","couplet":["门对户，陌对街。枝叶对根荄。斗鸡对挥麈，凤髻对鸾钗。登楚岫，渡秦淮。子犯对夫差。石鼎龙头缩，银筝雁翅排。百年诗礼延余庆，万里风云入壮怀。能辨名伦，死矣野哉悲季路；不由径窦，生乎愚也有高柴。",
"冠对履，袜对鞋。海角对天涯。鸡人对虎旅，六市对三街。陈俎豆，戏堆埋。皎皎对皑皑。贤相聚东阁，良朋集小斋。梦里山川书越绝，枕边风月记齐谐。三径萧疏，彭泽高风怡五柳；六朝华贵，琅琊佳气种三槐。",
"勤对俭，巧对乖。水榭对山斋。冰桃对雪藕，漏箭对更牌。寒翠袖，贵荆钗。慷慨对诙谐。竹径风声籁，花溪月影筛。携囊佳韵随时贮，荷锄沉酣到处埋。江海孤踪，云浪风涛惊旅梦；乡关万里，烟峦云树切归怀。",
"杞对梓，桧对楷。水泊对山崖。舞裙对歌袖，玉陛对瑶阶。风入袂，月盈怀。虎兕对狼豺。马融堂上帐，羊侃水中斋。北面黉宫宜拾芥，东巡岱畤定燔柴。锦缆春江，横笛洞箫通碧落；华灯夜月，遗簪堕翠遍香街。"]},
    {"title":"十灰","src":"https://aod.cos.tx.xmcdn.com/group14/M03/2C/D1/wKgDZFWJtyPBBjzpABEybPgdjbI259.m4a","couplet":["春对夏，喜对哀。大手对长才。风清对月朗，地阔对天开。游阆苑，醉蓬莱。七政对三台。青龙壶老杖，白燕玉人钗。香风十里望仙阁，明月一天思子台。玉橘冰桃，王母几因求道降；莲舟藜杖，真人原为读书来。",
"朝对暮，去对来。庶矣对康哉。马肝对鸡肋，杏眼对桃腮。佳兴适，好怀开。朔雪对春雷。云移鳷鹊观，日晒凤凰台。河边淑气迎芳草，林下轻风待落梅。柳媚花明，燕语莺声浑是笑；松号柏舞，猿啼鹤唳总成哀。",
"忠对信，博对赅。忖度对疑猜。香消对烛暗，鹊喜对蛩哀。金花报，玉镜台。倒斝对衔杯。岩巅横老树，石磴覆苍苔。雪满山中高士卧，月明林下美人来。绿柳沿堤，皆因苏子来时种；碧桃满观，尽是刘郎去后栽。"]},
    {"title":"十一真","src":"https://aod.cos.tx.xmcdn.com/group14/M03/2C/D1/wKgDZFWJtyPBBjzpABEybPgdjbI259.m4a","couplet":["莲对菊，凤对麟。浊富对清贫。渔庄对佛舍，松盖对花茵。萝月叟，葛天民。国宝对家珍。草迎金埒马，花醉玉楼人。巢燕三春尝唤友，塞鸿八月始来宾。古往今来，谁见泰山曾作砺；天长地久，人传沧海几扬尘。",
"兄对弟，吏对民。父子对君臣。勾丁对甫甲，赴卯对同寅。折桂客，簪花人。四皓对三仁。王乔云外舄，郭泰雨中巾。人交好友求三益，士有贤妻备五伦。文教南宣，武帝平蛮开百越；义旗西指，韩侯扶汉卷三秦。",
"申对午，侃对訚。阿魏对茵陈。楚兰对湘芷，碧柳对青筠。花馥馥，叶蓁蓁。粉颈对朱唇。曹公奸似鬼，尧帝智如神。南阮才郎差北富，东邻丑女效西颦。色艳北堂，草号忘忧忧甚事；香浓南国，花名含笑笑何人。"]},
    {"title":"十二文","src":"https://aod.cos.tx.xmcdn.com/group14/M03/2C/D1/wKgDZFWJtyPBBjzpABEybPgdjbI259.m4a","src":"https://aod.cos.tx.xmcdn.com/group14/M03/2C/D1/wKgDZFWJtyPBBjzpABEybPgdjbI259.m4a","couplet":["忧对喜，戚对欣。二典对三坟。佛经对仙语，夏耨对春耘。烹早韭，剪春芹。暮雨对朝云。竹间斜白接，花下醉红裙。掌握灵符五岳箓，腰悬宝剑七星纹。金锁未开，上相趋听宫漏永；珠帘半卷，群僚仰对御炉熏。",
"词对赋，懒对勤。类聚对群分。鸾箫对凤笛，带草对香芸。燕许笔，韩柳文。旧话对新闻。赫赫周南仲，翩翩晋右军。六国说成苏子贵，两京收复郭公勋。汉阙陈书，侃侃忠言推贾谊；唐廷对策，岩岩直谏有刘羵。",
"言对笑，绩对勋。鹿豕对羊羵。星冠对月扇，把袂对书裙。汤事葛，说兴殷。萝月对松云。西池青鸟使，北塞黑鸦军。文武成康为一代，魏吴蜀汉定三分。桂苑秋宵，明月三杯邀曲客；松亭夏日，薰风一曲奏桐君。"]},
    {"title":"十三元","src":"https://aod.cos.tx.xmcdn.com/group14/M03/2C/D1/wKgDZFWJtyPBBjzpABEybPgdjbI259.m4a","src":"https://aod.cos.tx.xmcdn.com/group14/M03/2C/D1/wKgDZFWJtyPBBjzpABEybPgdjbI259.m4a","couplet":["卑对长，季对昆。永巷对长门。山亭对水阁，旅舍对军屯。扬子渡，谢公墩。德重对年尊。承乾对出震，叠坎对重坤。志士报君思犬马，仁王养老察鸡豚。远水平沙，有客泛舟桃叶渡；斜风细雨，何人携榼杏花村。",
"君对相，祖对孙。夕照对朝暾。兰台对桂殿，海岛对山村。碑堕泪，赋招魂。报怨对怀恩。陵埋金吐气，田种玉生根。相府珠帘垂白昼，边城画角动黄昏。枫叶半山，秋去烟霞堪倚杖；梨花满地，夜来风雨不开门。"]},
    {"title":"十四寒","src":"https://aod.cos.tx.xmcdn.com/group14/M03/2C/D1/wKgDZFWJtyPBBjzpABEybPgdjbI259.m4a","src":"https://aod.cos.tx.xmcdn.com/group14/M03/2C/D1/wKgDZFWJtyPBBjzpABEybPgdjbI259.m4a","couplet":["家对国，治对安。地主对天官。坎男对离女，周诰对殷盘。三三暖，九九寒。杜撰对包弹。古壁蛩声匝，闲亭鹤影单。燕出帘边春寂寂，莺闻枕上漏珊珊。池柳烟飘，日夕郎归青琐闼；砌花雨过，月明人倚玉栏杆。",
"肥对瘦，窄对宽。黄犬对青鸾。指环对腰带，洗钵对投竿。诛佞剑，进贤冠。画栋对雕栏。双垂白玉箸，九转紫金丹。陕右棠高怀召伯，河南花满忆潘安。陌上芳春，弱柳当风披彩线；池中清晓，碧荷承露捧珠盘。",
"行对卧，听对看。鹿洞对鱼滩。蛟腾对豹变，虎踞对龙蟠。风凛凛，雪漫漫。手辣对心酸。莺莺对燕燕，小小对端端。蓝水远从千涧落，玉山高并两峰寒。至圣不凡，嬉戏六龄陈俎豆；老莱大孝，承欢七秩舞斑襕。"]},
    {"title":"十五删","src":"https://aod.cos.tx.xmcdn.com/group14/M03/2C/D1/wKgDZFWJtyPBBjzpABEybPgdjbI259.m4a","src":"https://aod.cos.tx.xmcdn.com/group14/M03/2C/D1/wKgDZFWJtyPBBjzpABEybPgdjbI259.m4a","couplet":["林对坞，岭对峦。昼永对春闲。谋深对望重，任大对投艰。裾袅袅，佩珊珊。守塞对当关。密云千里合，新月一钩弯。叔宝君臣皆纵逸，重华父母是嚚顽。名动帝畿，西蜀三苏来日下；壮游京洛，东吴二陆起云间。",
"骄对傲，吝对悭。讨逆对平蛮。忠肝对义胆，雾鬓对云鬟。埋笔冢，烂柯山。月貌对天颜。龙潜终得跃，鸟倦亦知还。陇树飞来鹦鹉绿，湘筠密处鹧鸪斑。秋露横江，苏子月明游赤壁；冻云迷岭，韩公雪拥过蓝关。"]},
    {"title":"一先","src":"https://aod.cos.tx.xmcdn.com/group14/M03/2C/D1/wKgDZFWJtyPBBjzpABEybPgdjbI259.m4a","src":"https://aod.cos.tx.xmcdn.com/group14/M03/2C/D1/wKgDZFWJtyPBBjzpABEybPgdjbI259.m4a","couplet":["寒对暑，日对年。蹴踘对秋千。丹山对碧水，淡雨对轻烟。歌宛转，貌婵娟。雪赋对云笺。荒芦栖宿雁，疏柳噪秋蝉。洗耳尚逢高士笑，折腰肯受小儿怜。郭泰泛舟，折角半垂梅子雨；山涛骑马，接篱倒着杏花天。",
"轻对重，脆对坚。碧玉对青钱。郊寒对岛瘦，酒圣对诗仙。依玉树，步金莲。凿井对耕田。杜甫清宵立，边韶白昼眠。豪饮客吞杯底月，酣游人醉水中天。斗草青郊，几行宝马嘶金勒；看花紫陌，千里香车拥翠钿。",    
"吟对咏，授对传。乐矣对凄然。风鹏对雪雁，董杏对周莲。春九十，岁三千。钟鼓对管弦。入山逢宰相，无事即神仙。霞染武陵桃淡淡，烟荒隋堤柳绵绵。七碗月团，啜罢清风生腋下；三杯云液，饮余红雨晕腮边。",    
"中对外，后对先。树下对花前。玉树对金屋，叠嶂对平川。孙子策，祖生鞭。盛席对华筵。醉解知茶力，愁消识酒权。彩剪芰荷开冻沼，锦妆凫雁泛温泉。帝女衔石，海中遗魄为精卫；蜀王叫月，枝上游魂化杜鹃。"]},
    {"title":"二箫","src":"https://aod.cos.tx.xmcdn.com/group14/M03/2C/D1/wKgDZFWJtyPBBjzpABEybPgdjbI259.m4a","couplet":["琴对笛，釜对瓢。水怪对花妖。秋声对春色，白缣对红绡。臣五代，事三朝。斗柄对弓腰。醉客歌金缕，佳人品玉箫。风定落花闲不扫，霜余残叶湿难烧。千载兴周，尚父一竿投渭水；百年霸越，钱王万弩射江潮。",
"荣对悴，夕对朝。露地对云霄。商彝对周鼎，殷濩对虞韶。樊素口，小蛮腰。六诏对三苗。朝天车奕奕，出塞马萧萧。公子幽兰重泛舸，王孙芳草正联镳。潘岳高怀，曾向秋天吟蟋蟀；王维清兴，尝于雪夜画芭蕉。",
"耕对读，牧对樵。琥珀对琼瑶。兔毫对鸿爪，桂棹对兰桡。鱼潜藻，鹿藏蕉。水远对山遥。湘灵能鼓瑟，嬴女解吹箫。雪点寒梅横小院，风吹弱柳覆平桥。月牖通宵，绛蜡罢时光不减；风帘当昼，雕盘停后篆难消。"]},
    {"title":"三肴","src":"https://aod.cos.tx.xmcdn.com/group14/M03/2C/D1/wKgDZFWJtyPBBjzpABEybPgdjbI259.m4a","couplet":["诗对礼，卦对爻。燕引对莺调。晨钟对暮鼓，野蔌对山肴。雉方乳，鹊始巢。猛虎对神獒。疏星浮荇叶，皓月上松梢。为邦自古推瑚琏，从政于今愧斗筲。管鲍相知，能交忘形胶漆友；蔺廉有隙，终对刎颈死生交。",
"歌对舞，笑对嘲。耳语对神交。焉乌对亥豕，獭髓对鸾胶。宜久敬，莫轻抛。一气对同胞。祭遵甘布被，张禄念绨袍。花径风来逢客访，柴扉月到有僧敲。夜雨园中，一颗不雕王子柰；秋风江上，三重曾卷杜公茅。",
"衙对舍，廪对庖。玉磬对金铙。竹林对梅岭，起凤对腾蛟。鲛绡帐，兽锦袍。露果对风梢。扬州输橘柚，荆土贡菁茅。断蛇埋地称孙叔，渡蚁编桥识宋郊。好梦难成，蛩响阶前偏唧唧；良明远至，鸡声窗外正嘐嘐。",]},
    {"title":"四豪","src":"https://aod.cos.tx.xmcdn.com/group14/M03/2C/D1/wKgDZFWJtyPBBjzpABEybPgdjbI259.m4a","couplet":["茭对茨，荻对蒿。山麓对江皋。莺簧对蝶板，麦浪对松涛。骐骥足，凤凰毛。美誉对嘉褒。文人窥蠹简，学士书兔毫。马援南征载薏苡，张骞西使进葡萄。辩口悬河，万语千言常亹亹；词源倒峡，连篇累牍自滔滔。",
"梅对杏，李对桃。棫朴对旌旄。酒仙对诗史，德泽对恩膏。悬一榻，梦三刀。拙逸对贵劳。玉堂花烛绕，金殿月轮高。孤山看鹤盘云下，蜀道闻猿向月号。万事从人，有花有酒应自乐；百年皆客，一丘一壑尽吾豪。",
"台对省，署对曹。分袂对同胞。鸣琴对击剑，返辙对回艚。良借箸，操捉刀。香茗对醇醪。涓泉归海大，寸壤积山高。石室客来煎雀舌，画堂宾至饮羊羔。被谪贾生，湘水凄凉吟《鵩鸟》;遭谗屈子，江潭憔悴著离骚。"]},
    {"title":"五歌","src":"https://aod.cos.tx.xmcdn.com/group14/M03/2C/D1/wKgDZFWJtyPBBjzpABEybPgdjbI259.m4a","couplet":["微对巨，少对多。直干对平柯。蜂媒对蝶使，雨笠对烟蓑。眉淡扫，面微酡。妙舞对清歌。轻衫裁夏葛，薄袂剪春罗。将相兼行唐李靖，霸王杂用汉萧何。月本阴精，岂有羿妻曾窃药；星为夜宿，浪传织女漫投梭。",
"慈对善，虐对苛。缥缈对婆娑。长杨对细柳，嫩蕊对寒莎。追风马，挽日戈。玉液对金波。紫诏衔丹凤，黄庭换白鹅。画角江城梅作调，兰舟野渡竹为歌。门外雪飞，错认空中飘柳絮；岩边瀑响，误疑天半落银河。",
"松对竹，荇对荷。薜荔对藤萝。梯云对步月，樵唱对渔歌。升鼎雉，听经鹅。北海对东坡。吴郎哀废宅，邵子乐行窝。丽水良金皆入冶，昆山美玉总须磨。雨过皇州，琉璃色灿华清瓦；风来帝苑，荷芰香飘太液波。",
"笼对槛，巢对窝。及第对登科。冰清对玉润，地利对人和。韩擒虎，荣驾鹅。青女对素娥。破头朱泚笏，折齿谢鲲梭。留客酒杯应恨少，动人诗句不须多。绿野凝烟，但听村前双牧笛；沧江积雪，惟看滩上一渔蓑。"]},
    {"title":"六麻","src":"https://aod.cos.tx.xmcdn.com/group14/M03/2C/D1/wKgDZFWJtyPBBjzpABEybPgdjbI259.m4a","couplet":["清对浊，美对嘉。鄙吝对矜夸。花须对柳眼，屋角对檐牙。志和宅，博望槎。秋实对春华。乾炉烹白雪，坤鼎炼丹砂。深宵望冷沙场月，绝塞听残野戍笳。满院松风，钟声隐隐为僧舍；半窗花月，锡影依依是道家。",
"雷对电，雾对霞。蚁阙对蜂衙。寄梅对怀橘，酿酒对烹茶。宜男草，益母花。杨柳对蒹葭。班姬辞帝辇，蔡琰泣胡笳。舞榭歌楼千万户，竹篱茅舍两三家。珊枕半床，月明时梦飞塞外；银筝一曲，花落处人在天涯。",
"圆对缺，正对斜。笑语对咨嗟。沈腰对潘鬓，孟笋对卢茶。百舌鸟，两头蛇。帝里对仙家。尧仁敷率土，舜德被流沙。桥上授书曾纳履，壁间题句已笼纱。远塞迢迢，露碛风沙何可极；长沙渺渺，雪涛烟浪信无涯。",
"疏对密，朴对华。义鹘对慈鸦。鹅群对雁阵，白苎对黄麻。读三到，吟八叉。肃静对喧哗。围棋兼把钓，沉李并浮瓜。羽客片时能煮石，狐禅千劫似蒸沙。党尉粗豪，金帐笼香斟美酒；陶生清逸，银铛融雪啜团茶。"]},
    {"title":"七阳","src":"https://aod.cos.tx.xmcdn.com/group14/M03/2C/D1/wKgDZFWJtyPBBjzpABEybPgdjbI259.m4a","couplet":["台对阁，沼对塘。朝雨对夕阳。游人对隐士，谢女对秋娘。三寸舌，九回肠。玉液对琼浆。秦皇照胆镜，徐肇返魂香。青萍夜啸芙蓉匣，黄卷时摊薜荔床。元亨利贞，天地一机成化育；仁义礼智，圣贤千古立纲常。",
"红对白，绿对黄。昼永对更长。龙飞对凤舞，锦缆对牙樯。云弁使，雪衣娘。故国对他乡。雄文能徙鳄，艳曲为求凰。九日高峰惊落帽，暮春曲水喜流觞。僧占名山，云绕双林藏古殿；客栖胜地，风飘落叶响空廊。",
"衰对壮，弱对强。艳饰对新妆。御龙对司马，破竹对穿杨。读班马，识求羊。水色对山光。仙棋藏绿橘，客枕梦黄梁。池草入诗因有梦，海棠带恨为无香。风起画堂，帘箔影翻青荇沼；月斜金井，辘轳声度碧梧墙。",
"臣对子，帝对王。日月对风霜。乌台对紫府，蔀屋对岩廊。香山社，昼锦堂。雪牖对云房。芬椒涂内壁，文杏饰高梁。贫女幸分东壁影，幽人高卧北窗凉。绣阁探春，丽日半笼青镜色；水亭醉夏，薰风常透碧筒香。"]},
    {"title":"八庚","src":"https://aod.cos.tx.xmcdn.com/group14/M03/2C/D1/wKgDZFWJtyPBBjzpABEybPgdjbI259.m4a","couplet":["形对貌，色对声。夏邑对周京。江云对渭树，玉磬对银筝。人老老，我卿卿。晓燕对春莺。玄霜舂玉杵，白露贮金茎。贾客君山秋弄笛，仙人缑岭夜吹笙。帝业独兴，尽道汉高能用将；父书空读，谁言赵括善知兵。",
"功对业，性对情。月上对云行。乘龙对附骥，阆苑对蓬瀛。春秋笔，月旦评。东作对西成。隋珠光照乘，和璧价连城。三箭三人唐将勇，一琴一鹤赵公清。汉帝求贤，诏访严滩逢故旧；宋廷优老，年尊洛社重耆英。",
"昏对旦，晦对明。久雨对新晴。蓼湾对花港，竹友对梅兄。黄石叟，丹丘生。犬吠对鸡鸣。暮山云外断，新水月中平。半榻清风宜午梦，一犁好雨趁春耕。王旦登庸，误我十年迟作相；刘羵下第，愧他多士早成名。"]},
    {"title":"九青","src":"https://aod.cos.tx.xmcdn.com/group14/M03/2C/D1/wKgDZFWJtyPBBjzpABEybPgdjbI259.m4a","couplet":["庚对甲，巳对丁。魏阙对彤庭。梅妻对鹤子，珠箔对银屏。鸳浴沼，鹭飞汀。鸿雁对鹡（鴒）。人间寿者相，天上老人星。八月好修攀桂斧，三春须系护花铃。江阁秋登，一水净连天际碧；石栏晓倚，群山秀向雨余青。",
"危对乱，泰对宁。纳陛对趋庭。金盘对玉箸，泛梗对浮萍。群玉圃，众芳亭。旧典对新型。骑牛闲读史，牧豕自横经。秋首田中禾颖重，春余园内菜花馨。旅次凄凉，塞月江风皆惨淡；筵前欢笑，燕歌赵舞独娉婷。"]},
    {"title":"十蒸","src":"https://aod.cos.tx.xmcdn.com/group14/M03/2C/D1/wKgDZFWJtyPBBjzpABEybPgdjbI259.m4a","couplet":["蘋对蓼，芡对菱。雁弋对鱼罾。齐纨对鲁缟，蜀锦对吴绫。星渐没，日初升。九聘对三征。萧何曾作吏，贾岛昔为僧。贤人视履循规矩，大斧挥斤按准绳。野渡春风，人喜乘潮移酒舫；江天暮雨，客愁隔岸对渔灯。",
"谈对吐，谓对称。冉闵对颜曾。侯嬴对伯嚭，祖逖对孙登。抛白纻，宴红绫。胜友对良朋。争名如逐鹿，谋利似趋蝇。仁杰姨惭周不仕，王陵母识汉方兴。句写穷愁，浣花寄迹传工部；诗吟变乱，凝碧伤心叹右丞。"]},
    {"title":"十一尤","src":"https://aod.cos.tx.xmcdn.com/group14/M03/2C/D1/wKgDZFWJtyPBBjzpABEybPgdjbI259.m4a","couplet":["荣对辱，喜对忧。缱绻对绸缪。吴娃对越女，野马对沙鸥。茶解渴，酒消愁。白眼对苍头。马迁修史记，孔子作春秋。莘野耕夫闲举耜，磻溪渔父晚垂钩。龙马游河，羲圣因图而画卦；神龟出洛，禹王取法以明畴。",
"冠对履，舄对裘。院小对庭幽。面墙对膝地，错智对良筹。孤嶂耸，大江流。芳泽对园丘。花潭来越唱，柳屿起吴讴。莺懒燕忙三月雨，蛩摧蝉退一天秋。钟子听琴，荒径入林山寂寂；谪仙捉月，洪涛接岸水悠悠。",
"鱼对鸟，鸽对鸠。翠馆对红楼。七贤对三友，爱日对悲秋。虎类狗，蚁如牛。列辟对诸侯。陈唱临春乐，隋歌清夜游。空中事业麒麟阁，地下文章鹦鹉洲。旷野平原，猎士马蹄轻似箭；斜风细雨，牧童牛背稳如舟。"]},
    {"title":"十二侵","src":"https://aod.cos.tx.xmcdn.com/group14/M03/2C/D1/wKgDZFWJtyPBBjzpABEybPgdjbI259.m4a","couplet":["歌对曲，啸对吟。往古对来今。山头对水面，远浦对遥岑。勤三上，惜寸阴。茂树对平林。卞和三献玉，杨震四知金。青皇风暖催芳草，白帝城高急暮砧。绣虎雕龙，才子窗前挥彩笔；描鸾刺凤，佳人帘下度金针。",
"登对眺，涉对临。瑞雪对甘霖。主欢对民乐，交浅对言深。耻三战，乐七擒。顾曲对知音。大车行槛槛，驷马聚骎骎。紫电青虹腾剑气，高山流水识琴心。屈子怀君，极浦吟风悲泽畔；王郎忆友，扁舟卧雪访山阴。"]},
    {"title":"十三覃","src":"https://aod.cos.tx.xmcdn.com/group14/M03/2C/D1/wKgDZFWJtyPBBjzpABEybPgdjbI259.m4a","couplet":["宫对阙，座对龛。水北对天南。蜃楼对蚁郡，伟论对高谈。遴杞梓，树楩楠。得一对函三。八宝珊瑚枕，双珠玳瑁簪。萧王待士心惟赤，卢相欺君面独蓝。贾岛诗狂，手拟敲门行处想；张颠草圣，头能濡墨写时酣。",
"闻对见，解对谙。三橘对双柑。黄童对白叟，静女对奇男。秋七七，径三三。海色对山岚。鸾声何哕哕，虎视正眈眈。仪封疆吏知尼父，函谷关人识老聃。江相归池，止水自盟真是止；吴公作宰，贪泉虽饮亦何贪。"]},
    {"title":"十四盐","src":"https://aod.cos.tx.xmcdn.com/group14/M03/2C/D1/wKgDZFWJtyPBBjzpABEybPgdjbI259.m4a","couplet":["宽对猛，冷对炎。清直对尊严。云头对雨脚，鹤发对龙髯。风台谏，肃堂廉。保泰对鸣谦。五湖归范蠡，三径隐陶潜。一剑成功堪佩印，百钱满卦便垂帘。浊酒停杯，容我半酣愁际饮；好花傍座，看他微笑悟时拈。",
"连对断，减对添。淡泊对安恬。回头对极目，水底对山尖。腰袅袅，手纤纤。凤卜对鸾占。开田多种粟，煮海尽成盐。居同九世张公艺，恩给千人范仲淹。箫弄凤来，秦女有缘能跨羽；鼎成龙去，轩臣无计得攀髯",
"人对己，爱对嫌。举止对观瞻。四知对三语，义正对辞严。勤雪案，课风檐。漏箭对书笺。文繁归獭祭，体艳别香奁。昨夜题梅更一字，早春来燕卷重帘。诗以史名，愁里悲歌怀杜甫；笔经人索，梦中显晦老江淹。"]},
    {"title":"十五咸","src":"https://aod.cos.tx.xmcdn.com/group14/M03/2C/D1/wKgDZFWJtyPBBjzpABEybPgdjbI259.m4a","couplet":["栽对植，薙对芟。二伯对三监。朝臣对国老，职事对官衔。鹿麌麌，兔毚毚。启牍对开缄。绿杨莺睍睆，红杏燕呢喃。半篱白酒娱陶令，一枕黄粱度吕岩。九夏炎飙，长日风亭留客骑；三冬寒冽，漫天雪浪驻征帆。",
"梧对竹，柏对杉。夏濩对韶咸。涧瀍对溱洧，巩洛对崤函。藏书洞，避诏岩。脱俗对超凡。贤人羞献媚，正士嫉工谗。霸越谋臣推少伯，佐唐藩将重浑瑊。邺下狂生，羯鼓三挝羞锦袄；江州司马，琵琶一曲湿青衫。",
"袍对笏，履对衫。匹马对孤帆。琢磨对雕镂，刻划对镌镵。星北拱，日西衔。卮漏对鼎馋。江边生桂若，海外树都咸。但得恢恢存利刃，何须咄咄达空函。彩凤知音，乐典后夔须九奏；金人守口，圣如尼父亦三缄。"]},
]

class localStorageManager{
    set(obj){        
        let a=JSON.stringify(obj);
        localStorage.setItem(localStorageKey,a)
    }
    get(){     
        let a=localStorage.getItem(localStorageKey)   
        return JSON.parse(a)
    }
}
const LSM=new localStorageManager();
if(LSM.get(localStorageKey)===null){
      LSM.set(coupletArr)
}

class App extends React.Component{
    constructor(){
        super();
        this.state={
            couplets:LSM.get(localStorageKey),
            showDialog:false,
            dialogType:''
           // currentCouplet:LSM.get(localStorageKey)[0].title
        };
        this.showOnClick=this.showOnClick.bind(this);
        this.showCouplet=this.showCouplet.bind(this);
        this.deleteCouplet=this.deleteCouplet.bind(this);
        this.toggleDialogDisplay=this.toggleDialogDisplay.bind(this);
        this.defineDialogType=this.defineDialogType.bind(this);
        this.populateFormData=this.populateFormData.bind(this);
        this.editCouplet=this.editCouplet.bind(this);
        this.addCouplet=this.addCouplet.bind(this);
        this.getCoupletTitleList=this.getCoupletTitleList.bind(this);
        
    }

    componentDidMount(){
    let couplets=LSM.get(localStorageKey);
    let couplet=couplets[0].title;
    this.setState({
        currentCouplet:couplet
    })
    }  
      
    showOnClick(e){
        let currentCouplet=e.target.innerText;
        this.showCouplet(currentCouplet)
    }
    showCouplet(couplet){
        this.setState({
            currentCouplet:couplet
        })
    }

    getCoupletTitleList(){
        let couplets=LSM.get(localStorageKey);
        let allCoupletTitle=[];
        couplets.map(couplet=>allCoupletTitle.push(couplet.title));
        return allCoupletTitle;
    }

    deleteCouplet(e){
        if(confirm('Are you sure you want to delete "'+e.currentTarget.value+'" from the Couplet Box?')){
             let couplets=this.state.couplets;
             couplets=couplets.filter(obj=>{
                return obj.title !== e.currentTarget.value;
            })
            
            let tabToFocus;
            let coupletTitleList=this.getCoupletTitleList();
            coupletTitleList.indexOf(e.currentTarget.value)>=1?
            tabToFocus=coupletTitleList[coupletTitleList.indexOf(e.currentTarget.value)-1]:
            tabToFocus=coupletTitleList[1];
            this.showCouplet(tabToFocus);
           
            LSM.set(couplets);
            this.setState({couplets:couplets})
            console.log(couplets)
        }
    }
    
    populateFormData(str){
        if(str==='') return
        else{
            let couplet;
            for(let i=0;i<this.state.couplets.length;i++){
                if(this.state.couplets[i].title===str){
                    couplet=this.state.couplets[i]
                }
            }
            setTimeout(()=>{
                document.getElementById("areaOne").value=couplet.title;
                document.getElementById("areaTwo").value=couplet.couplet.join('\\\n\n');
                this.setState({editThis:couplet.title})
            },10)
        }
    }

    toggleDialogDisplay(e){
        let indicator=e.currentTarget.title!==undefined?e.currentTarget.title:'';
        this.setState({
            showDialog:!this.state.showDialog,
            dialogType:indicator
        });
        let val=e.currentTarget.value!==undefined?e.currentTarget.value:'';
        this.populateFormData(val);
    }
    
    defineDialogType(){
        if(this.state.dialogType==="Add couplet"){
            this.addCouplet()
        }else{
            this.editCouplet()
        }
    }

    editCouplet(){
        let couplets=this.state.couplets;
        couplets=couplets.filter(obj=>{
            return obj.title !== this.state.editThis
        });
        LSM.set(couplets);             

        this.addCouplet();
    }

    addCouplet(){
        let couplets=LSM.get(localStorageKey);
        let coupletTitleList=this.getCoupletTitleList();
        let newCouplet={
            'title':document.getElementById("areaOne").value,
            'couplet':document.getElementById("areaTwo").value.split('\\')
        }
        if(newCouplet.title===''){
            alert('Your couplet must have a title')
        }else if(coupletTitleList.indexOf(newCouplet.title)!==-1){
            alert(`${newCouplet.title} has already been added to the Couplet box`)
        }else{
            couplets.push(newCouplet);
            LSM.set(couplets);
            setTimeout(() => {
            this.showCouplet(newCouplet.title)
            }, 10);
            this.setState({
            couplets:couplets,
            showDialog:!this.state.showDialog
            })}
       
    }
    
    render(){
        let dialogBox;
        if(this.state.showDialog){
            dialogBox=React.createElement(Dialog,{
                dialogType:this.state.dialogType,
                handleSubmit:this.defineDialogType,
                handleClose:this.toggleDialogDisplay
            })
        }
        return(
            React.createElement("div",{className:"couple-wrap"},
                dialogBox,
                React.createElement(CoupletIndexGather,{
                    handleClick:this.showOnClick,
                    contents:this.state.couplets}
                ),
                React.createElement(CoupletPane,{
                    contents:this.state.couplets,
                    displayCouplet:this.state.currentCouplet,
                    handleDelete:this.deleteCouplet,
                    handleEdit:this.toggleDialogDisplay}
                ),
                React.createElement("div",null,
                    React.createElement("button",{
                        title:"Add couplet",
                        onClick:this.toggleDialogDisplay},
                       React.createElement("i",{className:"iconfont icon-icon-test"})))                
                ))
    }
}

class CoupletIndexGather extends React.Component{
    render(){
        let couplets=this.props.contents;
        let item=couplets.map((couplet,i)=>
            React.createElement("div",{
                onClick:this.props.handleClick,
                className:"couplet-index-item"},
                couplet.title)
        );
        return(React.createElement("div",{id:"coupletIndex"},item))
    }
}

class CoupletPane extends React.Component{
render(){
    let couplets=this.props.contents;
     let displayCouplet;
     for(let i=0;i<couplets.length;i++){
         if(couplets[i].title===this.props.displayCouplet){
            displayCouplet=
            React.createElement("div",{id:"displayCouplet"},
                React.createElement("div",{className:"title-edit-delete"},
                    React.createElement("div",{className:"display-couplet-title"},couplets[i].title),
                    React.createElement("button",{
                        id:"delete",
                        onClick:this.props.handleDelete,
                        title:"Delete couplet",
                        value:couplets[i].title
                    },React.createElement("i",{className:'iconfont icon-shanchu1'})),
                    React.createElement("button",{
                        id:'edit',
                        onClick:this.props.handleEdit,
                        title:"Edit couplet",
                        value:couplets[i].title
                    },React.createElement("i",{className:'iconfont icon-bianji'})),
                   /*  React.createElement("div",null,                        
                        React.createElement("audio",{src:couplets[i].src,controls:"controls",preload:"none"},
                            React.createElement("i",{className:'iconfont icon-yinpin'}),)) */
                ),
                React.createElement("div",{className:"display-couplet-content"},
                    React.createElement("ul",null,couplets[i].couplet.map((item)=>
                        React.createElement("li",null,item)))))
         }

     }
     

     return(React.createElement("div",null,displayCouplet))
}
}

class Dialog extends React.Component{
    render(){
        return(React.createElement("div",{className:"dialog-box"},
            React.createElement("h4",null,this.props.dialogType),
            React.createElement("h5",null,"title"),
            React.createElement("textarea",{id:"areaOne",rows:"1",placeholder:"Couplet title"}),
            React.createElement("h5",null,"couplet"),
            React.createElement("textarea",{id:"areaTwo",placeholder:'Separate each step with a "\\"'}),
            React.createElement("br",null),
            React.createElement("button",{onClick:this.props.handleSubmit},"Submit"),
            React.createElement("button",{onClick:this.props.handleClose},"Close")))
    }
}


ReactDOM.render(React.createElement(App,null),document.getElementById('root'))