const games = [
    { id: 1, name: 'Legend of Mana', genres: ['action-rpg'], year: 1999 },
    { id: 2, name: 'World of Warcraft', genres: ['mmorpg'], year: 2004 },
    { id: 3, name: 'Metal Gear Solid', genres: ['stealth', 'action-adventure'], year: 1998 },
    { id: 4, name: 'Sonic Adventure 2', genres: ['platformer'], year: 2001 },
    { id: 5, name: 'Age of Empires 2', genres: ['real-time-strategy'], year: 1999 }
];

const gamesController = {
    // GET /games
    index: (req, res) => {
        return res.json(games);
    },

    // GET /games/:id
    show: (req, res) => {
        const { id } = req.params;
        const game = games.find(game => game.id === Number(id));

        if (!game) {
            res.status(404);
            res.json({ message: "game not found" });
        }

        return res.json(game);
    },

    // POST /games
    save: (req, res) => {
        const { name, genres, year } = req.body;
        const newGame = {
            name,
            genres,
            year,
            id: Math.floor(Math.random() * 99999)
        };

        games.push(newGame);

        res.status(201);
        res.json(newGame);
    },

    // PUT /games/:id
    update: (req, res) => {
        const { id } = req.params;
        const { name, year } = req.body;

        const gameIndex = games.findIndex(game => game.id === Number(id));

        if (gameIndex === -1) {
            return res.status(404).json({ message: "game not found" });
        }

        if (typeof (name) === "string") {
            games[gameIndex].name = name;
        }

        if (typeof (year) === "number") {
            games[gameIndex].year = year;
        }

        res.json(games[gameIndex]);
    },

    // DELETE /games/:id
    delete: (req, res) => {
        const { id } = req.params;
        const gameIndex = games.findIndex(game => game.id === Number(id));

        if (gameIndex === -1) {
            return res.status(404).json({ message: "game not found" });
        }

        games.splice(gameIndex, 1);

        res.status(204).end();
    },

    // POST /games/:id/genres
    addGenre: (req, res) => {
        const { id } = req.params; // jogo vindo da url da req
        const { genre } = req.body; // genero vindo do body da req (post)

        const gameIndex = games.findIndex(game => game.id === Number(id));

        if (gameIndex === -1) {
            return res.status(404).json({ message: "game not found" });
        }

        if (typeof (genre) !== "string" || games[gameIndex].genres.includes(genre)) {
            return res.status(400).json({ message: "invalid genre" });
        }

        games[gameIndex].genres.push(genre);

        res.json(games[gameIndex]);
    },

    // DELETE /games/:id/genres/:genre
    deleteGenre: (req, res) => {
        const { id, genre } = req.params;
        const gameIndex = games.findIndex(game => game.id === Number(id));

        if (gameIndex === -1) {
            return res.status(404).json({ message: "game not found" });
        }

        if (typeof (genre) !== "string" || !games[gameIndex].genres.includes(genre)) {
            return res.status(404).json({ message: "invalid genre" });
        }

        games[gameIndex].genres = games[gameIndex].genres.filter(genreName => genreName !== genre);

        res.status(200).json(games[gameIndex]);
    }
};

module.exports = gamesController;

