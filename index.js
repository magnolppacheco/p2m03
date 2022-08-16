const express = require('express');
const cors = require('cors');
const CardRoutes = require('./routes/cardRoutes');
const { mongoConnect } = require('./database/mongodb/mongo');

const app = express();

app.use(cors());
app.use(express.json());

mongoConnect();

app.use('/cards', CardRoutes);

app.listen(3000, () => {
  console.log('http://localhost:3000');
});
