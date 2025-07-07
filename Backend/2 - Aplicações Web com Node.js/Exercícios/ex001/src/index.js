// app initial settings

const express = require("express");
const path = require("node:path");

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));

// variables

let storedUsers = [];
let id = 0;

// routes

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/register', (req, res) => {
    const { email } = req.body;
    id++;

    storedUsers.push({ email, id });
    console.log(storedUsers);

    res.redirect('/sucess');
});

app.get('/sucess', (req, res) => {
    res.render('sucess');
});

app.get('/users', (req, res) => {
    res.render('users', { users: storedUsers });
});

app.get('/admin', (req, res) => {
    res.render('admin', { users: storedUsers });
});

app.delete('/admin/:id', (req, res) => { // recebe um id vindo do front (requisição delete via fetch)
    const userId = Number(req.params.id);
    storedUsers = storedUsers.filter(user => user.id !== userId);
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`app running on http://localhost:${PORT}`);
});

