a();

function a() {
  console.log(c);
  let c = 1;

  d();
  function d() {
    console.log('d is colled');
  }
  console.log('a is colled');
}

console.log(b);

var b = 0;
