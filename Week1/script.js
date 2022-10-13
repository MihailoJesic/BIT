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
