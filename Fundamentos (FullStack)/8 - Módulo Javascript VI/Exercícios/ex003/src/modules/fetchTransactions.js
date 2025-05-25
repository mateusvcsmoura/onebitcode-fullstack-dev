import { renderTransaction } from "./renderTransaction.js";

export async function fetchTransactions() {
    const response = await fetch('http://localhost:3000/transactions');
    const transactions = await response.json();

    document.querySelector("#transaction-list").innerHTML = "";

    transactions.forEach(transaction => {
        renderTransaction(transaction);
    });

    return transactions;
}