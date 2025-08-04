async function getEventsByDate(eventDate, pool) {
    try {
        const result = await pool.query(`SELECT * FROM events WHERE event_date=$1`, [eventDate]);
        console.log(result.rows);
    } catch (e) {
        console.error(`error trying to get info by date: ${e}`);
    }
}

export { getEventsByDate };