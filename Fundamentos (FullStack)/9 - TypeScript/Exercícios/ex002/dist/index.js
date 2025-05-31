"use strict";
let planets = [];
let id = 0;
function idControl() {
    id++;
    return id;
}
const extractCordinates = (string) => {
    let x = 0;
    let y = 0;
    if (string.length > 0) {
        const parts = string.split(",").map(part => part.trim());
        if (parts.length !== 2) {
            window.alert("Insert Cordinates in the format 'x,y'.");
            return;
        }
        x = Number(parts[0]);
        y = Number(parts[1]);
        if (isNaN(x) || isNaN(y)) {
            window.alert("Both cordinates should be numbers.");
            return;
        }
    }
    else {
        window.alert("Type something.");
        return;
    }
    const cordinates = [x, y];
    return cordinates;
};
const extractSatellites = (string) => {
    if (string.length > 0) {
        const parts = string.split(",").map(part => part.trim());
        if (parts.length < 1) {
            window.alert("Insert Satellites in the format: 'sat1, sat2'.");
            return;
        }
        return parts;
    }
    else {
        window.alert("Type something.");
        return;
    }
};
const findPlanet = (id) => {
    const planet = planets.find(planet => planet.id === id);
    return planet;
};
const savePlanet = (name, cordinates, situation, satellites) => {
    const planet = {
        name,
        cordinates,
        situation,
        satellites,
        id: idControl()
    };
    planets.push(planet);
    return planet;
};
function menu() {
    var _a, _b, _c, _d, _e;
    let option;
    do {
        option = window.prompt(`Planets Control\n\n1 - Save Planet\n2 - Update Planet Situation\n3 - Add Satellite to Planet\n4 - Remove Satellite from Planet\n5 - List All Planets\n6 - Leave\n\nEnter Option`);
        switch (option) {
            case "1":
                const planetName = (_a = window.prompt("Enter Planet Name")) !== null && _a !== void 0 ? _a : "Unknown";
                let planetCordinatesInput = (_b = window.prompt("Enter Planet Cordinates ex: [x, y]")) !== null && _b !== void 0 ? _b : "";
                const planetCordinates = extractCordinates(planetCordinatesInput);
                if (!planetCordinates)
                    break;
                const planetSituation = (_c = window.prompt("Enter Planet Situation [habitable - non habitable]")) !== null && _c !== void 0 ? _c : "";
                let planetSatellitesInput = (_d = window.prompt("Enter Satellites ex: [sat1, sat2, sat3]")) !== null && _d !== void 0 ? _d : "";
                const planetSatellites = extractSatellites(planetSatellitesInput);
                if (!planetSatellites)
                    break;
                savePlanet(planetName, planetCordinates, planetSituation, planetSatellites);
                window.alert(`Planet: ${planetName} was saved.`);
                break;
            case "2":
                const planet = findPlanet(Number(window.prompt("Enter Planet ID")));
                if (!planet) {
                    window.alert("Couldn't find any Planets with this ID");
                    break;
                }
                const newSituation = (_e = window.prompt(`Enter new ${planet.name} Planet situation`)) !== null && _e !== void 0 ? _e : "habitable";
                planet.situation = newSituation;
                window.alert(`${planet.name} situation was changed to ${planet.situation}`);
                break;
            case "3":
                break;
            case "4":
                break;
            case "5":
                break;
            case "6":
                break;
            default:
                window.alert("Invalid option");
                break;
        }
    } while (option !== "6");
}
menu();
console.log(planets);
