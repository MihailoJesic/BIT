"use strict";

let me = {
  name: `Mihailo`,
  surname: `jesic`,
  age: `31`,
};

function logger({ name, surname, age }) {
  console.log(name, surname, age);
}

// logger(me);

let bday = [1991, 6, 6];

let birthDate = new Date(...bday);

// console.log(birthDate);
// console.log(birthDate.toDateString());

class Person {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  hi() {
    return `Hi, I'm ${this.name} ${this.surname}`;
  }
}

class Student extends Person {
  constructor(name, surname, age, subject) {
    super(name, surname, age);

    this.subject = subject;
  }

  study() {
    return super.hi() + `, I study ${this.subject}`;
  }
}

let silky = new Student(`Silky`, `Witch`, 32, `owls`);

console.log(silky.hi());
console.log(silky.study());

let cube = {
  name: `The Cube`,
  arrow: () => this,
  func: function () {
    let circle = `The Circle`;
    return this;
  },
};

// console.log(cube.arrow());
// console.log(cube.func());

function iShouldBeUndefined() {
  "use strict";
  console.log(this);
}

// iShouldBeUndefined();
