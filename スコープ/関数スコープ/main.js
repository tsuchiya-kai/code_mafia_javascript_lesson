//　関数スコープ
function a() {
  let b = 0;
  console.log(b); //0
}

console.log(b); // b
a();

//　ブロックスコープ
{
  //let const だけがブロックスコープとして使える
  // var　を使用するとブロックスコープが無視される
  // function キーワードも var 同様
  // そのためlet か const　に無名関数を代入する必要がある
}
// ブロックスコープは基本的にif文等の中で使用される
// if(){}
