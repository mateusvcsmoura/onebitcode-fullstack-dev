function dividir(num) {
    console.log(num);

    if (num % 2 === 0) {
        dividir(num / 2);
    } else {
        return num;
    }
}

// dividir(256);

function fatorial(num) {
    if (num === 0) { // Caso Base
        return 1;
    } else if (num === 1) { // Caso Base
        return 1;
    } else {
        return num * fatorial(num - 1); // Quando chega ao 0 ou 1, retorna o caso base (0, 1)
    }
}

console.log(fatorial(2));
console.log(fatorial(4));
console.log(fatorial(10));

