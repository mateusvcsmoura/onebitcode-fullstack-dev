import { Spaceship } from "./export";
import lodash from "lodash";

interface BattleSpaceship extends Spaceship {
    weapons: number;
}

let xwing: BattleSpaceship = {
    weapons: 10,
    name: "xwing",
    pilot: "Mateus Moura",
    speed: 500
}

console.log(xwing);
console.log(lodash.camelCase(xwing.pilot));