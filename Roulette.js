

function onPageLoad() {
  // ここにページを読み込んだ時に実行したいJavaScriptコードを書く
  img.src;

}

//GitHubボタンを押したら新しいページに飛ぶ
function GitHub_ButtonPush(){
  window.open("https://github.com/2k2e2n/Roulette_online");
}


//ボタン連打を防ぐプログラム
  function changeImageSource() {
  if (options.length === 0)
  { 
    alert("マップを１つ以上選択してください");
    console.log("options is empty");
  } else 
  {


    const button = document.getElementById("StartButton");



    if (!button.disabled) 
      {
        button.disabled = true;

  
    
      //変更する画像を取得するプログラム
      var Resultimg = document.getElementById('Resultimage');

      let randomIndex = Math.floor(Math.random() * options.length);
      let selectedMap = options[randomIndex];
      console.log(selectedMap);

      if (selectedMap == "ASCENT") {
        Resultimg.src = 'images/Resultimages/ASCENT.jpg';
      }
      if (selectedMap == "BIND") {
        Resultimg.src = 'images/Resultimages/BIND.jpg';
      }
      if (selectedMap == "BREEZE") {
        Resultimg.src = 'images/Resultimages/BREEZE.jpg';
      }
      if (selectedMap == "FRACTURE") {
        Resultimg.src = 'images/Resultimages/FRACTURE.jpg';
      }
      if (selectedMap == "HAVEN") {
        Resultimg.src = 'images/Resultimages/HAVEN.jpg';
      }
      if (selectedMap == "ICEBOX") {
        Resultimg.src = 'images/Resultimages/ICEBOX.jpg';
      }
      if (selectedMap == "LOTUS") {
        Resultimg.src = 'images/Resultimages/LOTUS.jpg';
      }
      if (selectedMap == "PEARL") {
        Resultimg.src = 'images/Resultimages/PEARL.jpg';
      }
      if (selectedMap == "SPLIT") {
        Resultimg.src = 'images/Resultimages/SPLIT.jpg';
      }
      if (selectedMap == "SUNSET") {
        Resultimg.src = 'images/Resultimages/SUNSET.jpg';
      }

      const Resultimg_Anim = document.getElementById('Resultimage');
      gsap.from(Resultimg_Anim, { opacity: 0, duration: 1, delay: 0.1 });
    

      setTimeout(function() {
        button.disabled = false;
      }, 1500); // ここでは3秒後にボタンを有効化する例です
    }    
  }
}

  // トグルボタンの初期状態を設定（初期はtrue）
  let ASCENT_togglebutton = true;
  let BIND_togglebutton = true;
  let BREEZE_togglebutton = true;
  let FRACTURE_togglebutton = true;
  let HAVEN_togglebutton = true;
  let ICEBOX_togglebutton = true;
  let LOTUS_togglebutton = true;
  let PEARL_togglebutton = true;
  let SPLIT_togglebutton = true;

  var options = ['ASCENT', 'BIND', 'BREEZE','FRACTURE', 'HAVEN', 'ICEBOX','LOTUS','PEARL', 'SPLIT', 'SUNSET'];


  // トグルボタンの処理（アセント
function ASCENT_ButtonPush() {
  var searchElement = "ASCENT"; //アセントという文字を検索し、配列に追加したり消したりする
  var index = options.indexOf(searchElement);
  const image = document.getElementById('ASCENT_Buttonid'); //ボタンのidをコピペする
  if (index !== -1) 
  {
    // ASCENTが見つかった場合、ASCENTを削除する
    options.splice(index, 1);
    console.log("deleted_ASCENT");
    image.style.filter = 'saturate(0)';//ボタンの彩度を0にする
  } else {
    // ASCENTが見つからなかった場合、ASCENTを追加する
    options.push(searchElement);
    console.log("added_ASCENT");  
    image.style.filter = 'saturate(1)'; //ボタンの彩度を100にする
  }
  gsap.fromTo(image, { duration: 1, scale: 0.95 }, { duration: 0.3, scale: 1 });
}

