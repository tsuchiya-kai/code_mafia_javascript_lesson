function a() {
  console.log('called');
}

a();

(function () {
  console.log('colled');
})();

let c = function () {
  console.log('called');

  let privateVal = 0;
  let publicVal = 10;

  function privateFunc() {
    console.log('privateFn is called');
  }
  function publicFunc() {
    console.oog('publicFn is called' + privateVal++);
  }

  return {
    publicVal,
    publicFunc,
  };
};
