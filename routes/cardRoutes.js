const router = require('express').Router();
const controller = require('../controllers/cardsController');

router.get('/', controller.findAllCards);
router.get('/:id', controller.findCardById);
router.post('/', controller.createCard);
router.put('/:id', controller.updateCard);
router.delete('/:id', controller.deleteCard);

module.exports = router;
