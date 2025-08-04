async function getEventByName(eventName, pool) {
    try {
        const result = await pool.query(`SELECT * FROM events WHERE name=$1`, [eventName]);
        console.log(result.rows);
    } catch (e) {
        console.error(`error trying to get ${eventName} info: ${e}`);
    }
}

export { getEventByName };