const Person = require("./Person");

const mateus = new Person("Mateus Moura", "7 de Setembro", 999, "Grajaú", "São Paulo", "SP");

console.log(mateus);
console.log(mateus.address.fullAddress());

