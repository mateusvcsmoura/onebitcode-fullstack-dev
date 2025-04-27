import { Component } from "./Component.js";

class Input extends Component {
    constructor(type = "text", name, id = "", className = "") {
        super("input");
        this.type = type;
        this.placeholder = "Digite algo..";
        this.name = name;
        this.id = id;
        this.className = className;
    }

    build() {
        super.build();

        const element = this.getElementReference();

        element.setAttribute("type", this.type);
        element.setAttribute("name", this.name);
        element.setAttribute("id", this.id);
        element.setAttribute("class", this.className);

        if (element.type === "text") {
            element.setAttribute("placeholder", this.placeholder);
        }
    }
}

export { Input };