async function asyncSum(a, b) {
    if (typeof (a) !== "number" || typeof (b) !== "number") {
        return Promise.reject("arguments should be numbers");
    } else {
        return a + b;
    }
}

async function asyncSubtract(a, b) {
    if (typeof (a) !== "number" || typeof (b) !== "number") {
        return Promise.reject("arguments should be numbers");
    } else {
        return a - b;
    }
}

const sumResult = asyncSum(99, 99);
const subtractResult = asyncSubtract(999, 3);

Promise.all([sumResult, subtractResult]).then(results => console.log(results)).catch(e => console.log(e));

const numbers = [4, 9, 5, 13, 77];

async function asyncSquare(number) {
    if (typeof (number) !== "number") {
        return Promise.reject("arguments should be numbers");
    } else {
        return number ** 2;
    }
}

Promise.all(numbers.map(number => asyncSquare(number))).then(squares => console.log(squares)).catch(e => console.log(e));
