const express = require("express");
const server = express();
const PORT = 3000;

server.get("/", (req, res) => {
    res.send("express server working! you are at root page");
});

server.get("/files", (req, res) => {
    res.send("you are at files page");
});

server.listen(PORT, () => {
    console.log(`express server running on http://localhost:${PORT}`);
});

