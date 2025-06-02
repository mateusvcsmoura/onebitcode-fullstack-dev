"use strict";
let sun = {
    name: "Sol",
    mass: 1.989 * (10 ** 30),
    age: 999,
    planets: []
};
class MilkyWayPlanet {
    constructor(name, mass, population) {
        this.name = name;
        this.mass = mass;
        this.population = population;
    }
    createSatellite(name) {
        console.log("hello ", name);
        return;
    }
}
