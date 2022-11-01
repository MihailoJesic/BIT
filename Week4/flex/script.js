`use strict`;

// #1

let string1 = `1b895abd`;

function hasFive(string) {
  let arr = Array.from(string);
  let result = false;
  arr.forEach((el) => {
    if (el == `5`) {
      result = true;
    }
  });
  return result;
}

// console.log(hasFive(string1));

// #2

let string2 = `Programming in JS is super interesting!`;

function censorJS(string) {
  let letters = Array.from(string);

  letters.forEach((el, i, arr) => {
    if (arr[i] == `J` && arr[i + 1] == `S`) {
      arr[i] = `*`;
      arr[i + 1] = `*`;
    }
  });

  return letters.join(``);
}

// console.log(censorJS(string2));

// #3

let string3 = `Goo Morning`;

function insertAt(string, index, item) {
  return string.slice(0, index - 1) + item + string.slice(index - 1);
}

// console.log(insertAt(string3, 4, `d`));

// #4

let string4 = `Goodd Morning`;

function deleteAt(string, index) {
  return string.slice(0, index - 1) + string.slice(index);
}

// console.log(deleteAt(string4, 4));

// #5
let arr1 = [3, 5, 1, 8, 90, -4, 23, 1, 67];

function everyOther(arr) {
  let result = [];

  arr.forEach((el, i) => {
    if (i % 2 == 0) {
      result.push(el);
    }
  });

  return result;
}

// console.log(everyOther(arr1));

// #6

let arr2 = [3, 5, 1, 8, 90, -4, 23, 1, 67];

function doubleSpan(arr, min, max) {
  let result = [];

  arr.forEach((el, i) => {
    if (i > min && i < max) {
      result.push(el * 2);
    } else {
      result.push(el);
    }
  });

  return result;
}

// console.log(doubleSpan(arr2, 2, 6));

// #7

let arr3 = [3, 4, 1, 3];
let arr4 = [8, 9, 3, 1, 11, 4, 3, 3];

function counter(arr) {
  let result = [];
  result.push([arr[0], 0]);

  arr.forEach((el) => {
    if (
      result.filter((item) => {
        return el == item[0];
      }).length
    ) {
      for (let i = 0; i < result.length; i++) {
        if (el == result[i][0]) {
          result[i][1]++;
        }
      }
    } else {
      result.push([el, 1]);
    }
  });

  return result;
}

function subseter(arr1, arr2) {
  let set = counter(arr1);
  let subset = counter(arr2);

  let result = subset.every((val) => {
    let result = true;
    let contains = set.filter((el) => el[0] == val[0] && el[1] >= val[1]);
    if (!contains.length) {
      result = false;
    }
    return result;
  });

  return result;
}

// console.log(subseter(arr4, arr3));

// #8

let arr5 = [`apple`, `tea`, `amazing`, `morning`, `JavaScript`];

function numOfLetter(string, letter) {
  let target = letter.toLowerCase();
  let count = 0;
  let arr = Array.from(string.toLowerCase());
  arr.forEach((el) => {
    if (target == el) {
      count++;
    }
  });
  return count;
}

function orderByLetter(arr, letter = `a`) {
  arr.sort((a, b) => {
    return numOfLetter(a, letter) - numOfLetter(b, letter);
  });
  return arr;
}

// console.log(orderByLetter(arr5));

// #11

let arr6 = [78, 111, 4, 4321];

function pad(string, letter = ` `, padTo = 20) {
  let result = `` + string;
  let l = result.length;

  for (let i = 0; i < padTo - l; i++) {
    result = letter + result;
  }

  return result;
}

function padArray(arr) {
  let result = ``;
  arr.forEach((el) => {
    result += pad(el) + `\n`;
  });
  return result;
}

// console.log(padArray(arr6));
