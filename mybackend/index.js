const express = require('express');
const cors = require('cors');
const {createTables} = require('./db')

createTables();

const PORT = 9000;
const app = module.exports = express();

app.use(cors());
app.use(express.json());

app.use('/base/', require('./routes/base.js'))

app.listen(PORT, () => console.log(`API listening on port ${PORT}`));
