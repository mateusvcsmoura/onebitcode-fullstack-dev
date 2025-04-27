import { Component } from "./classes/Component.js";
import { Input } from "./classes/Input.js";

const h1 = new Component("h1", "Olá, mundo!");
h1.render();
console.log(h1.getElementReference());

const div = new Component("div", "div1");
div.render();
console.log(div.getElementReference());

const inputText = new Input("text", "username", "usernameInput", "username-input");
inputText.build();
inputText.render();
console.log(inputText.getElementReference());

const inputRadio = new Input("radio", "radioInput", "radioInput", "radio-input");
inputRadio.build();
inputRadio.render();
console.log(inputRadio.getElementReference());
