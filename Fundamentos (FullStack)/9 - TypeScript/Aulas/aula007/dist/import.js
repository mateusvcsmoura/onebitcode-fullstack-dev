"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
let xwing = {
    weapons: 10,
    name: "xwing",
    pilot: "Mateus Moura",
    speed: 500
};
console.log(xwing);
console.log(lodash_1.default.camelCase(xwing.pilot));
