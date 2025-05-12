const Transfer = require('./Transfer');
const Deposit = require('./Deposit');
const Loan = require('./Loan');

class Account {
    #balance = 0;
    #deposits = [];
    #transfers = [];
    #loans = [];
    #oldLoans = [];

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

    get oldLoans() {
        return this.#oldLoans;
    }

    transfer(amount, receiver) {
        const currentBalance = this.#balance;

        if (amount < 1 || typeof (amount) !== "number") {
            return "invalid transfer";
        }

        if (amount > currentBalance) {
            return "not enough money on balance to transfer";
        }

        this.#balance -= amount;

        const newTransfer = new Transfer(this, receiver, amount);

        this.#transfers.push(newTransfer);

        return newTransfer;
    }

    deposit(amount) {
        if (amount < 1 || typeof (amount) !== "number") {
            return "invalid deposit";
        }

        this.#balance += amount;

        const newDeposit = new Deposit(amount);

        this.#deposits.push(newDeposit);

        return newDeposit;
    }

    loan(amount, plots) {
        if (amount < 1 || plots < 1 || typeof (amount) !== "number") {
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

        if (plots >= currentLoan.plotsRemaining && this.#balance >= amountToPay) {
            for (let i = 0; i < currentLoan.installments.length; i++) {
                currentLoan.installments[i].status = "paid";
            }

            this.#oldLoans.push(currentLoan);

            currentLoan.plotsRemaining = 0;

            this.loans.pop();

            this.#balance -= currentLoan.total;

            return "loan paid";
        } else if (this.#balance < amountToPay) {
            return "you don't have enough money to pay the plot(s). check your balance.";
        } else {
            currentLoan.plotsRemaining -= plots;

            for (let i = 0; i < plots; i++) {
                currentLoan.installments[i].status = "paid";
            }

            this.#balance -= amountToPay;

            return "plot(s) paid";
        }
    }
}

module.exports = Account;
