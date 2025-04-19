class User {
    constructor(fullname, email, password) {
        this.fullname = fullname;
        this.email = email;
        this.password = password;
        this.logged = false;
    }

    login(email, password) {
        if (email === this.email && password === this.password) {
            console.log("logged in");

            this.logged = true;
        } else {
            console.log("couldn't log in");
        }
    }
}

const mateus = new User("Mateus Moura", "mateusvcsmoura@gmail.com", "senhaSafada123");
console.log(mateus);

mateus.login("mateusvcsmoura@gmail.com", "senhaErrada");
mateus.login("mateusvcsmoura@gmail.com", "senhaSafada123");
console.log(mateus);
