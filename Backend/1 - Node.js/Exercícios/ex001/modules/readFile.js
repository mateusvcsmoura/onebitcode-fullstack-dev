import { readFile, access } from "fs/promises";
import { constants } from "fs";

const readFileFn = async (file) => {
    try {
        await access(file, constants.F_OK); // verify if file exists
        const data = await readFile(file, 'utf-8');
        console.log(data);
    } catch (e) {
        console.log(`error trying to read file: ${e.message}`);
    }
}

export { readFileFn };