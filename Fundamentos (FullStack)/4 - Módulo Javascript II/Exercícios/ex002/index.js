let flag = true;
let cards = ["K", "Q", "J", "10", "A"];

do {

    let stack = `JS Club House\n\nCartas na Pilha: ${cards}\n\n`;
    const menu = "Opções\n\n1 - Adicionar Carta\n2 - Puxar Carta\n3 - Sair";

    let opt = parseFloat(window.prompt(stack + menu));

    switch (opt) {
        case 1:
            let card = window.prompt("Insira a Carta");
            cards.push(card);

            break;
        case 2:
            if (cards.length > 0) {
                let removedCard = cards.pop();
                window.alert(`Você puxou a carta: ${removedCard}`);
            } else {
                window.alert("Não há cartas para serem puxadas.");
            }

            break;
        case 3:
            window.alert("Saindo do Clube..");
            flag = false;

            break;
    }

} while (flag)

