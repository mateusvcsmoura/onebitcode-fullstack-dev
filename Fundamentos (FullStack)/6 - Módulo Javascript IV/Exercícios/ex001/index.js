const average = (...numbers) => {
    const elementsSum = numbers.reduce((accnum, num) => accnum + num, 0);
    const arrayLength = numbers.length;

    return elementsSum / arrayLength;
};

const weightedAverage = (...obj) => {
    const elementsSum = obj.reduce((accnum, {n, p}) => accnum + (n * (p ?? 1)), 0);
    const weightsSum = obj.reduce((accnum, obj) => accnum + (obj.p ?? 1), 0);

    return elementsSum / weightsSum;
};

const median = (...numbers) => {
    if (numbers.length % 2 === 0) {
        return average(numbers[Math.round(numbers.length / 2) - 1], numbers[Math.round(numbers.length / 2)]);
    } else {
        const medianIndex = Math.round(numbers.length / 2) - 1;

        return numbers[medianIndex];
    }
};

const mode = (...numbers) => {
    // [[n, qtd], [n, qtd], [n, qtd]]
    const quantities = numbers.map(num => [
        num, 
        numbers.filter(n => num === n).length
    ]);

    quantities.sort((a, b) => b[1] - a[1]);

    return quantities[0][0];
};

console.log(average(2, 6, 3, 7, 4));
console.log(weightedAverage({ n: 7, p: 2}, { n: 9, p: 5 }, { n: 3, p: 1 }));
console.log(median(2, 4, 5, 7, 42, 99));
console.log(mode(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4));

