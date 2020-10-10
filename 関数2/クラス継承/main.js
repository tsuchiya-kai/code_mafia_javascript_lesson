class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  hello() {
    console.log('hello' + this.name);
  }
}

class Japanese extends Person {
  constructor(name, age, gender) {
    super(name, age);
    this.gender = gender;
    hello() {
      console.log('test');
    }
  }
}