const HttpError = require("../errors/HttpError");
const booksModel = require("../models/books-model");

const booksController = {
    // GET /api/books
    index: (req, res) => {
        const books = booksModel.getAllBooks();
        return res.status(200).json(books);
    },

    // GET /api/books/:id
    show: (req, res) => {
        const { id } = req.params;
        if (!id) throw new HttpError(400, "No Req Params");

        const book = booksModel.getBookById(id);
        if (!book) throw new HttpError(404, "Book Not Found");

        return res.status(200).json(book);
    },

    // POST /api/books
    save: (req, res) => {
        if (!req.body) return res.status(400).json({ message: "No Req Body" });
        const { title, author, quantityAvailable } = req.body;

        if (typeof (title) !== "string" || typeof (author) !== "string") throw new HttpError(400, "Invalid Fields Format");
        if (typeof (quantityAvailable) !== "number" || quantityAvailable < 1) throw new HttpError(400, "Invalid Book Quantity");

        const newBook = booksModel.createBook(title, author, quantityAvailable);

        return res.status(201).json(newBook);
    },

    // PUT /api/books/:id
    update: (req, res) => {
        if (!req.body) return res.status(400).json({ message: "No Body Req" });

        const { id } = req.params;
        const { title, author, quantityAvailable } = req.body;

        if (title && typeof (title) !== "string" || author && typeof (author) !== "string") throw new HttpError(400, "Invalid Fields Format");
        if (quantityAvailable && typeof (quantityAvailable) !== "number" || quantityAvailable < 1) throw new HttpError(400, "Invalid Book Quantity");

        const fieldsToUpdate = {};

        if (title) fieldsToUpdate.title = title;
        if (author) fieldsToUpdate.author = author;
        if (quantityAvailable) fieldsToUpdate.quantityAvailable = quantityAvailable;

        const updatedBook = booksModel.updateBook(id, fieldsToUpdate);

        return res.status(200).json(updatedBook);
    },

    // DELETE /api/books/:id
    delete: (req, res) => {
        const { id } = req.params;
        const deletedBook = booksModel.deleteBook(id);

        return res.status(200).json(deletedBook);
    }
};

module.exports = booksController;