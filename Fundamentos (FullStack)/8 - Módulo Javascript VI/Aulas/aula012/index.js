function waitFor(seconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, seconds * 1000);
    });
}

const numbers = [4, 5, 9, 10, 11, 13];

async function execute() {
    console.time('map');

    const squares = await Promise.all(numbers.map(async (n) => {
        await waitFor(2);

        return n ** 2;
    }));

    console.log(squares);
    console.timeEnd('map');
}

execute();