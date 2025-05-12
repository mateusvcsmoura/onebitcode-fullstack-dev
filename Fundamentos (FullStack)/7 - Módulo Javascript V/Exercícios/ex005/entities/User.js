const Account = require('./Account');

class User {
    constructor(fullname, email) {
        this.fullname = fullname;
        this.email = email;

        const userAccount = email.substring(0, email.indexOf("@"));

        this.account = new Account(userAccount);
    }

    get userAccount() {
        return this.account;
    }
}

module.exports = User;

