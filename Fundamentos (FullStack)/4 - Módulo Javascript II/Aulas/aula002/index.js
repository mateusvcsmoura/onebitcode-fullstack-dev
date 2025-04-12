const array = [
    "Nível 1",
    ["Nível 2", 42, true],
    [
        ["Nível 3, 1º item", "Olá, Mundo!"],
        ["Nível 3, 2º item", "Oi, Mundo!"]
    ],
    []
];

// console.log(array);
// console.table(array);

// console.log(array[0]);
// console.log(array[1]);
// console.log(array[1][0]);

const matriz = [
    ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
    ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
    ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
];

matriz[0].push("l1, c5");
matriz.push(["l4, c1"]);

console.table(matriz);

// Iterando

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        let element = matriz[i][j];
        console.log(`Posição ${i}, ${j} | Valor: ${element}`);
    }
}