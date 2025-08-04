async function createEvent(event, pool) {
    if (!event) return null;

    const client = await pool.connect();

    try {
        await client.query(
            `INSERT INTO "public"."events" (name, event_date, available_tickets) VALUES ($1, $2, $3);`,
            [event.name, event.event_date, event.available_tickets]
        );

        console.log('event created successfully');
    } catch (e) {
        console.error(`error trying to create event: ${e}`);
    } finally {
        client.release();
    }
}

export { createEvent };