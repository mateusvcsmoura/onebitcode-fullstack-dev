class Product {
    constructor(name, description, price, inStock = 0) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.inStock = inStock;
    }

    addToStock(quantity) {
        if (quantity > 0) {
            return this.inStock += quantity;
        } else {
            return "you need to add a positive stock";
        }
    }

    removeFromStock(quantity) {
        if (this.inStock > 0 && quantity <= this.inStock) {
            return this.inStock -= quantity;
        } else {
            return "you can't have negative items in stock";
        }
    }
}

module.exports = Product;
