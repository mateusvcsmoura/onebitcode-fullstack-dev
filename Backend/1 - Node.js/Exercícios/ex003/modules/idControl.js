const fs = require("node:fs");
const path = require("node:path");
const createNotesFolder = require("./createNotesFolder");

function idControl() {
    const idPath = path.join(__dirname, "../", "notes", "/", "id.txt");
    const exists = fs.existsSync(idPath);
    let id = 0;

    if (exists) {
        id = Number(fs.readFileSync(idPath, 'utf-8')) + 1;
        fs.writeFileSync(idPath, String(id), 'utf-8');
    } else {
        createNotesFolder();

        id = 0;
        fs.writeFileSync(idPath, "0", 'utf-8');

    }
    return id + 1;
}

module.exports = idControl;
