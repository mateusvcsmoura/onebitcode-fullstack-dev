const Character = require('./Character.js');

class Warrior extends Character {
    constructor(name, lifePoints, attackPoints, defensePoints, shieldPoints, position) {
        super(name, lifePoints, attackPoints, defensePoints);

        this.shieldPoints = shieldPoints;
        this.position = position;

        this.watchPosition();
    }

    attack(target) {
        if (this.position === "attack") {
            return super.attack(target);
        } else {
            return `warrior class need to change stance before attacking`;
        }
    }

    watchPosition() {
        if (this.position === "defense") {
            this.defensePoints += this.shieldPoints;
        }
    }

    togglePosition() {
        if (this.position === "defense") {
            this.position = "attack";
        } else {
            this.position = "defense";
        }

        return `${this.name} changed position to ${this.position}`;
    }
}

module.exports = Warrior;
