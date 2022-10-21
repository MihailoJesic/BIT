`use strict `;

function letterCounter(string, letter) {
  let target = letter.toLowerCase();
  let arr = Array.from(string.toLowerCase());
  let result = 0;

  arr.forEach((el) => {
    if (el == target) {
      result++;
    }
  });

  return result;
}

console.log(letterCounter(`AabBcCaaA`, `A`));

function repeater(string, num) {
  let result = ``;
  for (let i = 0; i < num; i++) {
    result += string;
  }
  return result;
}

console.log(repeater(`asdf`, 3));
