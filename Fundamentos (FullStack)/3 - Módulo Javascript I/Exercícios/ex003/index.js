let vehicles = [];

for (let i = 1; i < 3; i++) {
    let vehicleName = window.prompt(`Nome do Veículo ${i}`);
    let vehicleSpeed = parseFloat(window.prompt(`Velocidade do Veículo ${i}`));
    let vehicle = {};

    vehicle.vehicleName = vehicleName;
    vehicle.vehicleSpeed = vehicleSpeed;

    vehicles.push(vehicle);
}

vehicles[0].vehicleSpeed > vehicles[0 + 1].vehicleSpeed ? window.alert(`${vehicles[0].vehicleName} é o mais veloz, velocidade: ${vehicles[0].vehicleSpeed}km/h`) : window.alert(`${vehicles[0 + 1].vehicleName} é o mais veloz, velocidade: ${vehicles[0 + 1].vehicleSpeed}km/h`);


