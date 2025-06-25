const findNote = require("./findNote");
const fs = require("node:fs");

async function readNote() {
    const note = await findNote();

    if (note) {
        const data = fs.readFileSync(note, 'utf-8');
        console.log(`Note Content:\n\n${data}`);
    } else {
        return;
    }
}

module.exports = readNote;
