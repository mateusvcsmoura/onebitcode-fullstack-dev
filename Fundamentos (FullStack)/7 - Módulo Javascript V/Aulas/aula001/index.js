function Book(title, pages, tags, author) {
    this.title = title;
    this.pages = pages;
    this.tags = tags;
    this.author = author;

    this.published = false;
    this.inStock = 0;
    this.addOnStock = function addOnStock(quantity) {
        this.inStock += quantity;
    };
    this.save = function () {
        console.log("Saving on database..");
    };
};

const author = { name: "Christopher Paulini" };
const tags = ["adventure", "fantasy", "action"];

const eragon = new Book("Eragon", 468, tags, author);
const eldest = new Book("Eldest", 644, tags, author);

eragon.addOnStock(35);
console.log(eragon);
console.log(eldest);
