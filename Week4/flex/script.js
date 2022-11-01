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

// New Group

// 1. zadatak "Given a square matrix, rotate the matrix by 90 degrees in a clockwise direction."

// input: a = [[1,2,3,4],
//             [5,6,7,8],
//             [9,10,11,12],
//             [13,14,15,16]]

// output: [[13,9,5,1],
//         [14,10,6,2],
//         [15,11,7,3],
//         [16,12,8,4]];

let a = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

function rotateArray(arr) {}

// console.log(rotateArray(a));

// 2. zadatak "Given an M × N binary matrix, replace all occurrences of 0’s by 1’s,
// which are not completely surrounded by 1’s from all sides
// (top, left, bottom, right, top-left, top-right, bottom-left, and bottom-right)."

// input: a =  [[ 1,  1,  1,  1,  0,  0,  1,  1,  0,  1  ],
//             [  1,  0,  0,  1,  1,  0,  1,  1,  1,  1  ],
//             [  1,  0,  0,  1,  1,  1,  1,  1,  1,  1  ],
//             [  1,  1,  1,  1,  0,  0,  1,  1,  0,  1  ],
//             [  1,  1,  1,  1,  0,  0,  0,  1,  0,  1  ],
//             [  1,  1,  0,  1,  1,  0,  1,  1,  0,  0  ],
//             [  1,  1,  0,  1,  1,  1,  1,  1,  1,  1  ],
//             [  1,  1,  0,  1,  1,  0,  0,  1,  0,  1  ],
//             [  1,  1,  1,  0,  1,  0,  1,  0,  0,  1  ],
//             [  1,  1,  1,  0,  1,  1,  1,  1,  1,  1  ]]

// output: [[  1,  1,  1,  1,  1,  1,  1,  1,  1,  1  ],
//          [  1,  0,  0,  1,  1,  1,  1,  1,  1,  1  ],
//          [  1,  0,  0,  1,  1,  1,  1,  1,  1,  1  ],
//          [  1,  1,  1,  1,  0,  0,  1,  1,  1,  1  ],
//          [  1,  1,  1,  1,  0,  0,  0,  1,  1,  1  ],
//          [  1,  1,  1,  1,  1,  0,  1,  1,  1,  1  ],
//          [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1  ],
//          [  1,  1,  1,  1,  1,  0,  0,  1,  0,  1  ],
//          [  1,  1,  1,  1,  1,  0,  1,  0,  0,  1  ],
//          [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1  ]]

// 3. zadatak "Given a square matrix, rotate the matrix by 180 degrees in a clockwise direction."

// input: a = [[1,2,3,4],
//             [5,6,7,8],
//             [9,10,11,12],
//             [13,14,15,16]]

// output: [[16,15,14,13],
//          [12,11,10,9],
//          [8,7,6,5],
//          [4,3,2,1]]

// 4. zadatak "Given an M × N integer matrix, print all its diagonal elements having a positive slope."

// var a = [[1,2,3,4,5],
//          [2,3,4,5,6],
//          [3,4,5,6,7],
//          [4,5,6,7,8],
//          [5,6,7,8,9]]

// output:
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
// 6 6 6 6
// 7 7 7
// 8 8
// 9

// 5. zadatak "Given an integer array containing M × N elements, construct an M × N matrix from it in spiral order."

// Input: var a = [1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25]

// output:
// [[ 1,  2,   3,  4,  5 ],
//  [16,  17,  18,  19,  6 ],
//  [15,  24,  25,  20,  7 ],
//  [14,  23,  22,  21,  8 ],
//  [13,  12,  11,  10,  9 ]]

// 6. zadatak "Print the pattern."

// input: 5

// output:
//     *
//    * *
//   *   *
//  *     *
// *********

// 7. zadatak "Print the pattern."

// input: 5

// output:
// * * * * *
//       *
//     *
//   *
// *
