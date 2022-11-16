"use strict";

const mario = document.querySelector(`.mario`);
const body = document.querySelector(`body`);
const bg = document.querySelector(`.background`);

let walking = false;
let firstWalkFrame = false;
let screen = 0;

let keys = new Set();

let styleList = getComputedStyle(mario);
let groundLevel = parseInt(styleList.getPropertyValue(`bottom`));
let jump = 0;
let jumpSpeed = 18;
let defaultJumpSpeed = 18;
let jumpMax = groundLevel * 4;
let jumpTimer;
let falltimer;

body.addEventListener(`keydown`, (e) => {
  let key = e.key;

  if (key == `ArrowLeft` || key == `ArrowRight`) {
    keys.add(key);
  }
  console.log(key, keys);
  if (keys.has(key)) {
    let screenStep = key == `ArrowLeft` ? 15 : -15;
    if (key == `ArrowLeft`) {
      mario.classList.add(`reverse`);
    } else {
      mario.classList.remove(`reverse`);
    }

    if (!walking) {
      walking = !walking;

      let walk = setInterval(() => {
        if (firstWalkFrame) {
          mario.style.backgroundImage = `url(./assets/Untitled-2.png)`;
          firstWalkFrame = !firstWalkFrame;

          screen = (screen + screenStep) % bg.offsetHeight;
          bg.style.backgroundPositionX = `${screen}px`;
        } else {
          mario.style.backgroundImage = `url(./assets/Untitled-3.png)`;
          firstWalkFrame = !firstWalkFrame;

          screen = (screen + screenStep) % bg.offsetHeight;
          bg.style.backgroundPositionX = `${screen}px`;
        }
      }, 100);

      body.addEventListener(`keyup`, () => {
        clearInterval(walk);
        mario.style.backgroundImage = `url(./assets/Untitled-1.png)`;
        walking = false;
        keys.remove(key);
      });
    }
  }
});

body.addEventListener(`keydown`, (e) => {
  let key = e.key;

  if (key == `ArrowUp` && !jumpTimer && !falltimer) {
    jumpTimer = setInterval(() => {
      console.log(jump, groundLevel);
      if (jump > jumpMax) {
        falltimer = setInterval(() => {
          console.log(jump, groundLevel);

          if (jump < 1) {
            jump = 0;
            mario.style.setProperty(`bottom`, `${groundLevel + jump}px`);
            clearInterval(falltimer);
            jumpTimer = null;
            falltimer = null;
            jumpSpeed = defaultJumpSpeed;
          } else {
            jump = jump - jumpSpeed;
            jumpSpeed = jumpSpeed * 1.15;

            console.log(`fall`);

            mario.style.setProperty(`bottom`, `${groundLevel + jump}px`);
          }
        }, 50);
        clearInterval(jumpTimer);
      } else {
        jump = jump + jumpSpeed;
        jumpSpeed = jumpSpeed * 0.97;
        console.log(`jump`);
        mario.style.setProperty(`bottom`, `${groundLevel + jump}px`);
      }
    }, 50);
  }

  // mario.style.setProperty(`bottom`, `${jump}vh`);
});
