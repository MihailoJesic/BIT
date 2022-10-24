`use strict`;

// #1

let a = `my random string`;
let b = `JS `;

function incept(string, inceptor, num) {
  if (!num) {
    num = 0;
  }
  let firstHalf = string.slice(0, num);
  let secHalf = string.slice(num);
  let result;

  return (result = firstHalf + inceptor + secHalf);
}

// console.log(incept(a, b, 10));
// console.log(incept(a, b));

// #2

let arr1 = [NaN, 0, 15, false, -22, ``, undefined, 47, null];

function cleanUp(arr) {
  let result = [];

  arr.forEach((el) => {
    if (
      el !== undefined &&
      el !== null &&
      el !== Infinity &&
      !(typeof el === `number` && el !== el)
    ) {
      result.push(el);
    }
  });

  return result;
}

// console.log(cleanUp(arr1));

// #3

function defalsify(arr) {
  let result = [];

  arr.forEach((el) => {
    if (el) {
      result.push(el);
    }
  });

  return result;
}

// console.log(defalsify(arr1));

// #4

let number1 = 12345;

function flipper(num) {
  let l = num.toString().length;
  let result = ``;

  for (let i = l; i > 0; i--) {
    result += num.toString()[i - 1];
  }

  return +result;
}

// console.log(flipper(number1));

// #5

let arr2 = [7, 9, 0, -2];

function last(arr, n = 1) {
  let result = [];

  for (let i = 0, j = 0; i < arr.length; i++) {
    if (i >= arr.length - n) {
      result[j] = arr[i];
      j++;
    }
  }

  return result;
}

// console.log(last(arr2));
// console.log(last(arr2, 3));

// #6

function arrayify(num, el = null) {
  let result = [];
  for (let i = 0; i < num; i++) {
    result[i] = el;
  }
  return result;
}

// console.log(arrayify(6, 0));
// console.log(arrayify(2, `none`));
// console.log(arrayify(2));

// #7

function perfectron(num) {
  let divisors = [];
  for (let i = 1, j = 0; i <= num / 2; i++) {
    if ((num / i) % 1 == 0) {
      divisors[j] = i;
      j++;
    }
  }

  let sum = 0;
  for (let i = 0; i < divisors.length; i++) {
    sum += divisors[i];
  }

  return sum == num
    ? `${num} is a perfect number.`
    : `${num} is not a perfect number.`;
}

// console.log(perfectron(6));
// console.log(perfectron(28));

// #8

function contains(string, word) {
  let count = 0;
  let place = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == word[place]) {
      if (place == word.length - 1) {
        count++;
        place = 0;
      } else {
        place++;
      }
    }
  }
  return `${word} was found ${count} times`;
}

// console.log(contains(`The quick brown fox`, `fox`));
// console.log(contains(`aa bb cc dd aa`, `aa`));

// #9

function hide(mail) {
  let result = `${mail[0]}${mail[1]}${mail[2]}...`;

  let atSign = mail.indexOf(`@`);

  result += mail.slice(atSign);

  return result;
}

// console.log(hide(`myemailaddress@bgit.rs`));

// #10

let arr3 = [3, `a`, `a`, `a`, 2, 3, `a`, 3, `a`, 2, 4, 9, 3];

function count(arr, el) {
  let i = 0;
  let exists = false;
  for (; i < arr.length; i++) {
    if (arr[i][0] === el) {
      arr[i][1]++;
      exists = true;
    }
  }
  if (!exists) {
    arr[i] = [el, 1];
  }
}

function most(arr) {
  let index = [];

  arr.forEach((el) => {
    count(index, el);
  });

  let max = -Infinity;
  let maxIndex = 0;

  index.forEach((el, i) => {
    if (el[1] > max) {
      max = el;
      maxIndex = i;
    }
  });

  return `The most frequent element is ${index[maxIndex][0]} with ${index[maxIndex][1]} occurances.`;
}

console.log(most(arr3));
