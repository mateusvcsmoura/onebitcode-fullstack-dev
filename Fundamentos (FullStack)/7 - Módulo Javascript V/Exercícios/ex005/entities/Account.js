const Transfer = require('./Transfer');
const Deposit = require('./Deposit');
const Loan = require('./Loan');

class Account {
    #balance = 10;
    #deposits = [];
    #transfers = [];
    #loans = [];

    constructor(user) {
        this.user = user;
    }

    // getters

    get balance() {
        return this.#balance;
    }

    get deposits() {
        return this.#deposits;
    }

    get transfers() {
        return this.#transfers;
    }

    get loans() {
        return this.#loans;
    }

    transfer(amount, receiver) {
        const currentBalance = this.#balance;

        if (amount > currentBalance) {
            return "not enough money on balance to transfer";
        }

        if (!(receiver instanceof Account)) {
            return "you can only transfer money to registered accounts";
        }

        this.#balance -= amount;

        const newTransfer = new Transfer(this, receiver, amount);

        this.#transfers.push(newTransfer);

        receiver.receiveTransfer(amount);

        return newTransfer;
    }

    receiveTransfer(amount) {
        return this.#balance += amount;
    }

    deposit(amount) {
        this.#balance += amount;

        const newDeposit = new Deposit(amount);

        this.#deposits.push(newDeposit);

        return newDeposit;
    }

    loan(amount, plots) {
        if (amount < 1 || plots < 1) {
            return "invalid loan";
        }

        if (this.loans.length > 0) {
            return "you cannot have another loan. pay the current one."
        }

        const newLoan = new Loan(amount, plots);

        this.#loans.push(newLoan);
        this.#balance += amount;

        return newLoan;
    }

    payLoanPlots(plots) {
        const currentLoan = this.loans[0];
        const plotValue = currentLoan.installments[0].value;

        const amountToPay = plots * plotValue;

        if (plots >= currentLoan.plots && this.#balance >= amountToPay) {
            this.loans.pop();

            this.#balance -= currentLoan.total;

            return "loan paid";
        } else if (this.#balance < amountToPay) {
            return "you don't have enough money to pay the plot(s). check your balance.";
        } else {
            currentLoan.installments.splice(0, plots);

            this.#balance -= amountToPay;

            return "plot(s) paid";
        }
    }
}

module.exports = Account;
