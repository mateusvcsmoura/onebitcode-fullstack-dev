import { writeFileFn } from "./modules/writeFile.js";
import { updateFileFn } from "./modules/updateFile.js";
import { readFileFn } from "./modules/readFile.js";
import { deleteFileFn } from "./modules/deleteFile.js";

async function main() {
    await writeFileFn('jw');
    await readFileFn('file.txt');
    await updateFileFn('mateuszin');
    await readFileFn('file.txt');
    await deleteFileFn('file.txt');
}

main();