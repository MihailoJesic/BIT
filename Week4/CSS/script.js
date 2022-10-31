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
