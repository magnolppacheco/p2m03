const { Schema, model } = require('mongoose');

const cardSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  attack: { type: String, required: true },
  defense: { type: String, required: true },
  stars: { type: Number, required: true },
});

const Card = model('Card', cardSchema);
module.exports = Card;
