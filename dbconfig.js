const { Pool } = require("pg");
require("dotenv").config();

const connection = process.env.POSTGRES_URL + "?sslmode=require";

const pool = new Pool({
  connectionString: connection,
});

module.exports = pool;