function BIND_ButtonPush() {
  var searchElement = "BIND"; //バインドという文字を検索し、配列に追加したり消したりする
  var index = options.indexOf(searchElement);
  const image = document.getElementById('BIND_Buttonid'); //ボタンのidをコピペする
  if (index !== -1) 
  {
    // BINDが見つかった場合、ASCENTを削除する
    options.splice(index, 1);
    console.log("deleted_BIND");
    image.style.filter = 'saturate(0)';//ボタンの彩度を0にする
  } else {
    // ASCENTが見つからなかった場合、ASCENTを追加する
    options.push(searchElement);
    console.log("added_BIND");  
    image.style.filter = 'saturate(1)'; //ボタンの彩度を100にする
  }
  gsap.fromTo(image, { duration: 1, scale: 0.95 }, { duration: 0.3, scale: 1 });
}

function BREEZE_ButtonPush() {
  var searchElement = "BREEZE"; //ブリーズという文字を検索し、配列に追加したり消したりする
  var index = options.indexOf(searchElement);
  const image = document.getElementById('BREEZE_Buttonid'); //ボタンのidをコピペする
  if (index !== -1) 
  {
    // BREEZEが見つかった場合、BREEZEを削除する
    options.splice(index, 1);
    console.log("deleted_BREEZE");
    image.style.filter = 'saturate(0)';//ボタンの彩度を0にする
  } else {
    // BREEZEが見つからなかった場合、BREEZEを追加する
    options.push(searchElement);
    console.log("added_BREEZE");  
    image.style.filter = 'saturate(1)'; //ボタンの彩度を100にする
  }
  gsap.fromTo(image, { duration: 1, scale: 0.95 }, { duration: 0.3, scale: 1 });
}

function FRACTURE_ButtonPush() {
  var searchElement = "FRACTURE"; //フラクチャーという文字を検索し、配列に追加したり消したりする
  var index = options.indexOf(searchElement);
  const image = document.getElementById('FRACTURE_Buttonid'); //ボタンのidをコピペする
  if (index !== -1) 
  {
    // FRACTUREが見つかった場合、FRACTUREを削除する
    options.splice(index, 1);
    console.log("deleted_FRACTURE");
    image.style.filter = 'saturate(0)';//ボタンの彩度を0にする
  } else {
    // FRACTUREが見つからなかった場合、FRACTUREを追加する
    options.push(searchElement);
    console.log("added_FRACTURE");  
    image.style.filter = 'saturate(1)'; //ボタンの彩度を100にする
  }
  gsap.fromTo(image, { duration: 1, scale: 0.95 }, { duration: 0.3, scale: 1 });
}

function HAVEN_ButtonPush() {
  var searchElement = "HAVEN"; //フラクチャーという文字を検索し、配列に追加したり消したりする
  var index = options.indexOf(searchElement);
  const image = document.getElementById('HAVEN_Buttonid'); //ボタンのidをコピペする
  if (index !== -1) 
  {
    // HAVENが見つかった場合、HAVENを削除する
    options.splice(index, 1);
    console.log("deleted_HAVEN");
    image.style.filter = 'saturate(0)';//ボタンの彩度を0にする
  } else {
    // HAVENが見つからなかった場合、HAVENを追加する
    options.push(searchElement);
    console.log("added_HAVEN");  
    image.style.filter = 'saturate(1)'; //ボタンの彩度を100にする
  }
  gsap.fromTo(image, { duration: 1, scale: 0.95 }, { duration: 0.3, scale: 1 });
}

