'use strict';

class Animal {
  static alive = [];

  static addAnimal(animal) {
    this.alive.push(animal);
  }

  health = 100;

  constructor(name) {
    this.name = name;
    Animal.addAnimal(this);
  }
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;
    }

    Animal.alive = Animal.alive.filter(beast => beast.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
