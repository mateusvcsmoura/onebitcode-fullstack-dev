import { fetchTransactions } from "./fetchTransactions.js"
import { updateUserBalance } from "./updateUserBalance.js"

export async function editTransaction(initialTransactionValue, transaction) {
    const response = await fetch(`http://localhost:3000/transactions/${transaction.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(transaction)
    });

    const newTransactionData = await response.json();

    fetchTransactions();
    updateUserBalance((initialTransactionValue - transaction.value) * -1);

    return newTransactionData;
}