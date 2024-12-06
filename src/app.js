const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const incomeRoutes = require('./routes/incomeRoutes');

const app = express();

app.use(bodyParser.json());
app.use(cors());


app.use('/api', incomeRoutes);

module.exports = app;
