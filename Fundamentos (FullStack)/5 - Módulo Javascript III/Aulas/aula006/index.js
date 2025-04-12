const button = document.getElementById('register-button');

function register(ev) {
    console.log(ev);

    const sectionElement = ev.currentTarget.parentNode;

    const username = sectionElement.children.username.value;
    const password = sectionElement.children.password.value;
    const rePassword = sectionElement.children.passwordConfirmation.value;

    if (password === rePassword) {
        window.alert(`Usuário ${username} cadastrado com sucesso.`);
        console.log({ username, password, rePassword });

        sectionElement.children.username.value = "";
        sectionElement.children.password.value = "";
        sectionElement.children.passwordConfirmation.value = "";
    } else {
        window.alert("As senhas não conferem.");
    }

}

function removeListener() {
    button.removeEventListener('click', register);
    window.alert("Evento Removido");
}

button.addEventListener('click', register);

button.addEventListener('mouseover', function (ev) {
    console.log(ev.currentTarget);
});