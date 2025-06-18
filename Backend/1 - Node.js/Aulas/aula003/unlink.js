const fs = require('node:fs');

fs.unlink('file.csv', (e) => {
    if (e) {
        console.log(`error deleting file: ${e.message}`);
    }

    console.log("successfully deleted file");

    return;
});

