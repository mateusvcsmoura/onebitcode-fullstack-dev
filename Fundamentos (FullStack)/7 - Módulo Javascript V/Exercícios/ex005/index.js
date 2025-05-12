const App = require('./App');

const mats = App.createUser("Mateus Moura", "mats@gmail.com");
const jim = App.createUser("James Gordon", "jimgordon@gmail.com");

console.table(App.users);

App.deposit("mats@gmail.com", 100);
App.deposit("mats@gmail.com", 300);
App.loan("mats@gmail.com", 500, 5);
App.payLoanPlots("mats@gmail.com", 5);
App.transfer("mats@gmail.com", 25, "jimgordon@gmail.com")

console.log(mats.account.balance);
console.dir(App.showAllData("mats@gmail.com"), { depth: null });