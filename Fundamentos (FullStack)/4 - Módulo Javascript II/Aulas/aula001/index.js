const array = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"];

// Adicionar elementos
// array.push(); - adiciona elemento no final do array

array.push("Mateus");

// Adiciona elemento no começo do array

array.unshift("João");

// Remover elementos
// array.pop(); - remove elemento no final do array

array.pop();

// Remove elemnto no começo do array

array.shift();

// Pesquisar por um elemento
// array.includes();

const inclui = array.includes("Gandalf");

// Pesquisar por indice de elemento
// array.indexOf();

const index = array.indexOf("Gandalf");

// Cortar e Concatenar
// array.slice(); - cortar e copiar o array

const hobbits = array.slice(0, 4);
const outros = array.slice(-4);

// console.log(array);
// console.log(hobbits);
// console.log(outros);

// array.concat(); - concatena o array

const sociedade = hobbits.concat(outros, "Boromir");
// console.log(sociedade);

// Substituição dos elementos
// array.splice();

const elementosRemovidos = sociedade.splice(4, 1, "Gandalf, o Cinzento");

// console.log(sociedade);
// console.log(elementosRemovidos);

// Iterar sobre os elementos do array

console.log(sociedade);

for (let indice = 0; indice < sociedade.length; indice++) {
    const elemento = sociedade[indice];
    console.log(`Elemento ${elemento} se encontra na posição: ${indice}.`);
}