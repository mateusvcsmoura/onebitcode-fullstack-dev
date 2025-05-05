class Database {
    #storage = {
        users: [],
        authors: [],
        books: [],
        posters: [],
        orders: []
    }

    // Find Methods

    find(key) {
        return this.#storage[key];
    }

    findBookByName(bookName) {
        return this.#storage.books.find(b => b.name === bookName);
    }

    findPosterByName(posterName) {
        return this.#storage.posters.find(p => p.name === posterName);
    }

    // Save Methods

    saveUser(user) {
        const userExists = this.#storage.users.find(u => u.email === user.email);

        if (!userExists) {
            return this.#storage.users.push(user);
        }
    }

    saveAuthor(author) {
        this.#storage.authors.push(author);
    }

    saveBook(book) {
        const bookExists = this.findBookByName(book.name);

        if (!bookExists) {
            return this.#storage.books.push(book);
        }
    }

    savePoster(poster) {
        const posterExists = this.findPosterByName(poster.name);

        if (!posterExists) {
            return this.#storage.posters.push(poster);
        }
    }

    saveOrder(order) {
        return this.#storage.orders.push(order);
    }

    // Change Stock Methods

    addBooksToStock(bookName, quantity) {
        const book = this.findBookByName(bookName);

        book?.addToStock(quantity);
    }

    removeBooksFromStock(bookName, quantity) {
        const book = this.findBookByName(bookName);

        book?.removeFromStock(quantity);
    }

    addPostersToStock(posterName, quantity) {
        const poster = this.findPosterByName(posterName);

        poster?.addToStock(quantity);
    }

    removePostersFromStock(posterName, quantity) {
        const poster = this.findPosterByName(posterName);

        poster?.removeFromStock(quantity);
    }

    // Show Data

    showStorage() {
        console.table(this.#storage.users);
        console.table(this.#storage.authors);
        console.table(this.#storage.books);
        console.table(this.#storage.posters);
        console.table(this.#storage.orders.map(order => order.info));
    }
}

module.exports = Database;
