const path = require("node:path");
const fs = require("node:fs");

function createNotesFolder() {
    const folder = path.join(__dirname, "../", "notes");
    fs.mkdirSync(folder, { recursive: true });
}

module.exports = createNotesFolder;