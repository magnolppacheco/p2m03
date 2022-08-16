const cardsService = require('../services/cardsService');

async function findAllCards(req, res) {
  try {
    const allCards = await cardsService.findAllCards();
    res.status(200).send(allCards);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
}

async function findCardById(req, res) {
  const id = req.params.id;
  const uniqueCard = await cardsService.findCardsById(id);
  if (uniqueCard) {
    res.status(200).send(uniqueCard);
  } else {
    res.status(400).send({ message: 'Não existe card com este id!' });
  }
}

async function createCard(req, res) {
  try {
    const card = req.body;
    const cardCreated = await cardsService.createCard(card);
    res.status(201).send(cardCreated);
  } catch (err) {
    console.log(err.message);
    res.status(400).send({ message: err.message });
  }
}

async function updateCard(req, res) {
  try {
    const card = req.body;
    const cardUpdated = await cardsService.updateCard(card);
    res.status(200).send(cardUpdated);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
}

async function deleteCard(req, res) {
  const id = req.params.id;
  const deletedCard = await cardsService.deleteCard(id);
  if (deletedCard) {
    res.status(200).send(deletedCard);
  } else {
    res
      .status(400)
      .send({ message: 'Nenhum card com este id foi encontrado.' });
  }
}

module.exports = {
  findAllCards,
  findCardById,
  createCard,
  updateCard,
  deleteCard,
};
