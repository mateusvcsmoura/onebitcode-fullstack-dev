import { Component } from "./Component.js";

class Label extends Component {
    constructor(textContent, idFor) {
        super("label", textContent);

        this.for = idFor;

        this.build();
    }

    build() {
        super.build();

        const element = this.getElementReference();

        element.setAttribute('for', this.for);

        if (this.textContent) {
            element.setAttribute('textContent', this.textContent);
        }
    }
}

export { Label };