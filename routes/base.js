const express = require('express');
const {pgClient} = require("../db");

const router = express.Router()

router.get('/pubs', ( req, res ) => {
  pgClient.query('SELECT * FROM pubs').then(pubs => {
    console.log(pubs.rows)
    res.json(pubs.rows)
  })
});

router.get('/pub/:id', (req, res) => {
  pgClient.query(`SELECT * FROM pubs WHERE id = ${req.params.id} LIMIT 1;`).then(
    pub => res.json(pub.rows[0])
  )
})

router.post('/pubs', (req, res) => {
  const queryText = `INSERT INTO pubs (city, name, capacity) VALUES ($1, $2, $3);`;
  const properties = [req.body.city, req.body.name, req.body.capacity];
  pgClient.query(queryText, properties).then(() => {
    res.json('CREATED')
    res.send()
  })
    .catch(() => {
      res.send('FAILED')
    });
})

module.exports = router
