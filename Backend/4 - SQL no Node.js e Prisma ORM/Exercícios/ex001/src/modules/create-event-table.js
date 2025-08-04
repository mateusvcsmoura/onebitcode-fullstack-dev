async function createEventTable(pool) {
    const client = await pool.connect();

    try {
        await client.query(
            `
            CREATE TABLE IF NOT EXISTS "public"."events" (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL UNIQUE,
                event_date DATE NOT NULL DEFAULT CURRENT_DATE,
                available_tickets INT NOT NULL,
                sold_tickets INT DEFAULT 0
            );
        `);

        console.log('events table created successfully');
    } catch (e) {
        console.error(`error creating events table: ${e}`);
    } finally {
        client.release();
    }
}

export { createEventTable };