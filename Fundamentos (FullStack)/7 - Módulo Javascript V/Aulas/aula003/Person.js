const Address = require("./Address");

class Person {
    constructor(fullname, street, number, neighbourhood, city, state) {
        this.fullname = fullname;
        this.address = new Address(street, number, neighbourhood, city, state);
    }
}

module.exports = Person;
