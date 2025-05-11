class Transfer {
    constructor(sender, receiver, amount) {
        this.amount = amount;
        this.sender = sender;
        this.receiver = receiver;
        this.createdAt = new Date();
    }
}

module.exports = Transfer;