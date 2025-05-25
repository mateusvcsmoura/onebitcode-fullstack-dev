import { fetchTransactions } from "./fetchTransactions.js";

export async function deleteTransaction(id) {
    const url = `http://localhost:3000/transactions/${id}`;

    const response = await fetch(url, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    });

    const responseData = await response.json();

    fetchTransactions();

    return responseData;
}