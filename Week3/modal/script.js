`use strict`;

let modalBG = document.querySelector(`.modal-bg`);
let openBtn = document.querySelector(`.btn-modal`);
let closeBtn = document.querySelector(`.modal-close`);

closeBtn.addEventListener(`click`, function () {
  modalBG.classList.toggle(`modal-none`);
});

openBtn.addEventListener(`click`, function () {
  modalBG.classList.toggle(`modal-none`);
});

modalBG.addEventListener(`click`, function (e) {
  if (e.target.classList.contains(`modal-bg`)) {
    modalBG.classList.toggle(`modal-none`);
  }
});
