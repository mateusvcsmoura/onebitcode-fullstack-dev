const main = document.querySelector('main');
const root = document.querySelector(':root'); // Captura a root do CSS

function switchTheme () {
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
}

export { switchTheme };
