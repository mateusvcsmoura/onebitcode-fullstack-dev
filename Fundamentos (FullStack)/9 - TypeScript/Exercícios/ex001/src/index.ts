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

const findSpaceship = (spaceshipId: number) => {
    const currentSpaceship = spaceships.find(s => s.id === spaceshipId);

    return currentSpaceship;
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
    if (spaceship.crew === spaceship.crewLimit) {
        window.alert(`Cannot add Crew to ${spaceship.name} because its Crew Limit is full: ${spaceship.crew}/${spaceship.crewLimit}`);
        return;
    }

    while (targetCrew > spaceship.crewLimit || targetCrew + spaceship.crew > spaceship.crewLimit) {
        window.alert(`Current Crew: ${spaceship.crew}\nTarget Crew: ${targetCrew} is surpassing Crew Limit: ${spaceship.crewLimit}.\nTry adding another Crew Quantity`);

        let input: string | null;

        do {
            input = window.prompt(`Enter Crew Quantity | Limit: ${spaceship.crewLimit - spaceship.crew}`);
            targetCrew = Number(input);
        } while (isNaN(targetCrew));
    }

    window.alert(`Adding ${targetCrew} crew to ${spaceship.name} Spaceship`);

    spaceship.crew += targetCrew;

    return spaceship;
}

const sendToMission = (spaceship: { name: string, inMission: boolean, crewLimit: number, crew: number }) => {
    if (spaceship.inMission === true) {
        window.alert(`${spaceship.name} is already on mission.`);
        return;
    } else if (spaceship.crew < (Math.round(spaceship.crewLimit / 3))) {
        window.alert(`${spaceship.name} needs at least ${Math.round(spaceship.crewLimit / 3)} crew to go on a mission.\nCurrent crew: ${spaceship.crew}`);
        return;
    } else {
        spaceship.inMission = true;
        window.alert(`${spaceship.name} was sent to mission.`);
        return spaceship;
    }
}

const listAllSpaceships = () => {
    let message: string = "";

    if (spaceships.length > 0) {
        message += "Spaceships\n\n";

        spaceships.map((spaceship) => {
            message += `Name: ${spaceship.name} | ID: ${spaceship.id}\nPilot: ${spaceship.pilot}\nCurrent Crew: ${spaceship.crew} | Crew Limit: ${spaceship.crewLimit}\nIn Mission: ${spaceship.inMission}\n\n`;
        });
    } else {
        message += "There's no Spaceships in storage.";
    }

    return message;
}

function menu() {
    let option: unknown;
    do {
        option = window.prompt(`Spaceships Control\n\n1 - Save Spaceship\n2 - Add crew to Spaceship\n3 - Send Spaceship to Mission\n4 - List all Spaceships\n5 - Leave\n\nEnter Option`);

        switch (option) {
            case "1":
                const spaceshipName: string = window.prompt("Enter Spaceship Name") ?? "";
                const spaceshipPilot: string = window.prompt("Enter Spaceship Pilot") ?? "";
                let crewLimit: number = Number(window.prompt("Enter Spaceship Crew Limit"));

                while (crewLimit < 1) {
                    crewLimit = Number(window.prompt(`Crew Limit cannot be 0.\nEnter Spaceship Crew Limit`));
                }

                const spaceship = saveSpaceship(spaceshipName, spaceshipPilot, crewLimit);

                if (spaceship) {
                    spaceships.push(spaceship);
                }

                break;
            case "2":
                const currentSpaceship = findSpaceship(Number(window.prompt("Enter Spaceship ID")));

                if (typeof currentSpaceship !== "undefined") {
                    let targetCrew: number;
                    let input: string | null;

                    do {
                        input = window.prompt("Enter Target Crew");
                        targetCrew = Number(input);
                    } while (isNaN(targetCrew));

                    addCrew(targetCrew, currentSpaceship);
                } else {
                    window.alert("Couldn't find any Spaceships with this ID");
                }

                break;
            case "3":
                const spaceshipToMission = findSpaceship(Number(window.prompt("Enter Spaceship ID")));

                if (typeof spaceshipToMission !== "undefined") {
                    sendToMission(spaceshipToMission);
                } else {
                    window.alert("Couldn't find any Spaceships with this ID");
                }

                break;
            case "4":
                window.alert(listAllSpaceships());
                break;
            case "5":
                break;
            default:
                window.alert("Invalid option");
                break;
        }
    } while (option !== "5")
}

menu();
console.log(spaceships);