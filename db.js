const {Pool} = require('pg');

const pgClient = new Pool({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  host: process.env.POSTGRES_HOST,
  port: '5432'
})

pgClient.on('error', () => console.log('Postgres not working'))

const Pub = {
  name: 'pubs',
  tableProperties: {
    id: 'id SERIAL PRIMARY KEY',
    name: 'name VARCHAR',
    capacity: 'capacity INT',
    city: 'city VARCHAR'
  }
}

ALL_MODELS = [Pub]

const createTable = ( model ) => {
  const tableProperties = Object.getOwnPropertyNames(model.tableProperties)
    .map(property => model.tableProperties[property])
    .join(', ')
  pgClient.query(`CREATE TABLE IF NOT EXISTS ${model.name} (${tableProperties});`).catch(err => console.log(err));
  console.log(`Model ${model.name} added to database`)
}

const createTables = () => {
  ALL_MODELS.forEach(model => createTable(model))
}

module.exports = {pgClient, createTables}
