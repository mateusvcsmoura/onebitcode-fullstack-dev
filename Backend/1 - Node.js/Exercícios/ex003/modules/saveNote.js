const askUser = require("./askUser");
const idControl = require("./idControl");

const path = require("node:path");
const fs = require("node:fs");

async function saveNote() {
    const content = await askUser("Enter Note Text: ");

    const folder = path.join(__dirname, "../", "notes");
    const standardPath = `note-${idControl()}.txt`;

    const fileName = await askUser(`file name (standard: ${standardPath}): `);
    let filePath = path.join(folder, fileName.length > 0 ? fileName : standardPath);

    fs.writeFileSync(filePath, content, 'utf-8');
}

module.exports = saveNote;
