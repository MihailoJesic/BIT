"use strict";

// let i = 0;

// while (i < 10) {
//   console.log(i);
//   i++;
// }

// do {
//   console.log(i);
//   i++;
// } while (i < 5);

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// let arr = [1, null, 2, undefined, `0`, `something`, 3];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let i = arr.length - 1; i > 0; i--) {
//   console.log(arr[i]);
// }

// let string = ``;

// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 5; j++) {
//     string += `*\t`;
//   }
//   string += `*\n`;
// }

// console.log(string);

// #0

// for (let i = 1; i <= 100; i++) {
//   console.log(i * i);
// }

// #1

// for (let i = 1; i <= 15; i++) {
//   console.log(`${i} - ${i % 2 == 0 ? `Even` : `Odd`}`);
// }

// #2

// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 == 0 || i % 5 == 0) {
//     sum += i;
//   }
// }

// console.log(sum);

// #3

// let arr = [6, 8, 46, 26, 84, 56, 57, 46, 65, 564, 6];

// let sum = 0;
// let product = 1;

// for (let i = 1; i < arr.length; i++) {
//   sum += arr[i];
//   product *= arr[i];
// }

// console.log(sum, product);

// #4

// let arr = [`1`, `A`, `B`, `c`, `r`, true, NaN, undefined];
// let string = ``;

// for (let i = 0; i < arr.length; i++) {
//   string += `${arr[i]} `;
// }

// console.log(string);

// #5

// let arr = [
//   [1, 2, 1, 24],
//   [8, 11, 9, 4],
//   [7, 0, 7, 27],
// ];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// }

// #6

// let sum = 0;

// for (let i = 1; i <= 20; i++) {
//   sum += i ** 2;
// }

// console.log(sum);

// #7

// let grades = [80, 77, 88, 95, 68];
// let avg = 0;
// for (let i = 0; i < grades.length; i++) {
//   avg += grades[i] / grades.length;
// }

// if (avg > 90) {
//   console.log(`A`);
// } else if (avg > 80) {
//   console.log(`B`);
// } else if (avg > 70) {
//   console.log(`C`);
// } else if (avg > 60) {
//   console.log(`D`);
// } else {
//   console.log(`F`);
// }

// #8

for (let i = 1; i <= 100; i++) {
  let text = ``;
  if (i % 3 == 0) {
    text += `fizz`;
  }
  if (i % 5 == 0) {
    text += `buzz`;
  }
  if (i % 3 == 0 || i % 5 == 0) {
    console.log(text);
  } else {
    console.log(i);
  }
}
