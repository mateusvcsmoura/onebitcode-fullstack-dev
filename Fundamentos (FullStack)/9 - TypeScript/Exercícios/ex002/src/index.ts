type planetSituation = "habitable" | "non habitable";

type planetCordinates = [number, number];

type Planet = {
    name: string;
    cordinates: planetCordinates;
    situation: planetSituation;
    satellites: string[];
    id: number;
}

let planets: Array<Planet> = [];

let id: number = 0;

// Functions

function idControl() {
    id++;
    return id;
}

function isValidSituation(situation: string): situation is planetSituation {
    return situation === "habitable" || situation === "non habitable";
}

const extractCordinates = (string: string): planetCordinates | undefined => {
    let x: number = 0;
    let y: number = 0;

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
    } else {
        window.alert("Type something.");
        return;
    }

    const cordinates: planetCordinates = [x, y];

    return cordinates;
}

const extractSatellites = (string: string) => {
    if (string.length > 0) {
        const parts = string.split(",").map(part => part.trim());

        if (parts.length < 1) {
            window.alert("Insert Satellites in the format: 'sat1, sat2'.");
            return;
        }

        return parts;
    } else {
        window.alert("Type something.");
        return;
    }
}

const findPlanet = (id: number) => {
    const planet = planets.find(planet => planet.id === id);

    return planet;
}

const savePlanet = (name: string, cordinates: planetCordinates, situation: planetSituation, satellites: string[]) => {
    const planet = {
        name,
        cordinates,
        situation,
        satellites,
        id: idControl()
    }

    planets.push(planet);

    return planet;
}

// Menu Options

function option1() {
    const planetName: string = window.prompt("Enter Planet Name") ?? "Unknown";

    let planetCordinatesInput: string = window.prompt("Enter Planet Cordinates ex: [x, y]") ?? "";
    const planetCordinates: planetCordinates | undefined = extractCordinates(planetCordinatesInput);
    if (!planetCordinates) return;

    const planetSituationInput: string = window.prompt("Enter Planet Situation [habitable - non habitable]") ?? "";

    if (!isValidSituation(planetSituationInput)) {
        window.alert("Situation is not valid.");
        return;
    }

    const planetSituation: planetSituation = planetSituationInput;

    let planetSatellitesInput: string = window.prompt("Enter Satellites ex: [sat1, sat2, sat3]") ?? "";
    const planetSatellites: string[] | undefined = extractSatellites(planetSatellitesInput);
    if (!planetSatellites) return;

    const savedPlanet = savePlanet(planetName, planetCordinates, planetSituation, planetSatellites);

    if (savedPlanet) {
        return window.alert(`Planet: ${planetName} was saved.`);
    } else {
        throw new Error("Error while trying to save planet. Check functions params/args");
    }
}

function option2() {
    const planet: Planet | undefined = findPlanet(Number(window.prompt("Enter Planet ID")));

    if (!planet) {
        window.alert("Couldn't find any Planets with this ID");
        return;
    }

    let newSituation: string = window.prompt(`Enter new ${planet.name} Planet situation`) ?? "";

    if (!isValidSituation(newSituation)) {
        window.alert("Situation is not valid.");
        return;
    }

    const planetSituation: planetSituation = newSituation;

    planet.situation = planetSituation;

    return window.alert(`${planet.name} situation was changed to ${planet.situation}`);
}

function option3() {
    const planet: Planet | undefined = findPlanet(Number(window.prompt("Enter Planet ID")));

    if (!planet) {
        window.alert("Couldn't find any Planets with this ID");
        return;
    }

    let satellitesInput: string = window.prompt("Enter Satellites ex: [sat1, sat2, sat3]") ?? "";
    const satellites: string[] | undefined = extractSatellites(satellitesInput);
    if (!satellites) return;

    satellites.forEach(satellite => planet.satellites.push(satellite));

    window.alert(`${satellitesInput} satellites added to ${planet.name} Planet.`);
}

function option4() {
    const planet: Planet | undefined = findPlanet(Number(window.prompt("Enter Planet ID")));

    if (!planet) {
        window.alert("Couldn't find any Planets with this ID");
        return;
    }

    const satelliteToRemove = window.prompt(`Planet Info\n\nPlanet: ${planet.name}\nSatellites: ${planet.satellites}\n\nWitch Satellite do you want to remove?`)?.toLowerCase() ?? "";

    if (satelliteToRemove !== "" && planet.satellites.length > 0) {
        const foundSatellite = planet.satellites.findIndex(s => s.toLowerCase() === satelliteToRemove.toLowerCase());

        if (foundSatellite !== -1) {
            planet.satellites.splice(foundSatellite, 1);

            window.alert(`Removed ${satelliteToRemove} from ${planet.name} Planet`);
        } else {
            window.alert("Wrong input. Type a Registered Satellite.");
        }
    } else {
        return window.alert("Wrong input. Type something or check if there is a Satellite registered on this Planet.");
    }

    return;
}

function option5() {
    if (planets.length > 0) {
        let message: string = "Planets Registered\n\n";

        planets.map((planet) => {
            message += `\nPlanet ${planet.name}\nCordinates: ${planet.cordinates}\nSituation: ${planet.situation}\nSatellites: ${planet.satellites}\nID: ${planet.id}\n`;
        });

        return window.alert(message);
    } else {
        return window.alert("Not enough Planets registered");
    }
}

function menu() {
    let option: unknown;
    do {
        option = window.prompt(`Planets Control\n\n1 - Save Planet\n2 - Update Planet Situation\n3 - Add Satellite to Planet\n4 - Remove Satellite from Planet\n5 - List All Planets\n6 - Leave\n\nEnter Option`);

        switch (option) {
            case "1":
                option1();
                break;
            case "2":
                option2();
                break;
            case "3":
                option3();
                break;
            case "4":
                option4();
                break;
            case "5":
                option5();
                break;
            case "6":
                break;
            default:
                window.alert("Invalid option");
                break;
        }
    } while (option !== "6")
}

menu();
console.log(planets);