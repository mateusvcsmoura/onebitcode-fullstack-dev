type Planet = {
    name: string;
    cordinates: number[];
    situation: string;
    satellites: string[];
    id: number;
}

let planets: Array<Planet> = [];

let id: number = 0;

function idControl() {
    id++;
    return id;
}

const extractCordinates = (string: string) => {
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

    const cordinates: number[] = [x, y];

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

const savePlanet = (name: string, cordinates: number[], situation: string, satellites: string[]) => {
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

function menu() {
    let option: unknown;
    do {
        option = window.prompt(`Planets Control\n\n1 - Save Planet\n2 - Update Planet Situation\n3 - Add Satellite to Planet\n4 - Remove Satellite from Planet\n5 - List All Planets\n6 - Leave\n\nEnter Option`);

        switch (option) {
            case "1":
                const planetName: string = window.prompt("Enter Planet Name") ?? "Unknown";

                let planetCordinatesInput: string = window.prompt("Enter Planet Cordinates ex: [x, y]") ?? "";
                const planetCordinates: number[] | undefined = extractCordinates(planetCordinatesInput);
                if (!planetCordinates) break;

                const planetSituation: string = window.prompt("Enter Planet Situation [habitable - non habitable]") ?? "";

                let planetSatellitesInput: string = window.prompt("Enter Satellites ex: [sat1, sat2, sat3]") ?? "";
                const planetSatellites: string[] | undefined = extractSatellites(planetSatellitesInput);
                if (!planetSatellites) break;

                savePlanet(planetName, planetCordinates, planetSituation, planetSatellites);
                break;
            case "2":
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
    } while (option !== "6")
}

menu();
console.log(planets);