function Person(name, age) {
  this.name = name;
  this.age = age;
  this.hello = function () {
    console.log('hello' + this.name);
  };
}

Person.prototype.hello = function () {
  console.log('hello' + this.name);
};

const bob = new Person('bob', 18);

console.log(bob);

bob.hello();
