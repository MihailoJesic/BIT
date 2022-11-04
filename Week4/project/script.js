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

  function sum() {
    return this.a + this.b + this.c;
  }

  function mul() {
    return this.a * this.b * this.c;
  }

  function div() {
    return this.a / this.b / this.c;
  }

  function sub() {
    return this.a - this.b - this.c;
  }

  function sqrt() {
    return Math.sqrt(this.a);
  }

  function pow() {
    return this.a ** this.b;
  }

  function changeA(num) {
    this.a = num;
  }

  function changeB(num) {
    this.a = num;
  }

  function changeC(num) {
    this.a = num;
  }

  function quadraticFormula() {
    return sqrt(this.a ** 2 + this.b ** 2);
  }

  function makeArray() {
    return Array.from(arguments);
  }

  function isEven() {
    if (this.a % 2 == 0 && this.b % 2 == 0 && this.c % 2 == 0) {
      return true;
    } else {
      return false;
    }
  }

  function isPrime(num) {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
      if (num % i === 0) return false;
    return num > 1;
  }

  function convertToString() {
    return `${this.a} + ${this.b} + ${this.c}`;
  }

  function sumAndMultiply() {
    return sum() * 123;
  }

  function reverseTheNumber() {
    let string = `${sumAndMultiply()}`;
    let result = ``;
    for (let i = string.length; i > 0; i--) {
      result += string[i - 1];
    }
    return result;
  }

  function newProperty(d) {
    this.d = d;
  }
}
