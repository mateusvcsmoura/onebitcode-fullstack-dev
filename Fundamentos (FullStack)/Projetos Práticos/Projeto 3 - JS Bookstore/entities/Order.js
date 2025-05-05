class Order {
    #total;
    #items;
    #user;

    constructor(items, user) {
        items.forEach(({ product, quantity }) => {
            if (quantity > product.inStock) {
                throw new Error("not enough in stock");
            }
        });

        this.#items = items;
        this.#user = user;
        this.#total = items.reduce((sum, { product, quantity }) => sum + (product.price * quantity), 0);
    }

    get info() {
        return { items: this.#items, user: this.#user, total: this.#total };
    }
}

module.exports = Order;