const {Pool} = require('pg');

const pgClient = new Pool({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  host: process.env.POSTGRES_HOST,
  port: '5432'
})

pgClient.on('error', () => console.log('Postgres not working'))

const User = {
  name: 'users',
  tableProperties: {
    login: 'login VARCHAR',
    password: 'password VARCHAR',
    firstName: 'firstName VARCHAR',
    lastName: 'lastName VARCHAR'
  }
}

const Pub = {
  name: 'pubs',
  tableProperties: {
    name: 'name VARCHAR'
  }
}

ALL_MODELS = [User, Pub]

const createTable = ( model ) => {
  const tableProperties = Object.getOwnPropertyNames(model.tableProperties)
    .map(property => model.tableProperties[property])
    .join(', ')
  pgClient.query(`CREATE TABLE IF NOT EXISTS ${model.name} (${tableProperties});`).catch(err => console.log(err));
}

const createTables = () => {
  ALL_MODELS.forEach(model => createTable(model))
}

module.exports = {pgClient, createTables}
