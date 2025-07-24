const HttpError = require("../errors/HttpError");
const booksModel = require("../models/books-model");
const loansModel = require("../models/loans-model");

const loansController = {
    // GET /api/loans
    index: (req, res) => {
        const loans = loansModel.getAllLoans();
        return res.status(200).json(loans);
    },

    // GET /api/loans/:id
    show: (req, res) => {
        const { id } = req.params;
        const loan = loansModel.getLoanById(id);

        if (!loan) throw new HttpError(404, "Loan Not Found");

        return res.status(200).json(loan);
    },

    // POST /api/loans
    save: (req, res) => {
        const user = req.user;
        const { bookId } = req.body;
        if (typeof (bookId) !== "string") throw new HttpError(400, "Invalid Book ID");

        const book = booksModel.getBookById(bookId);
        if (!book) throw new HttpError(404, "Book Not Found");

        const newLoan = loansModel.createLoan(user, book);
        return res.status(201).json(newLoan);
    },

    // POST /api/loans/:id/return
    return: (req, res) => {
        const { id } = req.params;
        const loan = loansModel.returnLoan(id);

        return res.status(200).json(loan);
    }
};

module.exports = loansController;