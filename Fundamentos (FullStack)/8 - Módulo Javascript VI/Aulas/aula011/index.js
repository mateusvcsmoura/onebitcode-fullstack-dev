async function asyncSum(a, b) {
    if (typeof (a) !== "number" || typeof (b) !== "number") {
        return Promise.reject("arguments should be numbers");
    } else {
        return a + b;
    }
}

// async function execute() {
//     asyncSum(99, 99).then(result => console.log(result)).catch(e => console.log(e));
// }

async function execute() {
    try {
        const result = await asyncSum(99, null);

        console.log(result);
    } catch (e) {
        console.log(e);
    }
}

execute();
