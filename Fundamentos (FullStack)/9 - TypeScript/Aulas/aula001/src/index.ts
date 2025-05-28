function sendSpaceship(name: string, captain: string) {
    const spaceship = {
        name,
        captain,
        speed: 20,
        inMission: true,
        crew: []
    }

    window.alert(`Spaceship ${spaceship.name} | Captain: ${spaceship.captain} was sent to mission`);

    return spaceship;
}

function accelerate(targetSpeed: number, spaceship: { name: string, speed: number }) {
    if (spaceship.speed > targetSpeed) {
        window.alert(`Reducing ${spaceship.name} velocity to ${targetSpeed}..`);
    } else if (spaceship.speed < targetSpeed) {
        window.alert(`Increasing ${spaceship.name} velocity to ${targetSpeed}..`);
    } else {
        window.alert("Holding current speed");
    }
}

const spaceshipName = window.prompt("Enter Spaceship Name");
const spaceshipCaptain = window.prompt("Enter Spaceship Captain Name");

if (spaceshipName && spaceshipCaptain) {
    const currentShip = sendSpaceship(spaceshipName, spaceshipCaptain);
    const speed = Number(window.prompt("Enter Speed"));

    accelerate(speed, currentShip);
} else {
    window.alert("Spaceship Name and Captain are required.");
}
