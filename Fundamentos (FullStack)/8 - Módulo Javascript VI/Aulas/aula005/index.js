const p = new Promise((resolve, reject) => {
    console.log("promise executing");

    setTimeout(() => {
        if (true) {
            reject(false);
        }

        console.log("solving promise");

        resolve(true);
    }, 2000);
});

console.log(p);

setTimeout(() => {
    console.log(p);
}, 3000);
