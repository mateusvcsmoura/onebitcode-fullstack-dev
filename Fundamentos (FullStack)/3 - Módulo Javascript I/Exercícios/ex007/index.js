let flag;

do {
    let menu = "Menu de Opções\n\n1 - Olá\n2 - Negativo\n3 - Opcional\n4 - Positivo\n5 - Sair";

    flag = parseFloat(window.prompt(menu));

    switch (flag) {
        case 1:
            window.alert("Olá!");
            break;
        case 2:
            window.alert("Negativo.");
            break;
        case 3:
            window.alert("Opcional.");
            break;
        case 4:
            window.alert("Positivo.");
            break;
        case 5:
            window.alert("Saindo...");
            break;
        default:
            window.alert("Opção inválida.");
    }
} while (flag !== 5)

