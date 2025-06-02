interface CelestialBody {
    name: string,
    mass: number
}

interface Star extends CelestialBody {
    age: number,
    planets: Planet[]
}

interface Planet extends CelestialBody {
    population: number,
    createSatellite: (name: string) => void
}

let sun: Star = {
    name: "Sol",
    mass: 1.989 * (10 ** 30),
    age: 999,
    planets: []
};

class MilkyWayPlanet implements Planet {
    name: string;
    mass: number;
    population: number;

    constructor(name: string, mass: number, population: number) {
        this.name = name;
        this.mass = mass;
        this.population = population;
    }

    createSatellite(name: string) {
        console.log("hello ", name);
        return;
    }
}

interface Planet {
    satellites?: string[]
}
