const resultInput = document.querySelector('#result');

function copyToClipboard (ev) {
    const button = ev.currentTarget;

    if (button.innerText === 'Copy') {
        button.innerText = 'Copied!';
        button.classList.add('success');

        window.navigator.clipboard.writeText(resultInput.value);
    } else {
        button.innerText = "Copy";
        button.classList.remove('success');
    }
}

export { copyToClipboard };