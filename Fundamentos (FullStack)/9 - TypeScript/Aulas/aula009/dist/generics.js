"use strict";
function first(array) {
    return array[0];
}
function last(array) {
    return array[array.length - 1];
}
const pilots = ['Luke', 'Biggs', 'Wedge', 'Han', 'Lando'];
const numbers = [1, 2, 3, 4, 5];
const firstPilot = first(pilots); // any
const lastPilot = last(pilots); // string or undefined
const firstNumber = first(numbers);
const lastNumber = last(numbers);
