function register(element) {
    const username = element.children.username.value;
    const password = element.children.password.value;
    const rePassword = element.children.passwordConfirmation.value;

    if (password === rePassword) {
        window.alert('Usuário cadastrado.');
        console.log({ username, password, rePassword });

        element.children.username.value = "";
        element.children.password.value = "";
        element.children.passwordConfirmation.value = "";
    } else {
        window.alert('As senhas não conferem.');
    }

}

