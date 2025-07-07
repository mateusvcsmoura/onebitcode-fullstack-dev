const express = require("express");
const path = require("node:path");

const app = express();
const PORT = 3000;

const storedUsers = [];

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views")); // where the views are

app.use(express.urlencoded({ extended: true }));

// routes

app.get("/", (req, res) => {
    const title = "Homepage";
    const message = "Dynamic message inserted by EJS (backend)";

    res.render('index', { title, message });
});

app.get('/form', (req, res) => {
    res.render('form');
});

app.post('/register', (req, res) => {
    const { username, password } = req.body;

    storedUsers.push({ username, password });

    res.redirect('/users'); // url, not file (render)
});

app.get('/users', (req, res) => {
    res.render('users', { users: storedUsers });
});

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
});

