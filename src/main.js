let kyoukaLog = "sonota";
let mondaisuLog = 0;
let nyuryokuran = 0;
let kyouka;
let mondaisu;
let wakusuLog;
let wakusu;
function ketteiButton() {
  // 定義
  mondaisu = parseInt(document.getElementById("mondaisu").value, 10);
  kyouka = document.getElementById("kyouka").value;
  console.log(mondaisu + ", " + kyouka + kyoukaLog);
  if (kyoukaLog != kyouka) {
    document.getElementById("textbox").innerHTML = ``;
    nyuryokuran = 0;
    mondaisuLog = 0;
  }
  if (kyouka == "sugaku") {
    if (mondaisuLog === 0 || kyoukaLog === "sonota") {
      document.getElementById("textbox").innerHTML = `<br><h4 style="margin-bottom: 0px; margin-top: 0px;">
      2乗は^を使ってください　例y²=y^2　使える文字はすべての半角英数字と一部の記号(+など)のみです。詳しくはヘルプをご確認ください
    </h4>`;
    }
    if (mondaisu - mondaisuLog > 0) {
      for (let i = 0; i < mondaisu - mondaisuLog; i++) {
        nyuryokuran += 1;
        let newDiv1 = document.createElement("div");
        newDiv1.id = `nyuryokuwaku${nyuryokuran}`;
        newDiv1.innerHTML = `<div style="display: flex;">
        <span style="font-size: x-large;">${i + 1}.</span>
        <div style="display: flex;" id="inputwaku">
          <input type="text" class="kaitouran" id="answer" placeholder="答えを入力" onKeyup="this.value=this.value.replace(/[^\w\^+-=()<>*]|[:;,]/g,'');" />
        </div>
        <div style="display: flex;">
          <select name="" id="rankazu" onclick="sugakuwakusu(${i});">
            <option value="1">解答欄の数</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <select name="" id="kotaekata">
            <option value="tegaki">手書き</option>
            <option value="sentakua">選択式</option>
          </select>
        </div>
      </div><br>`;
        // DOM に新しく作られた要素とその内容を追加します
        const currentDiv1 = document.getElementById("textbox");
        let child = currentDiv1.appendChild(newDiv1);
      }
    }
    //二次元配列の定義
    for (let x = 0; x < mondaisu; x++) {
      checkedhantei[x] = new Array(5); //配列(array)の各要素に対して、要素数5の配列を作成
    }

    kyoukaLog = kyouka;
    mondaisuLog = mondaisu;
    wakusuLog = Array(mondaisu).fill(1, 0);
    wakusu = Array(mondaisu).fill(1, 0);
    console.log(wakusu + "," + wakusuLog);
    console.log(nyuryokuran);
    console.log(mondaisuLog);
  } else if (kyouka == "sonota") {
    // 繰り返し
    if (mondaisu - mondaisuLog > 0) {
      for (let i = 0; i < mondaisu - mondaisuLog; i++) {
        nyuryokuran += 1;
        let newDiv = document.createElement("div");
        newDiv.id = `nyuryokuwaku${nyuryokuran}`;
        newDiv.innerHTML = `
    <div style="display: flex;">
    <span style="font-size: x-large;">${nyuryokuran}.</span>
    <div style="font-size: larger;">
     <label> a:<input type="checkbox" name="" id="a${nyuryokuran}"
     onclick="checkbox(${nyuryokuran - 1},0)"/></label>

     <label>b:<input type="checkbox" name="" id="b${nyuryokuran}"
      onclick="checkbox(${nyuryokuran - 1},1)"/></label>
      
     <label>c:<input type="checkbox" name=""id="c${nyuryokuran}"
     onclick="checkbox(${nyuryokuran - 1},2)"/></label>

     <label>d:<input type="checkbox" name="" id="d${nyuryokuran}"
     onclick="checkbox(${nyuryokuran - 1},3)" /> </label>
      
     <label>e:<input type="checkbox"name=""id="e${nyuryokuran}"
     onclick="checkbox(${nyuryokuran - 1},4)"/></label>
    </div>
    <br>
    </div>
      `;
        // DOM に新しく作られた要素とその内容を追加します
        const currentDiv = document.getElementById("textbox");
        let child = currentDiv.appendChild(newDiv);
      }
    } else if (mondaisuLog == mondaisu) {
    } else if (mondaisu - mondaisuLog < 0) {
    }
    //二次元配列の定義
    for (let x = 0; x < mondaisu; x++) {
      checkedhantei[x] = new Array(5); //配列(array)の各要素に対して、要素数5の配列を作成
    }
    kyoukaLog = kyouka;
    mondaisuLog = mondaisu;
    console.log(nyuryokuran);
    console.log(mondaisuLog);
  }
}

// 決定ボタンクリック
let ketteiClick = document.getElementById("kettei");
ketteiClick.addEventListener("click", ketteiButton, false);
let outputClick = document.getElementById("output");
outputClick.addEventListener("click", outputcode, false);

