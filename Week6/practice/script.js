"use strict";

(function () {
  console.log(`hi`);

  function Country(name, odds, continent) {
    this.name = name;
    this.odds = odds;
    this.continent = continent;
  }

  // let example = new Country(`serbia`, `1-2`, `EU`);
  // console.log(example.odds);

  function Person(name, surname, dateOfBirth) {
    this.name = name;
    this.surname = surname;
    this.dateOfBirth = dateOfBirth;
    this.getData = function () {
      return `${this.name} ${this.surname} ${this.dateOfBirth}`;
    };
  }

  function Player(
    firstName,
    surname,
    dateOfBirth,
    betAmount,
    countryName,
    odds,
    continent
  ) {
    this.person = new Person(firstName, surname, dateOfBirth);
    this.betAmount = betAmount;
    this.country = new Country(countryName, odds, continent);
    this.getData = function () {
      return `${this.country.name}, ${(
        this.betAmount * this.country.odds
      ).toFixed(2)} eur, ${this.person.getData()}`;
    };
  }

  // let example2 = new Player(
  //   `Mihailo`,
  //   `jesic`,
  //   `060791`,
  //   100,
  //   `serbia`,
  //   `1-2`,
  //   `eu`
  // );

  // console.log(example2);
  // console.log(example2.person.getData());

  function Address(country, city, postalCode, street, number) {
    this.country = country;
    this.city = city;
    this.postalCode = postalCode;
    this.street = street;
    this.number = number;
    this.getData = function () {
      return `${this.street} ${this.number}, ${this.city}, ${this.country}`;
    };
  }

  function BettingPlace(country, city, postalCode, street, number) {
    this.address = new Address(country, city, postalCode, street, number);
    this.players = [];
    this.bets = function () {
      let output = 0;
      for (let i = 0; i < this.players.length; i++) {
        output += this.players[i].betAmount;
      }
      return output;
    };
    this.getData = function () {
      return `${
        this.street
      }, ${postalCode} ${city}, sum of all bets: ${bets()}eur`;
    };
    this.addPlayer = function (player) {
      this.players.push(player);
    };
  }

  function BettingHouse(competition) {
    this.competition = competition;
    this.places = [];
    this.players = function () {
      let output = 0;
      for (let i = 0; i < this.places.length; i++) {
        output += this.places[i].players.length;
      }
      return output;
    };
    this.addPlace = function (place) {
      this.places.push(place);
    };
    this.getData = function () {
      return `
${this.competition}, ${
        this.places.length
      } betting places, ${this.players()} bets
    Nemanjina, 11000 Belgrade, sum of all bets: 2100eur
        SR, 1050.00 eur, Pera Peric, 29 years
        SR, 1050.00 eur, Pera Peric, 29 years
    Nemanjina, 11000 Belgrade, sum of all bets: 2100eur
        GR, 1050.00 eur, Pera Peric, 29 years
        SR, 1050.00 eur, Pera Peric, 29 years
There are 3 bets on Serbia
      `;
    };
  }

  const continents = {
    ASIA: `AS`,
    EUROPE: `EU`,
    NORTHAMERICA: `NA`,
    SOUTHAMERICA: `SA`,
    AUSTRALIA: `AU`,
    AFRICA: `AF`,
  };

  Object.freeze(continents);

  function createPlayer(
    firstName,
    surname,
    dateOfBirth,
    betAmount,
    countryName,
    odds,
    continent
  ) {
    return new Player(
      firstName,
      surname,
      dateOfBirth,
      betAmount,
      countryName,
      odds,
      continent
    );
  }

  function createBettlingPlace(country, city, postalCode, street, number) {
    return new BettingPlace(country, city, postalCode, street, number);
  }

  let worldCup = new BettingHouse(`Worldcup`);

  let player1 = createPlayer(
    `Dalinar`,
    `Kholin`,
    `77/66/22`,
    753,
    `Alethkar`,
    `1-100`,
    continents.ASIA
  );
  let player2 = createPlayer(
    `Dalfhfginar`,
    `Khofghlin`,
    `77/fghfgh66/22`,
    755673,
    `fghfgh`,
    `1-1fghfgh00`,
    continents.ASIA
  );
  let player3 = createPlayer(
    `Dafghfghlinar`,
    `Khofghfghlin`,
    `77fghfgh/66/22`,
    7775753,
    `Aletfghhgfhfhkar`,
    `1-1fghfgh00`,
    continents.ASIA
  );
  let player4 = createPlayer(
    `Dalfghinar`,
    `Khohfglin`,
    `77/6hfghf6/22`,
    756753,
    `Alethgfhhkar`,
    `1-1fghgf00`,
    continents.ASIA
  );

  let bettingPlace1 = createBettlingPlace(
    `Serbia`,
    `Belgrade`,
    11000,
    `Cara Urosa`,
    50
  );

  let bettingPlace2 = createBettlingPlace(
    `Serbia`,
    `Pozega`,
    31210,
    `Kralja Aleksanda`,
    5066
  );

  bettingPlace1.addPlayer(player1);
  bettingPlace1.addPlayer(player2);
  bettingPlace2.addPlayer(player3);
  bettingPlace2.addPlayer(player4);

  worldCup.addPlace(bettingPlace1);
  worldCup.addPlace(bettingPlace2);
})();
