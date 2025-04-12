// let str = "Oitenta";
// console.log(...str);
// let arr = [1, 2, 3, 4];
// console.log(...arr);

// let strArr = [...str];
// console.log(strArr);

const towns = ["São Paulo", "Rio de Janeiro", "Recife", "Belo Horizonte", "Campinas"];
const townsCopy = [...towns]; // novo array
townsCopy.pop();
townsCopy.pop();
townsCopy.pop();
townsCopy.push("Macapá");

console.log({ towns, townsCopy });

const townsObj = {...towns};
const townsObjCopy = {...townsObj};
townsObjCopy.test = "Test";

console.log({ townsObj, townsObjCopy });

