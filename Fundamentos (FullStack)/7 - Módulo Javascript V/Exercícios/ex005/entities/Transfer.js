const Deposit = require('./Deposit');

class Transfer extends Deposit {
    constructor(sender, receiver, amount) {
        this.amount = super(amount);
        this.sender = sender;
        this.receiver = receiver;
        this.createdAt = new Date();
    }
}

module.exports = Transfer;