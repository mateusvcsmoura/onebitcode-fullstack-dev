async function sellTicket(eventName, pool) {
    const client = await pool.connect();

    try {
        const result = await client.query(`SELECT * FROM events WHERE name=$1`, [eventName]);
        const event = result.rows[0];

        if (!event) return null;

        if (event?.available_tickets > 0) {
            await client.query(
                `
                UPDATE events SET available_tickets = available_tickets - 1, sold_tickets = sold_tickets + 1
                WHERE name=$1;
                `, [eventName]
            );

            console.log('successfully sold ticket');
        } else {
            throw new Error("there is no available tickets to buy");
        }
    } catch (e) {
        console.error(`error trying to buy/sell ticket: ${e}`);
    } finally {
        client.release();
    }
}

export { sellTicket };