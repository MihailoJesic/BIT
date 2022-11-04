`use strict`;

// 1. Create a constructor function ModernCalculator that creates objects with 17 methods, and takes 3 numbers as parameters

// 1) sum() returns the sum of these properties.
// 2) mul() returns the multiplication product of these properties.
// 3) div() returns the result after division
// 4) sub() returns the result after subtraction
// 5) sqrt() returns the square root of one of the numbers
// 6) pow() returns the result of a to the power of b
// 7) changeA() change the number a
// 8) changeB() change the number b
// 9) changeC() change the number c
// 10) quadraticFormula() returns the result after using the quadratic formula
// 11) makeArray() returns an Array of arguments
// 12) isEven() returns true if all the arguments are even, else returns false
// 13) isPrime() returns true if all the arguments are prime numbers, else false
// 14) convertToString() returns concatenated string of all the arguments with "+" inbetween
// 15) sumAndMultiply() returns the result after adding the arguments together and multiplying that result by 123
// 16) reverseTheNumber() returns reversed number after calling sumAndMultiply() function
// 17) createNewProperty() create a new key: value property, fourth number

function Mathotron(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;

  this.sum = function () {
    return this.a + this.b + this.c;
  };

  this.mul = function () {
    return this.a * this.b * this.c;
  };

  this.div = function () {
    return this.a / this.b / this.c;
  };

  this.sub = function () {
    return this.a - this.b - this.c;
  };

  this.sqrt = function () {
    return Math.sqrt(this.a);
  };

  this.pow = function () {
    return this.a ** this.b;
  };

  this.changeA = function (num) {
    this.a = num;
  };

  this.changeB = function (num) {
    this.a = num;
  };

  this.changeC = function (num) {
    this.a = num;
  };

  this.quadraticFormula = function () {
    return this.sqrt(this.a ** 2 + this.b ** 2);
  };

  this.makeArray = function () {
    return Array.from(arguments);
  };

  this.isEven = function () {
    if (this.a % 2 == 0 && this.b % 2 == 0 && this.c % 2 == 0) {
      return true;
    } else {
      return false;
    }
  };

  this.isPrime = function (num) {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
      if (num % i === 0) return false;
    return num > 1;
  };

  this.convertToString = function () {
    return `${this.a} + ${this.b} + ${this.c}`;
  };

  this.sumAndMultiply = function () {
    return this.sum() * 123;
  };

  this.reverseTheNumber = function () {
    let string = `${this.sumAndMultiply()}`;
    let result = ``;
    for (let i = string.length; i > 0; i--) {
      result += string[i - 1];
    }
    return result;
  };

  this.newProperty = function (d) {
    this.d = d;
  };
}

let thing = new Mathotron(2, 3, 4);

// console.log(thing);
// console.log(thing.sumAndMultiply());
