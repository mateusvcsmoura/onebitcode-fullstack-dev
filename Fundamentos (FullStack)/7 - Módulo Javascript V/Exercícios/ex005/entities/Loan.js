const Deposit = require('./Deposit');
const Installment = require('./Installment');

class Loan extends Deposit {
    static #fee = 0.1;

    constructor(amount, plots) {
        super(amount);
        this.plots = plots;
        this.plotsRemaining = plots;
        this.createdAt = new Date();

        const total = (amount + (amount * Loan.#fee));

        this.total = total;
        this.installments = this.createInstallments();
    }

    static get fee() {
        return Loan.#fee;
    }

    static set fee(newFee) {
        if (typeof newFee !== 'number' || newFee < 0) {
            throw new Error("invalid fee");
        }

        this.#fee = newFee / 100;
    }

    createInstallments() {
        const installmentsArray = [];

        const plotValue = this.total / this.plots;

        for (let i = 0; i < this.plots; i++) {
            const plot = new Installment(plotValue, i + 1);

            installmentsArray.push(plot);
        }

        return installmentsArray;
    }
}

module.exports = Loan;
