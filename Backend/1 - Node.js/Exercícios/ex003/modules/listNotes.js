const path = require("node:path");
const fs = require("node:fs");

function listNotes() {
    const dir = path.join(__dirname, "../", "notes");
    const exists = fs.existsSync(dir);

    if (exists) {
        let filesStr = "";

        const files = fs.readdirSync(dir, 'utf-8');
        files.forEach(file => {
            filesStr += file + " | ";
        });

        console.log(`User Notes\n\n${filesStr}`);
    } else {
        console.log("No Notes in storage.");
    }
}

module.exports = listNotes;
