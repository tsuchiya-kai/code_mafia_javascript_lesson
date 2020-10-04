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

function Japanese(name, age) {
  // 継承
  Person.call(this, name, age);
}

// プロトタイプ継承
Japanese.prototype = Object.create(Person.prototype);

const taro = new Japanese('taro', 23);

console.log(taro.hello());
