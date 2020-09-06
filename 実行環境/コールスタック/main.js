//グローバルコンテキスト
// 今回で言うと、main.jsないで定義したものが使える
let a = 0;
function b() {
  //関数コンテキスト
  console.log(this, arguments, a);
}

console.log(a);
b();
