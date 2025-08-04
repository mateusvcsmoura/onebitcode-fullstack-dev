require('dotenv').config();

const { Pool } = require("pg");
const postgrePassword = process.env.POSTGRES_PASSWORD;

const pool = new Pool({
    connectionString: `postgresql://mateus:${encodeURIComponent(postgrePassword)}@localhost:5432/node_postgres`,
    max: 2
});

async function fastQuery() {
    const result = await pool.query("SELECT 1+1 AS result;");
    console.log(result.rows);

    setTimeout(() => {
        console.log('closing connection...');
    }, 3000);
}

fastQuery();
fastQuery();
fastQuery();