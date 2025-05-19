async function asyncSum(a, b) {
    return a + b;
}

async function asyncSubtract(a, b) {
    return a - b;
}

const sumResult = asyncSum(99, null);
const subtractResult = asyncSubtract(999, 3);

Promise.all([sumResult, subtractResult]).then(results => console.log(results)).catch(e => console.log(e));

const numbers = [4, 9, 5, 13, 77];

async function asyncSquare(number) {
    return number ** 2;
}

Promise.all(numbers.map(number => asyncSquare(number))).then(squares => console.log(squares)).catch(e => console.log(e));
