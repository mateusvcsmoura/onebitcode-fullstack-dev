class Address {
    constructor(street, number, neighbourhood, city, state) {
        this.street = street;
        this.number = number;
        this.neighbourhood = neighbourhood;
        this.city = city;
        this.state = state;
    }

    fullAddress() {
        return `Street: ${this.street}, Nº: ${this.number}. ${this.neighbourhood}, ${this.city}/${this.state}`;
    }
};

module.exports = Address;
