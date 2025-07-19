const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

const gamesController = require('./controllers/gamesController');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: "hello, world." });
});

app.get('/games', gamesController.index);
app.get('/games/:id', gamesController.show);

app.post('/games', gamesController.save);
app.post('/games/:id/genres', gamesController.addGenre);

app.put('/games/:id', gamesController.update);

app.delete('/games/:id', gamesController.delete);
app.delete('/games/:id/genres/:genre', gamesController.deleteGenre);

app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`));
