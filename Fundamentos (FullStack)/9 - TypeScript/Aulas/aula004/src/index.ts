let literal: "Hello, World!";
let pi: 3.14;
let option: "Yes" | "No" | "Maybe";
let option2: null | boolean;

type Planet = "Mercúrio" | "Vênus" | "Terra" | "Marte" | "Júpiter" | "Saturno" | "Urano" | "Netuno" | "Plutão";

let planet: Planet;
planet = "Júpiter";

const checkPlanet = (planet: Planet) => {
    if (planet === "Júpiter") {
        return console.log("Jupiter we are.");
    }
}

type GreetingCallback = (name: string) => void;

function greet(callbackfn: GreetingCallback) {
    callbackfn("mats");
}
