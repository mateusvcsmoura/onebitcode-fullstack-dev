const path = require('node:path');
const fs = require('node:fs');

function registerLog(log) {
    const dir = "log";
    const file = "log.txt";

    const dirPath = path.resolve(__dirname, "../", dir);
    const filePath = path.resolve(dirPath, file);

    const exists = fs.existsSync(filePath);

    if (exists) {
        fs.appendFile(filePath, `\n\n${log}`, 'utf-8', (e) => {
            if (e) throw e;
        });
    } else {
        fs.mkdir(dirPath, { recursive: true }, (e) => {
            if (e) throw e;

            fs.writeFileSync(filePath, log, 'utf-8');
        });
    }
}

module.exports = registerLog;
