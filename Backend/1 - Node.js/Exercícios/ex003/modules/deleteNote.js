const findNote = require("./findNote");
const fs = require("node:fs");

async function deleteNote() {
    const note = await findNote();

    if (note) {
        fs.unlink(note, (e) => {
            if (e) throw e;
        });

        console.log("successfully deleted note");
    } else {
        return;
    }
}

module.exports = deleteNote;
