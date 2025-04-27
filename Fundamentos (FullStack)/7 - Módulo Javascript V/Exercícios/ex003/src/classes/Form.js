import { Component } from "./Component.js";

class Form extends Component {
    constructor(action = "") {
        super("form");

        this.action = action;

        this.build();
    }

    build() {
        super.build();

        const element = this.getElementReference();

        element.setAttribute('action', this.action);
    }

    renderOnForm(...children) {
        const parent = this.getElementReference();

        children.forEach((child) => {
            parent.appendChild(child.getElementReference());
        });
    }

};

export { Form };
