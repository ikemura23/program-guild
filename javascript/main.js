// 変数
var year = 30;        // integer型, int型
var name = "名前";     // string型
var boolean = true;   // boolean型 (true,false)
var myNull = null;    // null 値がないことを表す値
var arr = []          // 配列型
var x                 // undefined  未定義値

// 変数は書き換える事ができる
name = "タロウ"

// 変数 配列
var array = [1, 2, 3];
var array = ["あ", "い", "う", "え", "お"];  // 文字もOK
console.log(array[0]) // 0から始まる

// 変数 オブジェクトリテラル

var animal = {
  dog: "犬",
  cat: "猫"
}
console.log(animal);
// console.log(animal["dog"]);
// console.log(animal.dog); // こっちが便利

// 文字列の操作
// 結合
console.log("私は" + year + "歳です。");

// 置き換え


// if
if (year < 20) {
  console.log("未成年です。");
}
else if (year == 20) {
  console.log("二十歳です。");
}
else if (year == 20 && name == 'タロウ') {
  console.log("タロウは二十歳です。");
}
else if (year > 30) {
  console.log("大人");
}
else {
  console.log("何者？");
}

// for
for (i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// for of
for (arr of array) {
  console.log(arr);
}

// メソッド、または関数
function callDog() {
  console.log("ワンちゃんおいで");
}
callDog() // 呼び出し
function callCat() {
  return "猫おいで"
}
console.log(callCat())

// 引数
// console.log(process.argv[2]) // nodejsでは2番目に引数がくる
console.log(Date.now())