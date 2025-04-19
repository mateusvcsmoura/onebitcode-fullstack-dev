class Product {
    constructor(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.inStock = 0;
    }

    addOnStock(quantity) {
        this.inStock += quantity;

        console.log("successfully added to stock");
    }

    calculateDiscount(percentage) {
        this.price -= this.price * (percentage / 100);

        console.log(`successfully applied the ${percentage}% discount`);
    }
}

const cellphone = new Product("Xiaomi 12", "Powerful Smartphone", 3000);
console.log(cellphone);

cellphone.addOnStock(15);
cellphone.calculateDiscount(50);
console.log(cellphone);