const path = require("node:path");

const userInteraction = require("./modules/userInteraction");
const escapeHtmlFile = require("./modules/escapeHtmlFile");

function run() {
    if (process.argv.length >= 4) {
        escapeHtmlFile(path.resolve(process.argv[2]), path.resolve(process.argv[3]));
    } else {
        console.log("---------------------------");
        console.log("HTML Tag Escaper | v1.0");
        console.log("---------------------------\n");
        console.log("Args not informed. Please inform all paths to escape file.\n");
        userInteraction();
    }
}

run();
