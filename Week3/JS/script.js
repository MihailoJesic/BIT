"use strict";

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

// console.log(most(arr3));

// #2-1

let arr4 = [3, 500, 12, 149, 53, 414, 1, 19];

function minMax(arr) {
  let min = Infinity;
  let max = -Infinity;
  let minIndex = 0;
  let maxIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      minIndex = i;
    }
    if (arr[i] > max) {
      max = arr[i];
      maxIndex = i;
    }
  }
  arr[minIndex] = max;
  arr[maxIndex] = min;

  return arr;
}

// console.log(arr4);
// console.log(minMax(arr4));

// #2-2

let arr5 = [3, 500, -10, 149, 53, 414, 1, 19];

function halvefive(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i] / 2 + 5;
    if (temp == 0) {
      temp = 20;
    }
    result[i] = temp;
  }

  return result;
}

// console.log(halvefive(arr5));

// #2-3

let students = [
  `Micahel`,
  `Anne`,
  `Frank`,
  `Joe`,
  `John`,
  `David`,
  `Mark`,
  `Bill`,
];

let scores = [50, 39, 63, 72, 99, 51, 83, 59];

function grade(num) {
  if (num < 61) {
    return 6;
  } else if (num < 71) {
    return 7;
  } else if (num < 81) {
    return 8;
  } else if (num < 91) {
    return 9;
  } else {
    return 10;
  }
}

function report(stu, sco) {
  for (let i = 0; i < stu.length; i++) {
    if (sco[i] < 61) {
      console.log(
        `${stu[i]} acquired ${sco[i]} points and failed to complete the exam.`
      );
    } else {
      console.log(
        `${stu[i]} acquired ${sco[i]} points and earned a ${grade(sco[i])}`
      );
    }
  }
}

// report(students, scores);

// #2-6

let sum = 0;

for (let i = 1; i <= 1000; i++) {
  if (i % 2 == 0) {
    sum += i;
  } else if (i % 2 == 1 && i <= 500) {
    sum -= i;
  }
}

// console.log(sum * 12.5);

// #2+7

let arr6 = [
  `M`,
  `Anne`,
  12,
  `Steve`,
  `Joe`,
  `John`,
  `David`,
  `Mark`,
  true,
  `A`,
];

function cat2(arr) {
  let string = ``;
  arr.forEach((el) => {
    if (el.length >= 2) {
      string += el[0] + el[1];
    }
  });
  return string;
}

// console.log(cat2(arr6));

// #2-8

let string1 = `Belgrade Institute of Technology`;

function reverso(string) {
  let output = ``;
  for (let i = string.length - 1; i >= 0; i--) {
    output += string[i];
  }
  return output;
}

// console.log(reverso(string1));

// #2-9

function combo(x) {
  let count = 0;
  let report = ``;
  for (let i = 1; i <= x; i++) {
    for (let j = 1; j <= x; j++) {
      if (i != j) {
        report += `(${i}, ${j})\n`;
        count++;
      }
    }
  }
  return report + count;
}

// console.log(combo(7));

// #2-10

function primeotron(num) {
  result = true;
  if (num < 0 || num % 1 != 0) {
    return false;
  }

  for (let i = Math.round(num / 2); i > 1; i--) {
    if ((num / i) % 1 == 0) {
      result = false;
    }
  }
  return result;
}

// console.log(primeotron(103));

// #2-11

let string2 = `eye`;
let string3 = `geek`;
let string4 = `a nut for a jar of tuna`;

function despacer(string) {
  let result = ``;
  for (let i = 0; i < string.length; i++) {
    if (string[i] != ` `) {
      result += string[i];
    }
  }
  return result;
}

function palandromatic(rawString) {
  let string = despacer(rawString);
  let result = true;
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - i - 1]) {
      result = false;
    }
  }
  return result;
}

// console.log(palandromatic(string2));
// console.log(palandromatic(string3));
// console.log(palandromatic(string4));

// #2-12

function divisortron(x, y) {
  let result = 0;
  let smaller;
  if (x > y) {
    smaller = y;
  } else {
    smaller = x;
  }

  for (let i = 1; i <= smaller; i++) {
    if ((x / i) % 1 == 0 && (y / i) % 1 == 0) {
      result = i;
    }
  }

  return result;
}

// console.log(divisortron(81, 9));

// #2-4

let arr7 = [13, 11, 15, 5, 6, 1, 8, 12];

function isOrdered(input) {
  result = true;
  input.forEach((el, i, arr) => {
    if (arr[i] > arr[i + 1] && arr[i + 1] !== undefined) {
      result = false;
    }
  });
  // console.log(`${input} got ${result}`);
  return result;
}

function swap(arr, i) {
  // console.log(`Pre-swap - ${arr[i]} and ${arr[i + 1]}`);
  let temp = arr[i];
  arr[i] = arr[i + 1];
  arr[i + 1] = temp;
  // console.log(`Post-swap - ${arr[i]} and ${arr[i + 1]}`);
}

function swapper(input) {
  // console.log(`swapper input = ${input}`);
  input.forEach((el, i, arr) => {
    if (arr[i] > arr[i + 1] && arr[i + 1] != undefined) {
      swap(arr, i);
    }
  });
  return input;
}

function sorter(arr) {
  while (isOrdered(arr) == false) {
    swapper(arr);
  }
  return arr;
}

function doubler(arr) {
  arr.forEach((el, i, arr) => {
    arr[i] *= 2;
  });
  return arr;
}

function doubleSwap(arr) {
  return doubler(sorter(arr));
}

// console.log(doubleSwap(arr7));

// #2-5

let arr8 = [13, 11, 15, 5, 6, 1, 8, 12];

function reverseArray(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = temp;
  }
  return arr;
}

function reverseOrder(arr) {
  return reverseArray(sorter(arr));
}

// console.log(`${reverseOrder(arr8)}`);
