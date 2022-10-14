"use strict";

{
  let chamber = 0;
  const warning = `He's got a gun!`;

  //Short circuiting the && operator
  !chamber && console.log(warning);

  let gunGoes;

  if (chamber > 0) {
    gunGoes = `Bang!`;
  } else {
    gunGoes = `Click.`;
  }

  if (gunGoes !== `click`) {
    console.log(`Hit the dirt!!`);
  } else {
    console.log(`Perferate 'em boys.`);
  }
}

let a = 9;
let b = 5;

if (a > b) {
  console.log(a);
} else {
  console.log(b);
}

let c = 5;

if (c % 2 == 1) {
  console.log(`Odd`);
} else {
  console.log(`Even`);
}

let d = 540;

if (d % 3 == 0 && d % 5 == 0) {
  console.log(d);
}

let e = 62;
let f = 548;
let g = -59;

if (e * f * g < 0) {
  console.log(`The sign is -`);
} else {
  console.log(`The sign is +`);
}

let j = 952912952;

if (typeof j !== `number`) {
  console.log(`X`);
} else {
  if (j % 2 === 0) {
    console.log(j);
  } else {
    console.log(`X`);
  }
}

let k = 48;
let l = 84;
let m = 919;
let n = 26;
let o = 8;
let p = k;

if (p < l) {
  p = l;
}
if (p < m) {
  p = m;
}
if (p < n) {
  p = n;
}
if (p < o) {
  p = o;
}

console.log(p);

let x = 3;
let y = 1;
let z = 5;

if (x > y) {
  if (x < z) {
    console.log(z, x, y);
  } else if (y < z) {
    console.log(x, y, z);
  } else {
    console.log(x, z, y);
  }
} else {
  if (y < z) {
    console.log(z, y, x);
  } else if (x < z) {
    console.log(y, z, x);
  } else {
    console.log(y, x, z);
  }
}

let q = 11;

let result = ``;

if (q % 3 == 0) {
  result += `fizz`;
}
if (q % 5 == 0) {
  result += `buzz`;
}

if (q % 3 !== 0 && q % 5 !== 0) {
  console.log(`Not divisible`);
} else {
  console.log(result);
}

let w = 32;

if (Math.abs(w - 13) > 13) {
  console.log(Math.abs(w - 13) * 2);
} else {
  console.log(Math.abs(w - 13));
}
32;

let alpha = 100;
let beta = 100;

if (alpha == beta) {
  console.log(alpha * 6);
} else {
  console.log(alpha + beta);
}

let gamma = 27;
let delta = 23;

if (gamma == 50 || delta == 50 || gamma + delta == 50) {
  console.log(true);
}

let epsilon = 360;

if (epsilon > 20 && epsilon < 100) {
  console.log(`20 - 100`);
} else if (epsilon > 100 && epsilon < 400) {
  console.log(`100 - 400`);
}

let day = 1;

switch (day) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log(`Weekday`);
    break;
  case 6:
  case 7:
    console.log(`Weekend`);
    break;
  default:
    console.log(`Must enter a value between 1 and 7`);
}

let month = 7;

switch (month) {
  case 11:
  case 12:
  case 1:
    console.log(`Winter`);
    break;
  case 2:
  case 3:
  case 4:
    console.log(`Spring`);
    break;
  case 5:
  case 6:
  case 7:
    console.log(`Summer`);
    break;
  case 8:
  case 9:
  case 10:
    console.log(`Fall`);
    break;
  default:
    console.log(`Must enter a value between 1 and 12`);
    break;
}

let first = 489;
let second = 0;
let operation = `/`;

switch (operation) {
  case `+`:
    console.log(first + second);
    break;
  case `-`:
    console.log(first - second);
    break;
  case `*`:
    console.log(first * second);
    break;
  case `/`:
    if (second == 0) {
      console.log(`No dividing by 0`);
      break;
    }
    console.log(first / second);
    break;
}
