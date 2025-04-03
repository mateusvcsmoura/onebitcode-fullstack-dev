import { handleClick } from "./modules/handleClick.js";
import { clearScreen } from "./modules/clearScreen.js";
import { handleKeyDown } from "./modules/handleKeyDown.js";
import { calculate } from "./modules/calculate.js";
import { switchTheme } from "./modules/switchTheme.js";
import { copyToClipboard } from "./modules/copyToClipboard.js";

const input = document.querySelector('#input');
const keys = document.querySelectorAll('.charKey');
const clearBtn = document.querySelector('#clear');
const equalBtn = document.querySelector('#equal');
const switchThemeBtn = document.querySelector('#themeSwitcher');
const copyToClipboardBtn = document.querySelector('#copyToClipboard');

keys.forEach(function (charKeyBtn) { // Adiciona uma função para cada Botão do querySelectorAll
    charKeyBtn.addEventListener('click', function () {
        handleClick(charKeyBtn);
    });
});

clearBtn.addEventListener('click', function () {
    clearScreen();
});

equalBtn.addEventListener('click', calculate);

input.addEventListener('keydown', function (ev) {
    ev.preventDefault();

    handleKeyDown(ev);

});

input.addEventListener('contextmenu', function (ev) { // Desativa o click direito do mouse, para evitar scripts maliciosos
    ev.preventDefault();
});

switchThemeBtn.addEventListener('click', function () {
    switchTheme();
});

copyToClipboardBtn.addEventListener('click', function (ev) {
    copyToClipboard(ev);
});

