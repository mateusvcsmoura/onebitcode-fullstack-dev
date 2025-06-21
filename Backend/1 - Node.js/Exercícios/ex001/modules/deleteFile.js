import { unlink } from "fs/promises";

const deleteFileFn = async (file) => {
    try {
        await unlink(file);
        console.log("successfully deleted file");
    } catch (e) {
        console.log(`error trying to delete file: ${e.message}`);
    }
}

export { deleteFileFn };