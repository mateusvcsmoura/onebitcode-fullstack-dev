const Deposit = require('./Deposit');
const Installment = require('./Installment');

class Loan extends Deposit {
    static #fee = 0.1;

    constructor(amount, plots) {
        super(amount);
        this.plots = plots;
        this.installments = this.createInstallments();
        this.createdAt = new Date();
    }

    static get fee() {
        return Loan.#fee;
    }

    static set fee(newFee) {
        return Loan.#fee = (newFee / 100);
    }

    createInstallments() {
        const installmentsArray = [];

        const plotsFinalValue = (this.amount + (this.amount * Loan.#fee)) / this.plots;

        for (let i = 0; i < this.plots; i++) {
            const plot = new Installment(plotsFinalValue, i + 1);

            installmentsArray.push(plot);
        }

        return installmentsArray;
    }
}

module.exports = Loan;
