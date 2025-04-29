class Vehicle {
    move() {
        console.log("O veículo está se movendo.");
    }
}

class Car extends Vehicle {
    move() {
        console.log("O carro está se movendo.");
    }
}

class Ship extends Vehicle {
    move() {
        console.log("O navio está se movendo.");
    }
}

class Plane extends Vehicle {
    move(speed) {
        console.log(`A aeronave está voando a ${speed}km/h`);
    }
}

const vehicle = new Vehicle();
const delorean = new Car();
const blackPearl = new Ship();
const epoch = new Plane();

vehicle.move();
delorean.move();
blackPearl.move();
epoch.move(500);

function start(vehicle) {
    if (vehicle instanceof Vehicle) {
        console.log("Starting vehicle..");

        return vehicle.move();
    }
}

start(delorean);
start(blackPearl);
start(epoch);