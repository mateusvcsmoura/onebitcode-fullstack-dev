const form = document.getElementById('orderForm');

form.addEventListener('submit', function (ev) {

    ev.preventDefault();

    const username = document.querySelector('input[name="name"]').value; // text
    const address = document.querySelector('input[name="address"]').value; // text
    const breadType = document.querySelector('select[name="breadType"]').value; // select
    const main = document.querySelector('input[name="main"]').value; // radio
    const observations = document.querySelector('textarea[name="observations"]').value; // textarea

    let salad = ""; // checkbox
    document.querySelectorAll('input[name="salad"]:checked').forEach(function (item) {
        salad += `- ${item.value}\n`;
    });

    console.log({ username, address, breadType, main, observations, salad });

    window.alert(`Pedido efetuado com sucesso!\n\nNome: ${username}\nEndereço de Entrega: ${address}\nTipo de Pão: ${breadType}\nPrincipal: ${main}\nSalada: ${salad}\nObservações: ${observations}\n\nEstimativa de Entrega: 20 min`);
});

