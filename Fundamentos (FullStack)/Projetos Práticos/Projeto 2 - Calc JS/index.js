const main = document.querySelector('main');
const root = document.querySelector(':root'); // Captura a root do CSS
const input = document.querySelector('#input');
const resultInput = document.querySelector('#result');
const keys = document.querySelectorAll('.charKey');
const clearBtn = document.querySelector('#clear');
const equalBtn = document.querySelector('#equal');
const switchThemeBtn = document.querySelector('#themeSwitcher');
const copyToClipboardBtn = document.querySelector('#copyToClipboard');
const allowedKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "/", "*", ".", "(", ")", "%", " "];

keys.forEach(function (charKeyBtn) { // Adiciona uma função para cada Botão do querySelectorAll
    charKeyBtn.addEventListener('click', function () { // Adiciona o ouvidor de evento (click) para cada Botão
        const value = charKeyBtn.dataset.value; // Recebe o valor do dataset do elemento
        input.value += value;
    });
});

clearBtn.addEventListener('click', function () {
    input.value = ""; // Limpa o Valor do Input
    input.focus(); // Volta a focar no Input
});

equalBtn.addEventListener('click', calculate);

input.addEventListener('keydown', function (ev) {
    ev.preventDefault();

    if (allowedKeys.includes(ev.key)) { // Tecla pressionada do Usuário
        input.value += ev.key;
        return;
    }

    if (ev.key === 'Backspace') {
        input.value = input.value.slice(0, -1); // Remove o último caractére
    }

    if (ev.key === 'Enter') {
        calculate();
    }

});

input.addEventListener('contextmenu', function (ev) { // Desativa o click direito do mouse, para evitar scripts maliciosos
    ev.preventDefault();
});

function calculate () {

    resultInput.value = "Error";
    resultInput.classList.add('error');

    const result = eval(input.value);

    input.value = result;
    resultInput.value = result;
    resultInput.classList.remove('error');
}

switchThemeBtn.addEventListener('click', function () {
    if (main.dataset.theme === 'dark') { // Alteramos as Propriedades da Root (colors) para o tema desejado
        root.style.setProperty('--bg-color', '#e0f2ff');
        root.style.setProperty('--border-color', '#99c2ff');
        root.style.setProperty('--font-color', '#0a192f');
        root.style.setProperty('--primary-color', '#0066cc');
        root.style.setProperty('--error-color', '#cc0033');

        main.dataset.theme = 'light';
    } else {
        root.style.setProperty('--bg-color', '#0a192f');
        root.style.setProperty('--border-color', '#1c2e4a');
        root.style.setProperty('--font-color', '#e0eafc');
        root.style.setProperty('--primary-color', '#4dafff');
        root.style.setProperty('--error-color', '#ff3366');  

        main.dataset.theme = 'dark';
    }
});

copyToClipboardBtn.addEventListener('click', function (ev) {
    const button = ev.currentTarget;

    if (button.innerText === 'Copy') {
        button.innerText = 'Copied!';
        button.classList.add('success');

        window.navigator.clipboard.writeText(resultInput.value);
    } else {
        button.innerText = "Copy";
        button.classList.remove('success');
    }
});

