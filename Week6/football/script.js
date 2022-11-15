"use strict";

const field = document.querySelector(`main`);
const player = document.querySelector(`svg`);
const btn = document.querySelector(`.btn`);

field.addEventListener(`click`, (e) => {
  let x = e.clientX;
  let y = e.clientY;

  player.style.left = `${x}px`;
  player.style.top = `${y}px`;

  player.classList.add(`clicked`);

  console.log(player.attributes);
});

btn.addEventListener(`click`, (e) => {
  player.style.left = 0;
  player.style.top = 0;

  player.classList.remove(`clicked`);
});
