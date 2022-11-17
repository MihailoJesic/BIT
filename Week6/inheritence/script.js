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
    this.name = name;
    this.url = url;
    this.technologies = technologies;
    this.licence = licence;
    this.stars = stars;
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
