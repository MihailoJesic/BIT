"use strict";

const mario = document.querySelector(`.mario`);
const body = document.querySelector(`body`);
const bg = document.querySelector(`.background`);

let walking = false;
let firstWalkFrame = false;
let screen = 0;

body.addEventListener(`keydown`, () => {
  if (!walking) {
    walking = !walking;

    let walk = setInterval(() => {
      if (firstWalkFrame) {
        mario.style.backgroundImage = `url(./assets/Untitled-2.png)`;
        firstWalkFrame = !firstWalkFrame;

        screen = (screen + 15) % bg.offsetHeight;
        bg.style.backgroundPositionX = `-${screen}px`;
      } else {
        mario.style.backgroundImage = `url(./assets/Untitled-3.png)`;
        firstWalkFrame = !firstWalkFrame;

        screen = (screen + 15) % bg.offsetHeight;
        bg.style.backgroundPositionX = `-${screen}px`;
      }
    }, 100);

    body.addEventListener(`keyup`, () => {
      clearInterval(walk);
      mario.style.backgroundImage = `url(./assets/Untitled-1.png)`;
      walking = false;
    });
  }
});
