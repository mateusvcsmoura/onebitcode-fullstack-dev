require('dotenv').config();

const { Pool } = require("pg");
const postgrePassword = process.env.POSTGRES_PASSWORD;

const pool = new Pool({
    connectionString: `postgresql://mateus:${encodeURIComponent(postgrePassword)}@localhost:5432/node_postgres`,
    max: 2
});

async function openConnection() {
    const client = await pool.connect();

    const result = await client.query(`SELECT 1 + 1 AS soma;`);
    console.log(result.rows);

    setTimeout(() => {
        client.release();
        console.log("closing connection...");
    }, 5000);
}


openConnection();

setTimeout(() => {
    openConnection();
}, 1000);

setTimeout(() => {
    openConnection();
}, 2000);
