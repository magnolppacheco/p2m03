const crypto = require('crypto');

class CardsEntity {
  constructor(card) {
    this.id = card.id ?? crypto.randomUUID();
    this.name = card.name;
    this.attack = card.attack;
    this.defense = card.defense;
    this.stars = card.stars;
  }

  validate() {
    if (!this.name) {
      throw new Error('Informe o nome!');
    }
    if (!this.attack) {
      throw new Error('Informe o ataque!');
    }
    if (!this.defense) {
      throw new Error('Informe a defesa!');
    }
    if (!this.stars) {
      throw new Error('Informe a quantidade de estrelas!');
    }
  }

  getCards() {
    return {
      id: this.id,
      name: this.name,
      attack: this.attack,
      defense: this.defense,
      stars: this.stars,
    };
  }
}

module.exports = CardsEntity;
