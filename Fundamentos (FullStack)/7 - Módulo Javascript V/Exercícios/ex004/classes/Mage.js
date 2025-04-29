const Character = require('./Character.js');

class Mage extends Character {
    constructor(name, lifePoints, attackPoints, defensePoints, magicPoints) {
        super(name, lifePoints, attackPoints, defensePoints);

        this.magicPoints = magicPoints;
    }

    attack(target) {
        if (target instanceof Character) {
            const damage = (this.attackPoints + this.magicPoints) - target.defensePoints;

            if (damage > 0) {
                target.lifePoints -= damage;

                return `=================\n${this.name} attacked ${target.name}\nDamage Delt: ${damage}\n${target.name} life remaining: ${target.lifePoints}\n=================`;
            } else {
                return `=================\n${this.name} tried to attack ${target.name} but failed because ap + mp < dp\n=================`;
            }
        } else {
            return "you can only attack characters";
        }
    }


    heal(target) {
        if (target instanceof Character) {
            const healValue = (this.magicPoints) * 2;

            target.lifePoints += healValue;

            return `=================\n${this.name} healed ${target.name} in ${healValue}hp\n=================`;
        } else {
            return "you can only heal characters";
        }
    }
}

module.exports = Mage;