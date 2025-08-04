import { Pool } from "pg";
import { configDotenv } from "dotenv";
import { createEventTable } from "./modules/create-event-table.js";
import { createEvent } from "./modules/create-event.js";
import { getAllEvents } from "./modules/get-all-events.js";
import { getEventByName } from "./modules/get-event-by-name.js";
import { getEventsByDate } from "./modules/get-events-by-date.js";
import { sellTicket } from "./modules/sell-ticket.js";

configDotenv();

const postgresPassword = process.env.POSTGRE_PASSWORD;

const pool = new Pool({
    connectionString: `postgresql://mateus:${encodeURIComponent(postgresPassword)}@localhost:5432/node_postgres`,
    max: 2
});

async function main() {
    await createEventTable(pool);
    await createEvent({ name: "Juice WRLD Show", event_date: "2025-08-10", available_tickets: 999 }, pool);
    await createEvent({ name: "Blackpink Show", event_date: "2025-08-15", available_tickets: 2 }, pool);
    await getEventsByDate('2025-08-10', pool);
    await sellTicket('Juice WRLD Show', pool);
    await sellTicket('Blackpink Show', pool)
    await getAllEvents(pool);
}

main();

export { pool };