const fs = require('node:fs');

const fileName = 'file.txt';
const exists = fs.existsSync(fileName);

if (exists) {
    fs.readFile('file.txt', 'utf-8', (e, data) => {
        if (e) {
            console.log(`error trying to read file: ${e.message}`);
        }

        const entries = data.split(",");

        console.log(entries);

        entries.forEach(entry => console.log(entry));

        return;
    });
} else {
    console.log("file doesn't exist");
}

// try {
//     const data = fs.readFileSync('./file.txt', 'utf-8');
//     console.log(data);
// } catch (e) {
//     console.log(`error trying to read file: ${e.message}`);
// }