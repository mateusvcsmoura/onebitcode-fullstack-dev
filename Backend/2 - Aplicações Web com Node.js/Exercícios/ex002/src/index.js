const express = require("express");
const router = require("./routes");
const path = require("node:path");

const app = express();
const PORT = process.env.PORT || 3000;

// EJS Settings
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static Files Settings
app.use(express.static('public'));

// Read Body Req Data
app.use(express.urlencoded({ extended: true }));

// App Routes
app.use(router);

app.listen(PORT, () => {
    console.log(`app running on http://localhost:${PORT}`);
});

