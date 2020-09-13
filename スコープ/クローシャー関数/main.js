// increment();
// increment();
// increment();

// function increment() {
//   let num = 0;
//   num = num + 1;
//   console.log(num);
// }

// プライベート関数
function incrementFactory() {
  let num = 0;
  function increment() {
    num = num + 1;
    console.log(num);
  }
  return increment;
}

const increment = incrementFactory();
increment(); //1
increment(); //2
increment(); //3
