"use strict";

let img = document.querySelector(`img`);
let btn = document.querySelector(`a`);

async function dog() {
  let data = await fetch(
    `https://dog.ceo/api/breed/terrier/tibetan/images/random`
  );
  let output = await data.json();
  let url = output.message;
  img.src = url;
}

dog();

btn.addEventListener(`click`, dog);
