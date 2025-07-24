const HttpError = require('../errors/HttpError');
const booksModel = require('./books-model');
const uuid = require('uuid').v4;

let loans = [
    { id: '1', userId: '1', bookId: '1', loanDate: new Date('2025-01-01'), returnDate: null, isReturned: false, isLate: true }
];

const loansModel = {
    getAllLoans: function () {
        return loans;
    },

    getLoanById: function (id) {
        const loan = loans.find(l => l.id === id);

        return loan || null;
    },

    createLoan: function (user, book) {
        if (book.quantityAvailable < 1) {
            throw new HttpError(400, "There is no Book available at the moment.");
        }

        const today = new Date();
        const returnDate = new Date();
        returnDate.setDate(today.getDate() + 14);

        const newLoan = {
            id: uuid(),
            userId: user.id,
            bookId: book.id,
            loanDate: today,
            returnDate: returnDate,
            isReturned: false,
            isLate: false
        }

        loans.push(newLoan);
        booksModel.takeBook(book.id);

        return newLoan;
    },

    returnLoan: function (loanId) {
        const loanIndex = loans.findIndex(loan => loan.id === loanId);
        if (loanIndex === -1) throw new HttpError(404, "Loan Not Found");

        const loan = loans[loanIndex];
        if (loan.isReturned) return null;

        loan.isReturned = true;

        const today = new Date();
        const limitDate = new Date(loan.returnDate);

        loan.isLate = today > limitDate;
        loan.returnDate = today;

        booksModel.returnBook(loan.bookId);

        return loan;
    }
};

module.exports = loansModel;