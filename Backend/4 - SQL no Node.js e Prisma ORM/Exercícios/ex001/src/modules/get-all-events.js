async function getAllEvents(pool) {
    try {
        const result = await pool.query("SELECT * FROM events;");

        console.log(result.rows);
    } catch (e) {
        console.error(`error trying to get all events: ${e}`);
    }
}

export { getAllEvents };