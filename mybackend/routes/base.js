const express = require('express');
const {pgClient} = require("../db");

const router = express.Router()

router.get('/pubs', ( req, res ) => {
  pgClient.query('SELECT * FROM pubs').then(pubs => {
    console.log(pubs.rows)
    res.json(pubs.rows)
  })
});

router.get('/pub/:id', ( req, res ) => {
  pgClient.query(`SELECT * FROM pubs WHERE id = ${req.params.id} LIMIT 1;`).then(
    pub => res.json(pub.rows[0])
  )
})

router.delete('/pub/:id', ( req, res ) => {
  pgClient.query(`DELETE FROM pubs WHERE id = ${req.params.id};`).then(
    () => res.send('DELETED')
  ).catch(() => {
    res.statusCode = 400;
    res.send('FAILED')
  })
})

router.post('/pubs', ( req, res ) => {
  const queryText = `INSERT INTO pubs (city, name, capacity) VALUES ($1, $2, $3);`;
  const properties = [req.body.city, req.body.name, req.body.capacity];
  pgClient.query(queryText, properties).then(() => {
    res.json('CREATED')
    res.send()
  })
    .catch(() => {
      res.statusCode = 400;
      res.send('FAILED')
    });
})

router.patch('/pub/:id', ( req, res ) => {
  const queryText = `UPDATE pubs SET city = $1, name = $2, capacity = $3 WHERE id = $4;`;
  const properties = [req.body.city, req.body.name, req.body.capacity, req.params.id];
  pgClient.query(queryText, properties).then(() => {
    res.json('UPDATED')
    res.send()
  })
    .catch(() => {
      res.statusCode = 400;
      res.send('FAILED')
    });
})

module.exports = router
