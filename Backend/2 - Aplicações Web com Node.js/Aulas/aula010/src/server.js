const express = require("express");
const session = require('express-session');
const path = require("node:path");
const router = require("./routes");

const PORT = process.env.PORT || 3000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: "secret-key-word",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.use(router);

app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`));
