"use strict";

(function () {
  console.log(`hello`);

  function Person(name, surname) {
    this.name = name;
    this.surname = surname;
    this.getData = function () {
      return `${this.name} ${this.surname}`;
    };
  }

  function Seat(num, cat) {
    if (num == undefined) {
      num = Math.ceil(Math.random() * 100);
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
      for (let i = 0; i < this.passangers.length; i++) {
        output += `\t \t${this.passangers[i].getData()}\n`;
      }
      // console.log(output);
      return output;
    };
  }

  function Airport(flights = []) {
    this.name = `Nikola Tesla`;
    this.flights = flights;
    this.addFlight = function (flight) {
      this.flights.push(flight);
    };
    this.getData = function () {
      let passangers = 0;
      for (let i = 0; i < flights.length; i++) {
        passangers += flights[i].passangers.length;
      }
      let output = `Airport: ${this.name}, total passangers: ${passangers}\n`;
      for (let i = 0; i < flights.length; i++) {
        output += `\t${flights[i].getData()}`;
      }
      return output;
    };
  }

  function createFlight(relation, date) {
    return new Flight(relation, date);
  }

  function createPassenger(name, surname, seat, category) {
    return new Passanger(name, surname, seat, category);
  }

  let airport = new Airport();

  let flight1 = createFlight(`Belgrade - New York`, `Oct 25 2017`);
  let flight2 = createFlight(`Barcelona - Belgrade`, `Nov 11 2017`);

  let passanger1 = createPassenger(`John`, `Snow`, 1, `b`);
  let passanger2 = createPassenger(`Cersei`, `Lannister`, 2, `b`);
  let passanger3 = createPassenger(`Daenerys`, `Targaryen`, 14);
  let passanger4 = createPassenger(`Tyrion`, `Lannister`);

  flight1.addPassanger(passanger1);
  flight1.addPassanger(passanger2);
  flight2.addPassanger(passanger3);
  flight2.addPassanger(passanger4);

  airport.addFlight(flight1);
  airport.addFlight(flight2);

  console.log(airport.getData());
})();
