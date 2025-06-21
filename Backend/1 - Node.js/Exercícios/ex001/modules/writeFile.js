import { writeFile } from 'fs/promises';

const writeFileFn = async (content) => {
    try {
        await writeFile('file.txt', content, 'utf-8');
        console.log("successfully created file");
    } catch (e) {
        console.log(`error trying to write file: ${e.message}`);
    }
}

export { writeFileFn };
