"use strict";
let spaceships = [];
let id = 0;
// Functions
const idControl = () => {
    id++;
    return id;
};
const saveSpaceship = (name, pilot, crewLimit) => {
    const spaceship = {
        name,
        pilot,
        crewLimit,
        crew: 0,
        inMission: false,
        id: idControl()
    };
    return spaceship;
};
const addCrew = (targetCrew, spaceship) => {
    var _a;
    while (targetCrew > spaceship.crewLimit) {
        window.alert(`Target Crew: ${targetCrew} is surpassing Crew Limit: ${spaceship.crewLimit}.\nTry adding another Crew Quantity`);
        targetCrew = (_a = Number(window.prompt(`Enter Crew Quantity | Limit: ${spaceship.crewLimit}`))) !== null && _a !== void 0 ? _a : 0;
    }
    window.alert(`Adding ${targetCrew} crew to ${spaceship.name} Spaceship`);
    spaceship.crew += targetCrew;
    return spaceship;
};
function menu() {
    var _a, _b, _c;
    let option;
    do {
        option = window.prompt(`Spaceships Control\n\n1 - Save Spaceship\n2 - Add crew to Spaceship\n3 - Send Spaceship to Mission\n4 - List all Spaceships\n5 - Leave\n\nEnter Option`);
        switch (option) {
            case "1":
                const spaceshipName = (_a = window.prompt("Enter Spaceship Name")) !== null && _a !== void 0 ? _a : "";
                const spaceshipPilot = (_b = window.prompt("Enter Spaceship Pilot")) !== null && _b !== void 0 ? _b : "";
                const crewLimit = Number(window.prompt("Enter Spaceship Crew Limit"));
                const spaceship = saveSpaceship(spaceshipName, spaceshipPilot, crewLimit);
                if (spaceship) {
                    spaceships.push(spaceship);
                }
                break;
            case "2":
                const spaceshipId = Number(window.prompt("Enter Spaceship ID"));
                const currentSpaceship = spaceships.find(s => s.id === spaceshipId);
                if (currentSpaceship) {
                    const targetCrew = (_c = Number(window.prompt("Enter Target Crew"))) !== null && _c !== void 0 ? _c : 0;
                    addCrew(targetCrew, currentSpaceship);
                }
                else {
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
    } while (option !== "5");
}
menu();
console.log(spaceships);
