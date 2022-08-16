require('dotenv').config();
const { connect } = require('mongoose');

function mongoConnect() {
  connect(process.env.MONGO_URL ?? 'mongodb://localhost:27017/yugiohcards', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log('Database connected');
    })
    .catch((err) => {
      console.log('Error in database: ', err);
    });
}

module.exports = { mongoConnect };
