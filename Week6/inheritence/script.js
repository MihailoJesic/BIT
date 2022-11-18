"use strict";

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
}

class Employee extends Person {
  constructor(name, surname, job, salary) {
    super(name, surname);
    this.job = job;
    this.salary = salary;
    this.getData = function () {
      return this.name, thiss.surname, this.salary;
    };
    this.getSalary = function () {
      return this.salary;
    };
    this.increaseSalary = function () {
      this.salary *= Math.round(1.1 * this.salary);
    };
  }
}

class Developer extends Employee {
  constructor(name, surname, job, salary, specialisation) {
    super(name, surname, job, salary);
    this.specialisation;
    this.getSpecialisation = function () {
      return this.specialisation;
    };
  }
}

class Manager extends Employee {
  constructor(name, surname, job, salary, department) {
    super(name, surname, job, salary);
    this.department = department;
    this.getDepartment = function () {
      return this.department;
    };
    this.changeDepartment = function (input) {
      this.department = input;
    };
  }
}

class App {
  constructor() {
    this.isCCLicence = function () {
      return `CC` in licence;
    };
    this.like = function () {
      this.stars++;
    };
    this.showStars = function () {
      return this.stars;
    };
  }
}

class WebApp extends App {
  constructor(name, url, technologies, licence, stars) {
    super();
    [name, url, technologies, licence, stars] = this;
    this.getData = function () {
      return this.name, this.url, this.technologies, this.licence, this.stars;
    };
    this.reactBased = function () {
      return `React` in technologies;
    };
  }
}

class MobileApp extends App {
  constructor(name, platforms, licence, stars) {
    super();
    this.name = name;
    this.platforms = platforms;
    this.licence = licence;
    this.stars = stars;
    this.getData = function () {
      return name, platforms, licence, stars;
    };
    this.forAndroid = function () {
      return `Android` in technologies;
    };
  }
}

let test = new MobileApp(`TestApp`, [`Andoid`, `Apple`], [`CC`], 4);

// console.log(test);
// console.log(test.showStars());
// console.log(test.like());
// console.log(test.showStars());

// https://app.getpostman.com/join-team?invite_code=7bb6ba8b90b19c744617ce9d89bc085f

// let serbia = new XMLHttpRequest();
// let countryName = `serbia`;
// serbia.open(`GET`, `https://restcountries.com/v3.1/name/${countryName}`);
// serbia.send();
// serbia.addEventListener(`load`, () => {
//   const [data] = JSON.parse(serbia.responseText);
//   console.log(data);
// });
// console.log(serbia);

// fetch(`https://restcountries.com/v3.1/name/serbia`)
//   .then((res) => res.json())
//   .then((data) => console.log(data[0]));

// let roll = new Promise((resolve, reject) => {
//   console.log(`Here comes the roll...`);
//   setTimeout(() => {
//     if (Math.random() > 0.5) {
//       resolve(`Win 💚`);
//     } else {
//       reject(new Error(`Lose ❌`));
//     }
//   }, 2000);
// });

// roll.then((res) => console.log(res)).catch((err) => console.error(err));

// function wait(sec) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, sec * 1000);
//   });
// }

// function write() {
//   console.log(`Writing`);
// }

// wait(2)
//   .then(() => {
//     console.log(`1`);
//     return wait(1);
//   })
//   .then(() => console.log(`2`));

async function countryData(name) {
  let data = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  let [output] = await data.json();
  console.log(output);
}

// countryData(`serbia`);
// console.log(`1`);
