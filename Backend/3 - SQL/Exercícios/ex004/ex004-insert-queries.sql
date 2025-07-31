-- INSERT
INSERT INTO literary_genres (name, description) VALUES
  ('Ficção', 'Narrativas imaginárias'),
  ('Autoajuda', 'Livros com foco em desenvolvimento pessoal'),
  ('Biografia', 'Histórias de vida de pessoas reais');

-- SELECT
SELECT * FROM literary_genres;

-- INSERT
INSERT INTO books (title, publication_date, isbn, description, genre) VALUES
  ('A Jornada', '2020-05-10', '9781234567890', 'Uma aventura épica.', 1),
  ('Você é Incrível', '2022-08-15', '9780987654321', 'Dicas práticas para viver melhor.', 2),
  ('A Vida de Alan', '2019-03-22', '9781111111111', 'Biografia completa de Alan.', 3);

-- SELECT
SELECT * FROM books;

-- INSERT autores
INSERT INTO authors (name, biography, birthday) VALUES
  ('Lucas Silva', 'Autor de fantasia e ficção.', '1985-07-01'),
  ('Ana Paula', 'Especialista em desenvolvimento pessoal.', '1990-02-10'),
  ('Carlos Lima', 'Jornalista e biógrafo.', '1975-12-25');

-- INSERT relacionamento N:N
INSERT INTO book_authors (book_id, author_id) VALUES
  (1, 1),  -- "A Jornada" por Lucas
  (2, 2),  -- "Você é Incrível" por Ana
  (3, 3);  -- "A Vida de Alan" por Carlos

-- SELECT
SELECT * FROM authors;
SELECT * FROM book_authors;

-- INSERT
INSERT INTO readers (name, email, age, sex) VALUES
  ('João Pedro', 'joao@example.com', 25, 'M'),
  ('Mariana Lima', 'mariana@example.com', 31, 'F'),
  ('Anônimo', 'anonimo@example.com', NULL, NULL);

-- SELECT
SELECT * FROM readers;

-- INSERT
INSERT INTO reviews (rating, content, book_id, reader_id) VALUES
  (4.5, 'Gostei bastante da história.', 1, 1),
  (5.0, 'Me ajudou muito no meu dia a dia.', 2, 2),
  (3.5, 'Interessante, mas poderia ser mais detalhado.', 3, 3);

-- SELECT
SELECT * FROM reviews;

SELECT
  authors.name AS autor,
  books.title AS livro
FROM book_authors
JOIN authors ON book_authors.author_id = authors.id
JOIN books ON book_authors.book_id = books.id;

SELECT 
  readers.name AS leitor,
  books.title AS livro,
  reviews.rating AS avaliacao,
  reviews.content AS conteudo_avaliacao
FROM reviews
JOIN readers ON reviews.reader_id = readers.id
JOIN books ON reviews.book_id = books.id;