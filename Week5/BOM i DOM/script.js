`use strict`;

// Geolocation
// window.navigator.geolocation.getCurrentPosition(function (pos) {
//   console.log(pos);
// });

Screen;
console.log(window.screen.availHeight, innerHeight, outerHeight);

// Location
let l = window.location;
console.log(l.href, l.host, l.hostname, l.port, l.protocol, l.search);

// History
console.log(window.history);

// Methods
// let w = window.open(`https://google.com`);
// w.close();

let i = 0;

let interval = setInterval(function () {
  i++;
  console.log(i);
}, 1000);

console.log(`Interval ID = ${interval}`);
