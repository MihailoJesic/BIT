`use strict`


(function () {
  console.log(1);

  function Person(name, surname) {
    this.name = name;
    this.surname = surname;
    this.getData = function () {
      return `${this.name} ${this.surname}`;
    };
  }

  function Seat(num, cat) {
    if (num == undefined) {
      num = Math.round(Math.random() * 100);
    }
    this.number = num;
    this.category = cat;
    this.getData = function () {
      return `${this.number}, ${this.category.toUpperCase()}`;
    };
  }

  function Passanger(name, surname, num, cat = `e`) {
    this.person = new Person(name, surname);
    this.seat = new Seat(num, cat);
    this.getData = function () {
      return `${this.seat.getData()}, ${this.person.getData()}`;
    };
  }

  function Flight(relation, date) {
    this.relation = relation;
    this.date = date;
    this.passangers = [];
    this.addPassanger = function (pass) {
      this.passangers.push(pass);
    };
    this.getData = function () {
      let l = date.length;
      let blank = ` `;
      let output = `${date}, ${this.relation}\n`;
      for (let i = 1; i < this.passangers.length; i++) {
        output += `${blank.repeat(l)} ${this.passangers[i].getData()}\n`;
      }
      return output;
    };
  }

  function Airport(flights = []) {
    this.name = `Nikola Tesla`;
    this.flights = flights;
    this.addFlight = function (flight) {
      this.flights.push(flight);
    };
  }

  function createFlight(relation, date) {
    return new Flight(relation, date);
  }

  function createPassenger(name, surname, seat, category) {
    return new Passanger(name, surname, seat, category);
  }
})();
