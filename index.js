const express = require('express');

const PORT = 9000;
const app = express();

app.get('/hello', (req, res) => {res.send("Hello world from express")});

app.listen(PORT, () => console.log(`API listening on port ${PORT}`));
