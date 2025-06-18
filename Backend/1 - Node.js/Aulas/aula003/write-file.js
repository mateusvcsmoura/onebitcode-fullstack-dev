const fs = require('node:fs');

const content = "entry1,entry2,entry3";

fs.writeFile('file.txt', content, 'utf-8', (e) => {
    if (e) {
        console.log(`error trying to write file: ${e.message}`);
    }

    console.log("successfully created file");

    return;
});

// try {
//     fs.writeFileSync('file.txt', "juice wrld 999", 'utf-8');
//     console.log("successfully created file");
// } catch (e) {
//     console.log(`error trying to write file: ${e.message}`);
// }

