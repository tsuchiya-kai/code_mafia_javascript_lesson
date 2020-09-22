const person = {
  name: 'Tom',
  hello: function () {
    console.log('hello ' + this.name); //thisはpersonを参照
  },
};

person.hello(); //hello tom

function a() {
  console.log('hello' + this.name); // windowObjectを参照
}
