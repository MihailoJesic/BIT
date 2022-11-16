"use strict";

const counterContainers = document.querySelectorAll(`.counter-container`);
const containers = Array.from(counterContainers);

function listenToChange(listener, target, amount) {
  listener.addEventListener(`click`, () => {
    console.log(listener, target, amount);
    target.textContent = +target.textContent + amount;
  });
}

containers.forEach((el) => {
  let btnPlus = el.querySelector(`.btn-plus`);
  let btnMinus = el.querySelector(`.btn-minus`);
  let counter = el.querySelector(`.counter-number`);

  listenToChange(btnPlus, counter, 1);
  listenToChange(btnMinus, counter, -1);
});