function ICEBOX_ButtonPush() {
  var searchElement = "ICEBOX"; //フラクチャーという文字を検索し、配列に追加したり消したりする
  var index = options.indexOf(searchElement);
  const image = document.getElementById('ICEBOX_Buttonid'); //ボタンのidをコピペする
  if (index !== -1) 
  {
    // ICEBOXが見つかった場合、ICEBOXを削除する
    options.splice(index, 1);
    console.log("deleted_ICEBOX");
    image.style.filter = 'saturate(0)';//ボタンの彩度を0にする
  } else {
    // ICEBOXが見つからなかった場合、ICEBOXを追加する
    options.push(searchElement);
    console.log("added_ICEBOX");  
    image.style.filter = 'saturate(1)'; //ボタンの彩度を100にする
  }
  gsap.fromTo(image, { duration: 1, scale: 0.95 }, { duration: 0.3, scale: 1 });
}

function LOTUS_ButtonPush() {
  var searchElement = "LOTUS"; //フラクチャーという文字を検索し、配列に追加したり消したりする
  var index = options.indexOf(searchElement);
  const image = document.getElementById('LOTUS_Buttonid'); //ボタンのidをコピペする
  if (index !== -1) 
  {
    // LOTUSが見つかった場合、LOTUSを削除する
    options.splice(index, 1);
    console.log("deleted_LOTUS");
    image.style.filter = 'saturate(0)';//ボタンの彩度を0にする
  } else {
    // LOTUSが見つからなかった場合、LOTUSを追加する
    options.push(searchElement);
    console.log("added_LOTUS");  
    image.style.filter = 'saturate(1)'; //ボタンの彩度を100にする
  }
  gsap.fromTo(image, { duration: 1, scale: 0.95 }, { duration: 0.3, scale: 1 });
}

function PEARL_ButtonPush() {
  var searchElement = "PEARL"; //フラクチャーという文字を検索し、配列に追加したり消したりする
  var index = options.indexOf(searchElement);
  const image = document.getElementById('PEARL_Buttonid'); //ボタンのidをコピペする
  if (index !== -1) 
  {
    // PEARLが見つかった場合、PEARLを削除する
    options.splice(index, 1);
    console.log("deleted_PEARL");
    image.style.filter = 'saturate(0)';//ボタンの彩度を0にする
  } else {
    // PEARLが見つからなかった場合、PEARLを追加する
    options.push(searchElement);
    console.log("added_PEARL");  
    image.style.filter = 'saturate(1)'; //ボタンの彩度を100にする
  }
  gsap.fromTo(image, { duration: 1, scale: 0.95 }, { duration: 0.3, scale: 1 });
}

function SPLIT_ButtonPush() {
  var searchElement = "SPLIT"; //フラクチャーという文字を検索し、配列に追加したり消したりする
  var index = options.indexOf(searchElement);
  const image = document.getElementById('SPLIT_Buttonid'); //ボタンのidをコピペする
  if (index !== -1) 
  {
    // SPLITが見つかった場合、SPLITを削除する
    options.splice(index, 1);
    console.log("deleted_SPLIT");
    image.style.filter = 'saturate(0)';//ボタンの彩度を0にする
  } else {
    // SPLITが見つからなかった場合、SPLITを追加する
    options.push(searchElement);
    console.log("added_SPLIT");  
    image.style.filter = 'saturate(1)'; //ボタンの彩度を100にする
  }
  gsap.fromTo(image, { duration: 1, scale: 0.95 }, { duration: 0.3, scale: 1 });
}

function SUNSET_ButtonPush() {
  var searchElement = "SUNSET"; //フラクチャーという文字を検索し、配列に追加したり消したりする
  var index = options.indexOf(searchElement);
  const image = document.getElementById('SUNSET_Buttonid'); //ボタンのidをコピペする
  if (index !== -1) 
  {
    // SUNSETが見つかった場合、SUNSETを削除する
    options.splice(index, 1);
    console.log("deleted_SUNSET");
    image.style.filter = 'saturate(0)';//ボタンの彩度を0にする
  } else {
    // SUNSETが見つからなかった場合、SUNSETを追加する
    options.push(searchElement);
    console.log("added_SUNSET");  
    image.style.filter = 'saturate(1)'; //ボタンの彩度を100にする
  }
  gsap.fromTo(image, { duration: 1, scale: 0.95 }, { duration: 0.3, scale: 1 });
}
