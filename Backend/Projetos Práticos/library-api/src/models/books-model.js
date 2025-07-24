const HttpError = require("../errors/HttpError");
const uuid = require("uuid").v4;

let books = [
    { id: "1", title: "Book One", author: "system", quantityAvailable: 4 },
    { id: "2", title: "Book Two", author: "system2", quantityAvailable: 3 }
]

const booksModel = {
    getAllBooks: function () {
        return books.map(book => ({ id: book.id, title: book.title }));
    },

    getBookById: function (id) {
        const book = books.find(b => b.id === id);

        return book || null;
    },

    createBook: function (title, author, quantityAvailable) {
        const newBook = {
            title,
            author,
            quantityAvailable,
            id: uuid()
        }

        books.push(newBook);

        return newBook;
    },

    updateBook: function (id, updatedBook) {
        const bookIndex = books.findIndex(book => book.id === id);
        if (bookIndex === -1) throw new HttpError(404, "Book Not Found");

        books[bookIndex] = { ...books[bookIndex], ...updatedBook };

        return books[bookIndex];
    },

    deleteBook: function (id) {
        const bookIndex = books.findIndex(book => book.id === id);
        if (bookIndex === -1) throw new HttpError(404, "Book Not Found");

        const deletedBook = books[bookIndex];
        books = books.filter(book => book.id !== id);

        return deletedBook;
    },

    takeBook: function (id) {
        const bookIndex = books.findIndex(book => book.id === id);
        if (bookIndex === -1) throw new HttpError(404, "Book Not Found");

        books[bookIndex].quantityAvailable -= 1;
    },

    returnBook: function (id) {
        const bookIndex = books.findIndex(book => book.id === id);
        if (bookIndex === -1) throw new HttpError(404, "Book Not Found");

        books[bookIndex].quantityAvailable += 1;
    }
};

module.exports = booksModel;