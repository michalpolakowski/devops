const express = require('express');
const cors = require('cors');
const {Pool} = require('pg');

const pgClient = new Pool({
  user: 'postgres',
  password: 'mypass',
  database: 'postgres',
  host: 'mypostgres',
  port: '5432'
})


pgClient.on('error', () => console.log('Postgres not working'))

pgClient.query('CREATE TABLE IF NOT EXISTS numbers (number INT)').catch(err => {
  console.log(err)
})


const PORT = 9000;
const app = express();

app.use(cors());
app.use(express.json());

const redis = require('redis');

const redisClient = redis.createClient({
  host: 'myredis',
  port: 6379,
  // retry_strategy: () => 1000
});

redisClient.on('connect', () => {console.log('Redis connected')})

app.get('/hello', ( req, res ) => {
  res.send("Hello world from express")
});


app.get('/', ( req, res ) => {
  res.send('Hello EVERYBODY!')
})

app.listen(PORT, () => console.log(`API listening on port ${PORT}`));
