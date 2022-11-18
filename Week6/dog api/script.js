"use strict";

// let img = document.querySelector(`img`);
// let btn = document.querySelector(`a`);
let div = document.querySelector(`div`);

async function dog() {
  let data = await fetch(
    `https://dog.ceo/api/breed/terrier/tibetan/images/random`
  );
  let output = await data.json();
  let url = output.message;
  img.src = url;
}

// dog();

async function allDogs() {
  let res = await fetch(`https://dog.ceo/api/breed/terrier/tibetan/images`);
  // console.log(`res >> `, res);
  let data = await res.json();
  // console.log(`res >> `, data);
  let result = data.message;
  // console.log(`res >> `, result);

  result.forEach((el) => {
    div.innerHTML += `<img src="${el}">\n`;
  });
}

allDogs();

btn.addEventListener(`click`, dog);
