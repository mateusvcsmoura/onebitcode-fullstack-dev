require("dotenv").config();

const { Client } = require("pg");
const postgrePassword = process.env.POSTGRES_PASSWORD;

const client = new Client({
    connectionString: `postgresql://mateus:${encodeURIComponent(postgrePassword)}@localhost:5432/node_postgres`
});


async function openConnection() {
    await client.connect();

    const result = await client.query(`SELECT 1 + 1 AS result;`);
    console.log(result.rows);

    setTimeout(() => {
        client.end();
        console.log('closing connection...');
    }, 5000);
}

openConnection();
openConnection();