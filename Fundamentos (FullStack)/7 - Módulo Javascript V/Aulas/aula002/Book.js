class Book {
    constructor(title) {
        this.title = title;
        this.published = false;
    }

    publish() {
        this.published = true;

        console.log("Publishing Book...");
    }
};

const eragon = new Book("Eragon");
const eldest = new Book("Eldest");
console.log(eragon, eldest);

eragon.publish();
console.log(eragon, eldest);
