function execute() {
    // code

    return new Promise((resolve, reject) => {
        console.log("promise executing");

        setTimeout(() => {

            if (false) {
                reject("rejected promise");
            } else {
                console.log("solving promise");

                resolve(999);
            }

        }, 2000);
    });
}

execute().then((result) => {
    console.log(`promise was solved. result: ${result}.`);
}).catch((e) => {
    console.log(`promise was rejected. reason: ${e}.`);
}).finally(() => {
    console.log(`promise finished.`);
});

