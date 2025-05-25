import { fetchTransactions } from "./fetchTransactions.js";
import { updateUserBalance } from "./updateUserBalance.js";

export async function createTransaction(name, value, type) {
    if (type === "expense") {
        value = value * (-1);
    } else {
        value = Number(value);
    }

    const transactionData = {
        name,
        value,
        type
    }

    updateUserBalance(value);

    const response = await fetch("http://localhost:3000/transactions", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(transactionData)
    });

    const savedTransaction = await response.json();

    console.log(savedTransaction);

    fetchTransactions();
}

