export async function loadUserBalance() {
    try {
        const response = await fetch('http://localhost:3000/user');
        const user = await response.json();

        document.querySelector('#balance').textContent = `Saldo Total: R$ ${user.balance.toFixed(2)}`;

        return user;
    } catch (e) {
        console.error(`error while trying to get user balance: ${e}`);
    }
}