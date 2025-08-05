require("dotenv").config();

const { Pool } = require("pg");
const postgresUsername = process.env.POSTGRES_USERNAME;
const postgresPassword = process.env.POSTGRES_PASSWORD;

const pool = new Pool({
    connectionString: `postgresql://${encodeURIComponent(postgresUsername)}:${encodeURIComponent(postgresPassword)}@localhost:5432/node_postgres`
});

async function query(queryString, params, callback) {
    return pool.query(queryString, params, callback);
}

module.exports = { query };