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

async function selectPokemon() {
    db.connect();

    const query = `SELECT * FROM "public"."Pokemon";`;
    const result = await db.query(query);
    console.table(result.rows);

    db.end();
}

selectPokemon();