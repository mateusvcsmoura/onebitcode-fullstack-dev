const Database = require("./Database");
const Author = require("./entities/Author");
const Book = require("./entities/Book");
const Order = require("./entities/Order");
const Poster = require("./entities/Poster");
const User = require("./entities/User");

class App {
    static #database = new Database();

    createUser(name, email, password) {
        const user = new User(name, email, password);
        App.#database.saveUser(user);
    }

    createAuthor(name, nacionality, bio) {
        const author = new Author(name, nacionality, bio);
        App.#database.saveAuthor(author);
    }

    createBook(title, synopsis, genre, pages, author, description, price, inStock) {
        const book = new Book(title, synopsis, genre, pages, author, description, price, inStock);
        App.#database.saveBook(book);
    }

    createPoster(name, description, height, width, price, inStock) {
        const poster = new Poster(name, description, height, width, price, inStock);
        App.#database.savePoster(poster);
    }

    createOrder(items, user) {
        const order = new Order(items, user);
        App.#database.saveOrder(order);

        order.info.items.forEach(({ product, quantity }) => {
            if (product instanceof Book) {
                App.#database.removeBooksFromStock(product.name, quantity);
            } else if (product instanceof Poster) {
                App.#database.removePostersFromStock(product.name, quantity);
            }
        });
    }

    addBook(bookName, quantity) {
        return App.#database.addBooksToStock(bookName, quantity);
    }

    addPoster(posterName, quantity) {
        return App.#database.addPostersToStock(posterName, quantity);
    }

    getUsers() {
        return App.#database.find('users');
    }

    getAuthors() {
        return App.#database.find('authors');
    }

    getBooks() {
        return App.#database.find('books');
    }

    getPosters() {
        return App.#database.find('posters');
    }

    getOrders() {
        return App.#database.find('orders');
    }

    showDatabase() {
        return App.#database.showStorage();
    }
}

module.exports = App;