let AutoCode = `function sleep(e, n) {var t = 0; s = setInterval(() => { ++t >= e && (clearInterval(s), n && n()); }, 1); } let matu = 1;`;
let AutoCodeLast = "";
function outputcode() {
  //初期化
  if (kyouka == "sugaku") {
    let kaitouran = document.getElementsByTagName("input").length - 1;
    for (let i = 0; i < kaitouran; i++) {
      if (document.getElementById(`kotaekata`)[i].value == "tegaki") {
        for (let j = 0; j < document.getElementsByClassName("kaitouran")[i].value.length; j++) {}
        document.getElementById();
      } else {
      }
    }
  } else if (kyouka == "sonota") {
    AutoCode = `function sleep(e, n) {var t = 0; s = setInterval(() => { ++t >= e && (clearInterval(s), n && n()); }, 1); } let matu = 1;`;
    for (let i = 0; i < nyuryokuran; i++) {
      //選択肢が複数個かどうか
      if (checkedhantei[i].reduce((sum, element) => sum + element, 0) >= 2) {
        for (let j = 0; j <= 4; j++) {
          if (checkedhantei[i][j] == 1) {
            AutoCode = `${AutoCode}
          selectMultiAnswer(${i}, ${j});`;
          }
        }
        AutoCode = `${AutoCode}
      answerMulti();
      nextQuestion(${i}, ${i + 1});
      sleep(neteru, () => {`;
      } else if (checkedhantei[i].reduce((sum, element) => sum + element, 0) == 1) {
        for (let k = 0; k <= 4; k++) {
          if (checkedhantei[i][k] == 1)
            AutoCode = `${AutoCode}
        selectSingleAnswer(${i},${k});`;
        }
        AutoCode = `${AutoCode}
      answerSingle();
      nextQuestion(${i},${i + 1});
      sleep(neteru, () => {`;
      }

      AutoCodeLast = `${AutoCodeLast}});`;
    }
    AutoCode = `${AutoCode}
  ${AutoCodeLast}`;
    AutoCode = AutoCode.replace("\n", "");
    console.log(AutoCode);
  }
}
let checkedhantei = [];
function checkbox(retu, sentaku) {
  let sentakusi = ["a", "b", "c", "d", "e"];
  checkedhantei[retu][sentaku] = document.getElementById(sentakusi[sentaku] + (retu + 1)).checked;
  console.log(checkedhantei);
}

const sugakuwakusu = (id) => {
  wakusu[id] = parseInt(document.querySelectorAll("#rankazu")[id].value, 10);

  if (wakusu[id] - wakusuLog[id] > 0) {
    for (let i = wakusuLog[id]; i < wakusu[id]; i++) {
      console.log("実行");
      let newInput = document.createElement(`input`);
      newInput.id = `${id}.${i}`;
      newInput.placeholder = "答えを入力";
      newInput.setAttribute("onkeyup", 'this.value=this.value.replace(/[^a-z^0-9^+-=()<>*]|[:;,]/g,"")');
      newInput.classList.add("kaitouran");
      const currentDiv = document.querySelectorAll("#inputwaku")[id];
      let child = currentDiv.appendChild(newInput);
      console.log(id);
    }
  } else if (wakusuLog[id] - wakusu[id] > 0) {
    console.log("jikko");
    for (let i = wakusuLog[id] - 1; i > wakusu[id] - 1; i--) {
      document.getElementById(`${id}.${i}`).remove();
      console.log(id);
    }
  }
  wakusuLog[id] = wakusu[id];
};
/*ToDoList　優先度順
終了・outputcode();の完成
　　　・答えの選択肢が一つのときに対応する
　　　・sleep()をどうするか
　　　・現状の案はsleep(neteru, () => {と{);を分離して最後に足す
終了・昔書いたコードだから二次元配列を使う形にする*/
/*
・問題数と同じ数入力欄を用意する
・教科ごとに入力欄を変える
　・数学のみの対応で良さそう 
  　・ベーシックは
  　　<input type="hidden" class="answer-input-hidden" value="6 x - 1 5">
    のvalueを変えればいける
    2乗の書き方は係数 { 文字 } ^ { 何乗か }　例:2a^2-10a=2 { a } ^ { 2 } - 1 0 a
    xyとかは普通にx y
    
    ベーシックの選択はdata-itemidとかが書いてあると頃にclass="selected"をつける
    付け方　document.getElementsByClassName('answer-input-choices-container')[0].firstElementChild.getElementsByTagName('div')[1].setAttribute('class','selected')
    ・パワーアップはテンキーでおｋ
    ・普通の選択もある
　    ・選択式にしてキーパッドかどうかを選ばせる
  ・国語も対応がいる
    普通の選択で１０個まで作る
    並び替えは入れる方はdivを作る並び替えはidを変える
・問題数に正の整数しか入れられないようにする
*/

