function sum (param, ...numbers) {
    return numbers.reduce((accnum, num) => accnum + num, 0);
}

console.log(sum("string", 2, 3, 4, 1, 10, 15, 20, 25, 100, 320, 1000, 500));


