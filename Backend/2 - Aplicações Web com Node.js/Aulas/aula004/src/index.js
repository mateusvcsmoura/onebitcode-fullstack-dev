const express = require("express");
const path = require("node:path");

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views")); // where the views are

app.get("/", (req, res) => {
    const title = "Homepage";
    const message = "Dynamic message inserted by EJS (backend)";

    res.render('index', { title, message });
});

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
});

