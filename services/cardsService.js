const Card = require('../database/models/cardschema');
const CardEntity = require('../entities/cardsEntity');

async function findAllCards() {
  return await Card.find();
}

async function findCardsById(id) {
  const cardFinded = await Card.findOne({ id: id });
  return cardFinded;
}

async function createCard(card) {
  const newCard = new CardEntity(card);
  newCard.validate();

  const cardCreated = await Card.create(newCard.getCards());

  return cardCreated;
}

async function updateCard(card) {
  const updateCard = new CardEntity(card);

  const cardUpdatedInDatabase = await Card.findOneAndUpdate(
    { id: card.id },
    updateCard,
    { new: true },
  );

  return cardUpdatedInDatabase;
}

async function deleteCard(id) {
  const cardFinded = await Card.findOneAndDelete({ id: id });

  return cardFinded;
}

module.exports = {
  findAllCards,
  findCardsById,
  createCard,
  updateCard,
  deleteCard,
};
