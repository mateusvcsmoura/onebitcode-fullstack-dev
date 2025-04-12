let money = parseFloat(window.prompt("Valor em conta (R$)"));
let flag;

do {
    let menu = `Banco do Brasil\n\nSaldo em Conta: R$ ${money}\n\n1 - Adicionar Saldo\n2 - Remover Saldo\n3 - Sair`
    flag = parseFloat(window.prompt(menu));

    switch (flag) {
        case 1:
            let deposit = parseFloat(window.prompt("Valor de Depósito (R$)"));
            money = money + deposit;
            break;
        case 2:
            let withdrawal = parseFloat(window.prompt("Valor de Saque (R$)"));
            money = money - withdrawal;
            break;
        case 3:
            window.alert("Obrigado!\n\nSaindo...");
            break;
        default:
            window.alert("Opção inválida.");
    }
} while (flag !== 3)

