`use strict`;

let me = {
  name: `Mihailo`,
  surname: `jesic`,
  age: `31`,
};

function logger({ name, surname, age }) {
  console.log(name, surname, age);
}

logger(me);

let bday = [1991, 6, 6];

let birthDate = new Date(...bday);

console.log(birthDate);
console.log(birthDate.toDateString());
