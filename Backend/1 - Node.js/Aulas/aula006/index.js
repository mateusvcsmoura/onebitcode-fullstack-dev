const fs = require('node:fs');

// const readableStream = fs.createReadStream('file.txt');
const readableStream = fs.createReadStream('wallpaper-batman.jpg');
const buffer = [];

readableStream.on("data", (chunk) => {
    buffer.push(chunk);
    console.log("chunk processed");
});

readableStream.on("end", () => {
    console.log("Buffer: \n", buffer);

    // const allData = Buffer.concat(buffer).toString();
    // console.log(`read data: \n${allData}`);
});
