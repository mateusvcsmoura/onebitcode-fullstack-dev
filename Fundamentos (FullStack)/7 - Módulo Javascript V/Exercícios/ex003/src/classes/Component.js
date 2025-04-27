class Component {
    #elementReference;

    constructor(element = "div", textContent) {
        this.element = element;
        this.textContent = textContent;
        this.build();
    }

    build() {
        const reference = document.createElement(this.element);

        if (this.textContent) {
            reference.textContent = this.textContent;
        }

        this.#elementReference = reference;
    }

    render(parent = document.body) {
        parent.appendChild(this.#elementReference);
    }

    getElementReference() {
        return this.#elementReference;
    }
};

export { Component };
