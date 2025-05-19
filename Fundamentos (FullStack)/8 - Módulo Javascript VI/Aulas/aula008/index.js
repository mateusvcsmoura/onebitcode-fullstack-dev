function asyncSum(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject('arguments must be of type number');
        } else {
            resolve(a + b);
        }
    })
}

function asyncSubtract(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject('arguments must be of type number');
        } else {
            resolve(a - b);
        }
    })
}

const sumResult = asyncSum(99, 99);
const subtractResult = asyncSubtract(999, 3);

Promise.all([sumResult, subtractResult]).then(results => console.log(results)).catch(e => console.log(e));

const numbers = [4, 9, 5, 13, 77];

function asyncSquare(number) {
    return new Promise((resolve, reject) => {
        if (typeof (number) !== "number") {
            reject('arguments must be of type number');
        } else {
            resolve(number ** 2);
        }
    });
}

Promise.all(numbers.map(number => asyncSquare(number))).then(squares => console.log(squares)).catch(e => console.log(e));
