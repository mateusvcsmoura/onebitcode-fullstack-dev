class Property {
    constructor(area, price) {
        this.area = area;
        this.price = price;
    };

    getPricePerSquareMeter() {
        return this.price / this.area;
    };
};

class House extends Property { };

class Apartment extends Property {
    constructor(number, area, price) {
        super(area, price);
        this.number = number;
    };

    getFloor() {
        return this.number.slice(0, -2);
    }
};

const land = new Property(200, 50000);
const house = new House(120, 200000);
const apartment = new Apartment("999", 100, 160000);

console.log(land);
console.log(house);
console.log(house instanceof Property);
console.log(apartment);
console.log(apartment.getFloor());
console.log(apartment.getPricePerSquareMeter());