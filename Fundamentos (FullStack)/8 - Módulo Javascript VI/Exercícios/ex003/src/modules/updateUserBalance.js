import { loadUserBalance } from "./loadUserBalance.js";

export async function updateUserBalance(amount) {
    try {
        const user = await loadUserBalance();
        const newBalance = Number(user.balance) + Number(amount);

        const response = await fetch('http://localhost:3000/user', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ balance: newBalance })
        });

        const savedUserData = await response.json();

        document.querySelector('#balance').textContent = `Saldo Total: R$ ${newBalance.toFixed(2)}`;

        return savedUserData;
    } catch (e) {
        console.error(`error while trying to update balance: ${e}`);
    }
}