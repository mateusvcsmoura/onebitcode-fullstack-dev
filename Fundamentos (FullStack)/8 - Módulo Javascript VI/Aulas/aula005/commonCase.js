function execute() {
    // code

    return new Promise((resolve, reject) => {
        console.log("promise executing");

        setTimeout(() => {
            console.log("solving promise");

            resolve(true);
        }, 1000);
    });
}

const p = execute();

console.log(p);

setTimeout(() => {
    console.log(p);
}, 2000);
