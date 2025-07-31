CREATE TYPE season_status AS ENUM('ongoing', 'finished');

CREATE TABLE IF NOT EXISTS movies (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  director VARCHAR(100) NOT NULL,
  year INT NOT NULL,
  genre VARCHAR(100) NOT NULL,
  length INT NOT NULL,
  rating NUMERIC(2, 1) NOT NULL,
  box_office NUMERIC(12, 2) NOT NULL,
  budget NUMERIC(12, 2) NOT NULL
);

CREATE TABLE IF NOT EXISTS tv_shows (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  director VARCHAR(100) NOT NULL,
  year INT NOT NULL,
  genre VARCHAR(100) NOT NULL,
  seasons INT NOT NULL,
  episodes INT NOT NULL,
  rating NUMERIC(2, 1) NOT NULL,
  channel VARCHAR(100) NOT NULL,
  status season_status NOT NULL
);