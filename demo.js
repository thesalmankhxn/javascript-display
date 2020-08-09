'use strict'; 
(function() {

class Fplayer {
  constructor (name, country) {
    this.name = name;
    this.country = country;
  }

  introduce() {
    display(`${this.name} was born in ${this.country}`);
  }
}

let Lionel = new Fplayer('Messi', 'Argentina');

Lionel.introduce();

class Tplayer extends Fplayer {
  constructor(name, country, age) {
    super(name, country);
    this.age = age;
  }

  playTennis() {
    display(`${this.name} is ${this.age} years old and knows how to play Tennis`);
  }
}

let Rodger = new Tplayer("Fedrer", "Spain", 33);

Rodger.playTennis();
Rodger.introduce();

})();