const toggleThemeBtn = document.querySelector('#toggleThemeBtn');
const body = document.querySelector('body');

function toggleTheme () {
    body.classList.toggle('is-light');
    body.classList.toggle('is-dark');
}

toggleThemeBtn.addEventListener('click', toggleTheme);

