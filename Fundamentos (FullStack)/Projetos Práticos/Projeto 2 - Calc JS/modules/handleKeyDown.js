const allowedKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "/", "*", ".", "(", ")", "%", " "];

function handleKeyDown (ev) {
    if (allowedKeys.includes(ev.key)) { // Tecla pressionada do Usuário
        input.value += ev.key;
        return;
    }

    if (ev.key === 'Backspace') {
        input.value = input.value.slice(0, -1); // Remove o último caractére
    }

}

export { handleKeyDown };

