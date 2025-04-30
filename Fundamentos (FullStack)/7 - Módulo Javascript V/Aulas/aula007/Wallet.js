class Wallet {
    #amount;
    #username;

    constructor() {
        this.#amount = 100.99 * 100; // 10000
    }

    get amount() {
        return this.#amount / 100;
    }

    set username(newUsername) {
        if (typeof (newUsername) === 'string') {
            return this.#username = newUsername;
        } else {
            return console.log("username needs to be a string.");
        }
    }

    get username() {
        return this.#username;
    }
}

const myWallet = new Wallet();
console.log(myWallet.amount);

myWallet.username = 999;
myWallet.username = "mats";
myWallet.username += " moura"
console.log(myWallet.username);
