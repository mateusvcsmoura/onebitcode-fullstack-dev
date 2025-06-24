const path = require("node:path");
const askFilePath = require("./askFilePath");
const escapeHtmlFile = require("./escapeHtmlFile");

async function userInteraction() {
    // node html-escaper.js <inputPath> <outputPath>
    let inputPath = process.argv[2];
    if (!inputPath) {
        inputPath = await askFilePath("Enter Input Path: ");
    }
    inputPath = path.resolve(inputPath); // gets absolute path

    const defaultName = "escaped-" + path.basename(inputPath) + ".txt";

    const answer = await askFilePath(`Enter Output Path (standard: ${defaultName}): `);
    let outputPath = answer.length > 0 ? answer : defaultName;
    outputPath = path.resolve(outputPath);

    escapeHtmlFile(inputPath, outputPath);
}

module.exports = userInteraction;

