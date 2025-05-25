import { createTransaction } from "./modules/createTransaction.js";
import { deleteTransaction } from "./modules/deleteTransaction.js";
import { fetchTransactions } from "./modules/fetchTransactions.js";
import { loadUserBalance } from "./modules/loadUserBalance.js";
import { updateUserBalance } from "./modules/updateUserBalance.js";

const form = document.querySelector("#transaction-form");
const transactions = document.querySelector('#transaction-list');

form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    const nameInput = document.querySelector("#name").value;
    const valueInput = document.querySelector("#value").value;
    const typeInput = document.querySelector("#type");
    const type = typeInput.options[typeInput.selectedIndex].value;

    if (nameInput !== "" && valueInput !== "" && type !== "") {
        form.reset();
        return createTransaction(nameInput, valueInput, type);
    } else {
        return window.alert("fill all fields before add a transaction");
    }
});

document.addEventListener('DOMContentLoaded', () => {
    fetchTransactions();
    loadUserBalance();
});

transactions.addEventListener('click', (ev) => {
    if (ev.target.classList.contains('delete')) {
        const item = ev.target.closest('.transaction');
        const transactionId = item.querySelector('.transaction-name').textContent.slice(-4);
        const transactionValue = item.querySelector('.transaction-value').textContent;

        updateUserBalance(Number(transactionValue * (-1)));
        deleteTransaction(transactionId);
    }
});

