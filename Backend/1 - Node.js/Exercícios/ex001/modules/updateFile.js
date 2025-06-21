import { writeFile } from 'fs/promises';

const updateFileFn = async (content) => {
    try {
        await writeFile('file.txt', content, 'utf-8');
        console.log("successfully updated file");
    } catch (e) {
        console.log(`error trying to update file: ${e.message}`);
    }
}

export { updateFileFn };