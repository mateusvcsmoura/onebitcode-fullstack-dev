const fs = require('fs');

console.log("Start");

fs.readFile('./file.txt', 'utf-8', (e, data) => {
    if (e) throw e;

    console.log(data);
});

console.log("End.");