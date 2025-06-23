const args = process.argv;

const namedArgs = {};

process.argv.slice(2).forEach((arg, index, args) => {
    if (arg.startsWith("--")) {
        const argKey = arg.slice(2);
        const argValue = args[index + 1];

        namedArgs[argKey] = argValue;
    }
});

console.log("used arguments:");
console.log(namedArgs);
