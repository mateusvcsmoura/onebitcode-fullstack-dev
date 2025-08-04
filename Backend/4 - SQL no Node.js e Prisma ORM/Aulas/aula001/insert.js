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

async function insertPokemon() {
    await db.connect();

    // Forma básica
    // const query = `INSERT INTO "public"."Pokemon" (name, type) VALUES ('Bulbasaur', 'Grass');`;
    // const result1 = await db.query(query);
    // console.log(result1);

    // Dados dinâmicos (FORMA ERRADA)
    // const pokemonName = "Beedrill";
    // const pokemonType = "Bug";
    // const result2 = await db.query(`INSERT INTO "public"."Pokemon" (name, type) VALUES ('${pokemonName}', '${pokemonType}');`);
    // console.log(result2);

    // Dados dinâmicos (FORMA CORRETA)
    const pokemon = { name: "Magikarp", type: "Water" };
    const result3 = await db.query(
        `INSERT INTO "public"."Pokemon" (name, type) VALUES ($1, $2);`,
        [pokemon.name, pokemon.type]
    );
    console.log(result3);

    await db.end();
}

insertPokemon();
