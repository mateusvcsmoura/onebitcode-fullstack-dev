function double(x) {
    return `O dobro de ${x} é ${x * 2}`;
}

// window.alert(double(2));

function sayHi(username = "Mundo") {
    return window.alert(`Oi, ${username}.`);
}

// sayHi("Mateus");
// sayHi();

function sum(a, b) {
    return `Resultado da Soma: ${a + b}`;
}

// window.alert(sum(7, 6));
// window.alert(sum(1, 1));

function createUser(username, email, password, type = "admin") {
    const user = {
        username: username,
        email: email,
        password: password,
        type: type
    };

    return user;
}

// console.log(createUser("Mateus", "mateus@gmail.com", "1234"));

function newUser(username, type = "admin", email, password) {
    const user = {
        username: username,
        email: email,
        password: password,
        type: type
    };

    return user;
}

// console.log(newUser("Isaac@email.com", "1234"));

const user = {
    name: "Mateus",
    type: "Admin",
    birth: "10/08/2006"
}

function objectAsParam(user) {
    console.log(user.name);
}

objectAsParam(user);

