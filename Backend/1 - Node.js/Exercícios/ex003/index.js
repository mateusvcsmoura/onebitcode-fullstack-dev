const saveNote = require("./modules/saveNote");
const listNotes = require("./modules/listNotes");
const deleteNotes = require("./modules/deleteNote");
const readNote = require("./modules/readNote");
const askUser = require("./modules/askUser");

// SUGGESTION : FIX ID COUNTER WHEN DELETING A NOTE

async function main() {
    let option = "";
    do {
        let menu = `---------------------------------------\nNotes Central\n\n1 - Create New Note\n2 - List All Notes\n3 - Delete Note\n4 - Read Note\n5 - Leave\n\nOption: `;

        option = await askUser(menu);

        switch (option) {
            case "1":
                await saveNote();
                break;
            case "2":
                listNotes();
                break;
            case "3":
                await deleteNotes();
                break;
            case "4":
                await readNote();
                break;
            case "5":
                console.log("leaving..");
                break;
            default:
                console.log("select a valid option.");
        }
    } while (option !== "5");
}

main();

