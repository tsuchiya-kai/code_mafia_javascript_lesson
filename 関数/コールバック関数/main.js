function hello(name) {
  console.log('hello' + name);
}

function bey(name) {
  console.log('bey' + name);
}

function fn(cb) {
  cb('tom');
}

fn(hello);
fn(bey);

setTimeout(hello, 2000);
