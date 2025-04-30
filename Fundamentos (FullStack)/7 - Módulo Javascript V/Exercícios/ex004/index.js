const Character = require('./classes/Character.js');
const Thief = require('./classes/Thief.js');
const Mage = require('./classes/Mage.js');
const Warrior = require('./classes/Warrior.js');

const mats = new Character("mats", 500, 350, 200);
const sofi = new Thief("sofi", 400, 375, 150);
const giga = new Mage("gigs", 350, 150, 200, 100);
const gabi = new Warrior("gabi", 700, 300, 250, 100, "defense");

console.log(mats.attack(sofi));
console.log(sofi.attack(mats));
console.log(giga.attack(mats));
console.log(mats.attack(giga));
console.log(giga.heal(mats));
console.log(gabi.togglePosition());
console.log(gabi.attack(mats));
console.log(gabi.togglePosition());
console.log(sofi.attack(gabi));

console.table({ mats, sofi, giga, gabi });
