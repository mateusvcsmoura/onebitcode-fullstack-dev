const Character = require('./Character.js');

class Warrior extends Character {
    constructor(name, lifePoints, attackPoints, defensePoints, shieldPoints, position) {
        super(name, lifePoints, attackPoints, defensePoints);

        this.shieldPoints = shieldPoints;
        this.position = position;

        this.watchPosition();
    }

    attack(target) {
        if (target instanceof Character) {
            if (this.position === "attack") {
                const damage = this.attackPoints - target.defensePoints;

                if (damage > 0) {
                    target.lifePoints -= damage;

                    return `=================\n${this.name} attacked ${target.name}\nDamage Delt: ${damage}\n${target.name} life remaining: ${target.lifePoints}\n=================`;
                } else {
                    return `=================\n${this.name} tried to attack ${target.name} but failed because ap < dp\n=================`;
                }
            } else {
                return `warrior class need to change position before attacking`;
            }
        } else {
            return "you can only attack characters";
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
