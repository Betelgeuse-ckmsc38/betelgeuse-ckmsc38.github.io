const Body = document.body;

const time = [251300, 251328, 251346, 251406, 251421, 251439, 251458, 251515, 251532, 251600, 261300, 261340, 261400, 261420, 261440, 261500, 261505, 261525, 261545, 261610, 261035];
const timeII = [251300, 251328, 251340, 251355, 251408, 251428, 251444, 251458, 251515, 251600,]
const list = ['CK', 'CK',
  'B1', 'I1',
  'B2', 'I2',
  'B3', 'I3',
  'B4', 'G1',
  // '--', '--',
  'P1', 'M1',
  'P2', 'M2',
  'CH1', 'M3',
  'CH2', 'CH3',
  'CK', 'CK',
  'CK', 'CK',
  'B5', 'I4',
  'B6', 'I5',
  'B7', 'I6',
  'B8', 'G2',
  // '--', '--',
  'P3', 'M4',
  'P4', 'M5',
  'CH4', 'M6',
  'CK', 'CK',
  'CK', 'CK'
];

const list2 = ['建中數資', '建中數資',
  '李奕賢、蔡尚展', '林子安、張維傑、陳瑋能',
  '江履方', '葉又銘、黃建碩、洪承岳',
  '張玠、袁廣、王柏涵', '金哲安',
  '曾翊豪、林哲輝、邱品耀', '黃琮堡',
  // '--', '--',
  '黃紹凱、楊玠霆、楊祐宇', '曹丞豐、蔡承澔',
  '黃昱翔、陳建宇、李隆佑', '林品齊',
  '王粲閔、周埕豪', '劉曜瑋、謝宇叡',
  '柯冠辰、彭首勳', '陳柏翰、陳彥瑋',
  '建中數資', '建中數資',
  '建中數資', '建中數資',
  '王鴻銘', '林昇甫、莊詔允',
  '陳皓文、黃冠瑾', '邱鼎傑',
  '吳承俊、張睿恆', '黃庭躍',
  '林士軒、楊智翔、黃書寬', '涂宇軒',
 // '--', '--',
  '駱奕、張祐維、張崴智', '張廷岳、黃晨語',
  '許博堯、陳冠璋、韓家恆', '張竣智',
  '張嘉元、蔡承恩', '林偉宸、何睿宇',
  '建中數資', '建中數資',
  '建中數資', '建中數資',];

const list3 = ['開幕式', '開幕式',
  '學習與記憶相關疾病腦指蛋白的早期偵測與開發', 'A Genetic Algorithm Approach to 3D Maze Generation',
  'Functional Characterization of Hog1/Ire1-mediated Syt1 phosphorylation upon TM-induced ER stress', '盲人眼鏡',
  '利用果蠅成蟲腹部解剖系統探討運動神經功能老化的分子機制', '智慧冰箱手機應用程式',
  '自噬作用、 尿素循環參與在降血脂藥物誘導之防護作用', '機器學習在音樂生成的應用',
  //'中場休息', '中場休息',
  'On the Properties of the Magnetic Field and Magnetic Force Produced by Combinations of Round Magnets', '兩動點分點軌跡之探究',
  '影響離子液體電容電容的因素探討', '撿紅點特殊情況的探討',
  '以巨量資料庫分析闡明聽力損失與精神疾病間的關聯', '過橋問題',
  'Applying Ultraviolet-curing Gel to the Encapsulation of Perovskite Solar Cells', '利用蛋白質製備酸鹼應答的藥物傳遞系統',
  '閉幕式', '閉幕式',
  '開幕式', '開幕式',
  '利用VPM和VPL中的c-fos蛋白表現探討慢性痠痛產生的機制', '機器學習在音樂生成的應用',
  'Elucidation of the Role of GFAT1 in the Growth of Pancreatic Ductal Carcinoma and Development of Novel GFAT1 Inhibitors', '人臉濾鏡生成',
  '對在熱帶火蟻上發現之新型濃核病毒進行的研究與野外調查', '利用機器學習規劃火車路網',
  '探討阿滋海默症中錯誤摺疊蛋白對於神經微膠細胞的影響', '球狀星團與X光的研究',
 // '中場休息', '中場休息',
  '妙妙圈垂直自由落下漂浮時間之探討', '二維平面曲線之內接雙切圓的研究',
  '可重構式電磁超構表面研究暨無線通訊應用', '畢氏定理變形記',
  '太陽能轉換熱能之凝膠應用於過濾水之研究', '平面上兩點到二次曲線的最短距離和',
  '閉幕式', '閉幕式',
  '感謝您的收看', '感謝您的收看'];

var tem = document.querySelectorAll('.ptable td');
var titles = document.querySelectorAll('.ptable th');
var Now, Past;
var nextToCome = 0, ntcII = 0;

setInterval(cockado, 1000);

Body.onload = change(1);

function cockado() {
  Now = new Date();
  Now = `${Now.getDate()}${('0' + Now.getHours()).slice(-2)}${('0' + Now.getMinutes()).slice(-2)}`;
  // console.log(`It is now ${Now}`);
  if (Now != Past) {
    change(0);
  }
  Past = Now;
}


function change(IST) {
  if (IST) {
    Now = new Date();
    Now = `${Now.getDate()}${('0' + Now.getHours()).slice(-2)}${('0' + Now.getMinutes()).slice(-2)}`;
  }
  if (Now < 250000 || Now > 262359) {
    tem[0].innerHTML = '還剩';
    tem[1].innerHTML = 25 - Math.floor(Now / 10000);
    tem[2].innerHTML = '天';
    tem[3].innerHTML = 'CKMSC';
    tem[4].innerHTML = '成果發表會';
    tem[5].innerHTML = "一定要來喔&#x1F618";
  };
  if (time[nextToCome] < Now) {
    while (time[nextToCome] < Now) {
      nextToCome++;
    }
    tem[0].innerHTML = list[nextToCome * 2];
    tem[1].innerHTML = list2[nextToCome * 2];
    tem[2].innerHTML = list3[nextToCome * 2];
  }
  if(timeII[ntcII] < Now) {
    while (timeII[ntcII] < Now) {
        ntcII++;
    }
    tem[3].innerHTML = list[ntcII * 2 + 1];
    tem[4].innerHTML = list2[ntcII * 2 + 1];
    tem[5].innerHTML = list3[ntcII * 2 + 1];
  }
  if(Now == 251300 || (Now >= 251300 && IST)){
    let ifr = Body.querySelector(".wait");
    ifr.setAttribute("src", "https://www.youtube.com/embed/bscCx0Zg2X0");
  }
}