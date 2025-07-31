CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  username VARCHAR(55) NOT NULL UNIQUE,
  password VARCHAR(20) NOT NULL
);

CREATE TABLE IF NOT EXISTS clients (
  id SERIAL PRIMARY KEY,
  cnpj VARCHAR(32) NOT NULL,
  
  user_id INT NOT NULL UNIQUE,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS technicians (
  id SERIAL PRIMARY KEY,

  user_id INT NOT NULL UNIQUE REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS tickets (
  id SERIAL PRIMARY KEY,
  description TEXT NOT NULL,
  category VARCHAR(55) 
    NOT NULL CHECK(category IN ('hardware', 'installation', 'office', 'printer', 'network', 'others')),
  status VARCHAR(55)
    NOT NULL CHECK(status IN ('open', 'queued', 'in_progress', 'closed', 'cancelled')) DEFAULT 'open',
  opened_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

  client_id INT NOT NULL REFERENCES clients(id),
  technician_id INT REFERENCES technicians(id)
);

CREATE TABLE IF NOT EXISTS messages (
  id SERIAL PRIMARY KEY,
  content TEXT NOT NULL,
  sent_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

  ticket_id INT NOT NULL,
  sender_id INT NOT NULL,
  
  FOREIGN KEY (ticket_id) REFERENCES tickets(id) ON DELETE CASCADE,
  FOREIGN KEY (sender_id) REFERENCES users(id) ON DELETE CASCADE
);