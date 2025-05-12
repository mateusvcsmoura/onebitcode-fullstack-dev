const User = require('./entities/User');
const Loan = require('./entities/Loan');

class App {
    static #users = [];

    static createUser(fullname, email) {
        if (this.#users.find(b => b.email === email)) {
            return "e-mail already in use";
        }

        const newUser = new User(fullname, email);

        this.#users.push(newUser);

        return newUser;
    }

    static findUserByEmail(email) {
        const userExists = this.#users.find(u => u.email === email);

        if (userExists) {
            return userExists;
        } else {
            return "e-mail not registered in database";
        }
    }

    static updateFee(newFee) {
        if (typeof (newFee) !== "number" || newFee < 0) {
            return "invalid fee";
        }

        Loan.fee = newFee;

        return `new fee: ${Loan.fee}`;
    }

    static deposit(email, amount) {
        const user = this.findUserByEmail(email);

        if (typeof (user) === "string") {
            return user;
        }

        return user.account.deposit(amount);
    }

    static transfer(senderEmail, amount, receiverEmail) {
        const user = this.findUserByEmail(senderEmail);

        if (typeof (user) === "string") {
            return user;
        }

        return user.account.transfer(amount, receiverEmail);
    }

    static loan(email, amount, plots) {
        const user = this.findUserByEmail(email);

        if (typeof (user) === "string") {
            return user;
        }

        return user.account.loan(amount, plots);
    }

    static payLoanPlots(email, plots) {
        const user = this.findUserByEmail(email);

        if (typeof (user) === "string") {
            return user;
        }

        return user.account.payLoanPlots(plots);
    }

    static get users() {
        return this.#users;
    }

    static getDeposits(email) {
        const user = this.findUserByEmail(email);

        if (typeof (user) === "string") {
            return user;
        }

        return user.account.deposits;
    }

    static getCurrentLoans(email) {
        const user = this.findUserByEmail(email);

        if (typeof (user) === "string") {
            return user;
        }

        return user.account.loans;
    }

    static getOldLoans(email) {
        const user = this.findUserByEmail(email);

        if (typeof (user) === "string") {
            return user;
        }

        return user.account.oldLoans;
    }

    static getTransfers(email) {
        const user = this.findUserByEmail(email);

        if (typeof (user) === "string") {
            return user;
        }

        return user.account.transfers;
    }

    static showAllData(email) {
        const allDeposits = this.getDeposits(email);
        const allTransfers = this.getTransfers(email);
        const allCurrentLoans = this.getCurrentLoans(email);
        const allOldLoans = this.getOldLoans(email);

        return {
            allDeposits,
            allTransfers,
            allCurrentLoans,
            allOldLoans
        }
    }
}

module.exports = App;