const fs = require('node:fs');

fs.rename("file.txt", "file.csv", (e) => {
    if (e) {
        console.log(`error renaming file: ${e.message}`);
    }

    console.log("successfully renamed file");

    return;
});

