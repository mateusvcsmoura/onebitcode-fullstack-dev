const fs = require("node:fs");
const escapeHtmlSpecialCharacters = require("./escapeHtmlSpecialCharacters");

function escapeHtmlFile(inputFilePath, outputFilePath) {
    try {
        const fileContent = fs.readFileSync(inputFilePath, 'utf-8');
        const escapedContent = escapeHtmlSpecialCharacters(fileContent);

        fs.writeFileSync(outputFilePath, escapedContent, "utf-8");
        console.log(`Successfully escaped file: ${outputFilePath}.`);
    } catch (e) {
        console.log(`error: ${e.message}`);
        process.exit(1);
    }
}

module.exports = escapeHtmlFile;
