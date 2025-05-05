const Product = require('./Product');

class Poster extends Product {
    constructor(name, description, height, width, price, inStock = 0) {
        super(name, description, price, inStock);
        this.height = height;
        this.width = width;
    }
}

module.exports = Poster;