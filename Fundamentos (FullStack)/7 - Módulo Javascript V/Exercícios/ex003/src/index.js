import { Component } from "./classes/Component.js";
import { Input } from "./classes/Input.js";
import { Label } from "./classes/Label.js";
import { Form } from "./classes/Form.js";

const h1 = new Component("h1", "Olá, mundo!");
const div = new Component("div", "Divisória");
const inputText = new Input("text", "username", "usernameInput", "username-input");
const inputRadio = new Input("radio", "radioInput", "radioInput", "radio-input");
const label = new Label("Option 1", "radioInput");

const form = new Form();
form.renderOnForm(h1, div, inputText, inputRadio, label);
form.render();

const h12 = new Component("h1", "Olá, mundo 2!");
h12.render();

const div2 = new Component("div", "Divisória 2");
div2.render();

console.log(form.getElementReference());
console.log(h12.getElementReference());
console.log(div2.getElementReference());