/*function sleep(e, n) {
  var t = 0,
    s = setInterval(() => {
      ++t >= e && (clearInterval(s), n && n());
    }, 1);
}
let neteru = 1;
  selectMultiAnswer(0, 1),
  selectMultiAnswer(0, 2),
  answerMulti(),
  nextQuestion(0, 1),
  sleep(neteru, () => {
    selectSingleAnswer(1, 2),
      answerSingle(),
      nextQuestion(1, 2),
      sleep(neteru, () => {
        selectSingleAnswer(2, 2),
          answerSingle(),
          nextQuestion(2, 3),
          sleep(neteru, () => {
            selectSingleAnswer(3, 0),
              answerSingle(),
              nextQuestion(3, 4),
              sleep(neteru, () => {
                selectSingleAnswer(4, 1),
                  answerSingle(),
                  nextQuestion(4, 5),
                  sleep(neteru, () => {
                    selectMultiAnswer(5, 0),
                      selectMultiAnswer(5, 1),
                      selectMultiAnswer(5, 3),
                      answerMulti(),
                      nextQuestion(5, 6),
                      sleep(neteru, () => {
                        selectMultiAnswer(6, 0),
                          selectMultiAnswer(6, 1),
                          answerMulti(),
                          nextQuestion(6, 7),
                          sleep(neteru, () => {
                            selectMultiAnswer(7, 0),
                              selectMultiAnswer(7, 3),
                              answerMulti(),
                              nextQuestion(7, 8),
                              sleep(neteru, () => {
                                selectMultiAnswer(8, 0),
                                  selectMultiAnswer(8, 3),
                                  answerMulti(),
                                  nextQuestion(8, 9),
                                  sleep(neteru, () => {
                                    selectSingleAnswer(9, 0),
                                      answerSingle(),
                                      nextQuestion(9, 10),
                                      sleep(neteru, () => {
                                        selectMultiAnswer(10, 1),
                                          selectMultiAnswer(10, 2),
                                          selectMultiAnswer(10, 3),
                                          answerMulti(),
                                          nextQuestion(10, 11),
                                          sleep(neteru, () => {
                                            selectSingleAnswer(11, 1),
                                              answerSingle(),
                                              nextQuestion(11, 12),
                                              sleep(neteru, () => {
                                                selectMultiAnswer(12, 0),
                                                  selectMultiAnswer(12, 3),
                                                  answerMulti(),
                                                  nextQuestion(12, 13),
                                                  sleep(neteru, () => {
                                                    selectSingleAnswer(13, 0),
                                                      answerSingle(),
                                                      nextQuestion(13, 14),
                                                      sleep(neteru, () => {
                                                        selectSingleAnswer(
                                                          14,
                                                          3
                                                        ),
                                                          answerSingle(),
                                                          nextQuestion(14, 15),
                                                          sleep(neteru, () => {
                                                            selectSingleAnswer(
                                                              15,
                                                              3
                                                            ),
                                                              answerSingle(),
                                                              nextQuestion(
                                                                15,
                                                                16
                                                              ),
                                                              sleep(
                                                                neteru,
                                                                () => {
                                                                  selectSingleAnswer(
                                                                    16,
                                                                    0
                                                                  ),
                                                                    answerSingle(),
                                                                    nextQuestion(
                                                                      16,
                                                                      17
                                                                    ),
                                                                    sleep(
                                                                      neteru,
                                                                      () => {
                                                                        selectMultiAnswer(
                                                                          17,
                                                                          0
                                                                        ),
                                                                          selectMultiAnswer(
                                                                            17,
                                                                            2
                                                                          ),
                                                                          answerMulti(),
                                                                          nextQuestion(
                                                                            17,
                                                                            18
                                                                          ),
                                                                          sleep(
                                                                            neteru,
                                                                            () => {
                                                                              selectSingleAnswer(
                                                                                18,
                                                                                1
                                                                              ),
                                                                                answerSingle(),
                                                                                nextQuestion(
                                                                                  18,
                                                                                  19
                                                                                ),
                                                                                sleep(
                                                                                  neteru,
                                                                                  () => {
                                                                                    selectMultiAnswer(
                                                                                      19,
                                                                                      0
                                                                                    ),
                                                                                      selectMultiAnswer(
                                                                                        19,
                                                                                        1
                                                                                      ),
                                                                                      answerMulti(),
                                                                                      nextQuestion(
                                                                                        19,
                                                                                        20
                                                                                      );
                                                                                    cmnDrillStatus.endDrill();
                                                                                  }
                                                                                );
                                                                            }
                                                                          );
                                                                      }
                                                                    );
                                                                }
                                                              );
                                                          });
                                                      });
                                                  });
                                              });
                                          });
                                      });
                                  });
                              });
                          });
                      });
                  });
              });
          });
      });
  });
*/
