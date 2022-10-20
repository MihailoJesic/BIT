`use script`;

let a = 1;
let b = a++;
let c = 10;
let d = ++c;

console.log(a, b, c, d);

function sum(...arr) {
  let result = 0;
  arr.forEach((el) => {
    result += el;
  });
  return result;
}

console.log(sum(1, 5, 9, 7, 5, 3, 4));

function max(...args) {
  let result = args[0];
  args.forEach((el) => {
    if (el > result) {
      result = el;
    }
  });
  return result;
}

console.log(max(1, 2, 3));

function isOdd(num) {
  return num % 2 == 0 ? false : true;
}

console.log(isOdd(5), isOdd(100));

function isThreeDigit(num) {
  let result;
  if (num / 100 > 1 && num / 100 < 10) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

console.log(isThreeDigit(32), isThreeDigit(555), isThreeDigit(4000));

function arthMean(...args) {
  let result = 0;
  args.forEach((el) => (result += el));
  return result / args.length;
}

console.log(
  arthMean(1, 2, 3),
  arthMean(100, 200, 1000, 5000),
  arthMean(7, 9, 5, 3, 4, 5),
  arthMean(2, 2, 2, 2, 2, 2)
);

function squaratron(num) {
  let sqr = ``;
  let row = ``;
  for (let i = 1; i <= num; i++) {
    row = ``;
    for (let j = 1; j <= num; j++) {
      if (i == 1 || i == num || j == 1 || j == num) {
        row += `# `;
      } else {
        row += `  `;
      }
    }
    sqr += row + `\n`;
  }
  return sqr;
}

console.log(squaratron(10));
