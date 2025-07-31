CREATE TABLE IF NOT EXISTS literary_genres (
  id SERIAL PRIMARY KEY,
  name VARCHAR(20) NOT NULL UNIQUE,
  description TEXT
);

CREATE TABLE IF NOT EXISTS readers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(55) NOT NULL UNIQUE,
  age INT,
  sex VARCHAR(10) CHECK(sex IN ('F', 'M', 'Other', 'Prefer not to say'))
);

CREATE TABLE IF NOT EXISTS authors (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  biography TEXT,
  birthday DATE
);

CREATE TABLE IF NOT EXISTS books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  publication_date DATE NOT NULL,
  isbn VARCHAR(13) NOT NULL UNIQUE,
  description TEXT,

  genre INT NOT NULL,
  FOREIGN KEY (genre) REFERENCES literary_genres(id)
);

CREATE TABLE IF NOT EXISTS book_authors (
  book_id INT NOT NULL,
  author_id INT NOT NULL,

  PRIMARY KEY (book_id, author_id),
  FOREIGN KEY (book_id) REFERENCES books(id),
  FOREIGN KEY (author_id) REFERENCES authors(id)
);

CREATE TABLE IF NOT EXISTS reviews (
  id SERIAL PRIMARY KEY,
  rating NUMERIC(2, 1) NOT NULL CHECK (rating BETWEEN 1.0 AND 5.0),
  content TEXT,

  book_id INT NOT NULL,
  reader_id INT NOT NULL,
  
  FOREIGN KEY (book_id) REFERENCES books(id) ON DELETE CASCADE,
  FOREIGN KEY (reader_id) REFERENCES readers(id) ON DELETE CASCADE
);
