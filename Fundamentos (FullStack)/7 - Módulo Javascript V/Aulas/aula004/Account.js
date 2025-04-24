class Account {
    #password;
    #balance = 0;

    constructor(user) {
        this.email = user.email;
        this.#password = user.password;
        this.#balance = 999;
    };

    getBalance(email, password) {
        if (this.#authenticate(email, password)) {
            return `Account Balance: ${this.#balance}$`;
        } else {
            return "Wrong E-mail or Password";
        }
    };

    deposite(email, password, value) {
        if (this.#authenticate(email, password)) {
            this.#balance += Number(value);

            return `added ${Number(value)}$ to the balance`;
        } else {
            return "Wrong E-mail or Password";
        }
    };

    #authenticate(email, password) {
        return this.email === email && this.#password === password;
    };
};

const user = {
    email: "mats@gmail.com",
    password: "gotham"
};

const myAccount = new Account(user);

console.log(myAccount);
console.log(myAccount.deposite("mats@gmail.com", "gotham", 999));
console.log(myAccount.deposite("mats@gmail.com", "gotham", 2));
console.log(myAccount.getBalance("mats@gmail.com", "gotham"));
