const askUser = require("./askUser");
const path = require("node:path");
const fs = require("node:fs");

async function findNote() {
    const note = await askUser("Enter Note: ");
    const notePath = path.join(__dirname, "../", "notes", "/", note);

    if (note === "id.txt") {
        console.log("cannot delete/read counter control file.");
        return;
    }

    const exists = fs.existsSync(notePath);

    if (exists) {
        return notePath;
    } else {
        console.log("note does not exist");
        return;
    }

}

module.exports = findNote;
