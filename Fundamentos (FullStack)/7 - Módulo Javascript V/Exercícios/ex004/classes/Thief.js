const Character = require('./Character.js');

class Thief extends Character {
    constructor(name, lifePoints, attackPoints, defensePoints) {
        super(name, lifePoints, attackPoints, defensePoints);
    }

    attack(target) {
        if (target instanceof Character) {
            const damage = 2 * (this.attackPoints - target.defensePoints);

            if (damage > 0) {
                target.lifePoints -= damage;

                return `=================\n${this.name} attacked ${target.name}\nDamage Delt: ${damage}\n${target.name} life remaining: ${target.lifePoints}\n=================`;
            } else {
                return `=================\n${this.name} tried to attack ${target.name} but failed because ap < dp\n=================`;
            }
        } else {
            return "you can only attack characters";
        }
    }
}

module.exports = Thief;