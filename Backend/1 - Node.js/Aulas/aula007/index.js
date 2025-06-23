// process.stdout.write("hello world\n");

// process.stdin.on("data", (data) => {
//     process.stdout.write(`read data: ${data}`);
// });

const readline = require("node:readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("What is your name? ", (answer) => {
    rl.write(`Hello, ${answer}!\n`);
    rl.close();
});

rl.once("close", () => {
    rl.write("Goodbye.");
    process.exit(0);
});

rl.on("SIGINT", () => {
    rl.question("Want to leave [y/n]? ", (answer) => {
        if (answer.toLowerCase().trim() === "y") {
            process.exit(0);
        } else {
            rl.write("You chose to continue.");
        }
    });
});

