type Spaceship = {
    name: string;
    pilot: string;
    crewLimit: number;
    crew: number;
    inMission: boolean;
    id: number;
}

let spaceships: Array<Spaceship> = [];
let id: number = 0;

// Functions

const idControl = () => {
    id++;
    return id;
}

const saveSpaceship = (name: string, pilot: string, crewLimit: number) => {
    const spaceship = {
        name,
        pilot,
        crewLimit,
        crew: 0,
        inMission: false,
        id: idControl()
    }

    return spaceship;
}

const addCrew = (targetCrew: number, spaceship: { name: string, crewLimit: number, crew: number, id: number }) => {
    while (targetCrew > spaceship.crewLimit) {
        window.alert(`Target Crew: ${targetCrew} is surpassing Crew Limit: ${spaceship.crewLimit}.\nTry adding another Crew Quantity`);

        targetCrew = Number(window.prompt(`Enter Crew Quantity | Limit: ${spaceship.crewLimit}`)) ?? 0;
    }

    window.alert(`Adding ${targetCrew} crew to ${spaceship.name} Spaceship`);

    spaceship.crew += targetCrew;

    return spaceship;
}

function menu() {
    let option: unknown;
    do {
        option = window.prompt(`Spaceships Control\n\n1 - Save Spaceship\n2 - Add crew to Spaceship\n3 - Send Spaceship to Mission\n4 - List all Spaceships\n5 - Leave\n\nEnter Option`);

        switch (option) {
            case "1":
                const spaceshipName: string = window.prompt("Enter Spaceship Name") ?? "";
                const spaceshipPilot: string = window.prompt("Enter Spaceship Pilot") ?? "";
                const crewLimit: number = Number(window.prompt("Enter Spaceship Crew Limit"));

                const spaceship = saveSpaceship(spaceshipName, spaceshipPilot, crewLimit);

                if (spaceship) {
                    spaceships.push(spaceship);
                }

                break;
            case "2":
                const spaceshipId = Number(window.prompt("Enter Spaceship ID"));
                const currentSpaceship = spaceships.find(s => s.id === spaceshipId);

                if (currentSpaceship) {
                    const targetCrew: number = Number(window.prompt("Enter Target Crew")) ?? 0;
                    addCrew(targetCrew, currentSpaceship);
                } else {
                    window.alert("Couldn't find any Spaceships with this ID");
                }

                break;
            case "3":
                window.alert("sending");
                break;
            case "4":
                window.alert("listing");
                break;
            case "5":
                break;
            default:
                window.alert("invalid option");
                break;
        }
    } while (option !== "5")
}

menu();
console.log(spaceships);