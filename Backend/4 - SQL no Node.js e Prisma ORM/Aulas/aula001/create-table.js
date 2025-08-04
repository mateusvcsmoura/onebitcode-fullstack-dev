require('dotenv').config();

const pg = require('pg');
const postgresPassword = process.env.POSTGRES_PASSWORD;

// Connection str: protocol://user:password@host:port/db_name
const db = new pg.Client({
    // host: 'localhost',
    // port: 5432,
    // user: 'mateus',
    // password: '',
    // database: 'node_postgres'

    connectionString: `postgresql://mateus:${encodeURIComponent(postgresPassword)}@localhost:5432/node_postgres`
});

async function createTable() {
    await db.connect();

    const query = `
        CREATE TABLE IF NOT EXISTS "public"."Pokemon" (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            type VARCHAR(255)
        );
    `;

    const result = await db.query(query);
    console.log(result);

    await db.end();
}

createTable();