while (true) {
    let opt = window.prompt(`Calculadora\n\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n5 - Sair`);

    if (opt === "5") {
        break;
    } else if (opt > 5 || opt < 1) {
        window.alert("Opção inválida.");
        continue;
    }

    let n1 = parseFloat(window.prompt("Número 1"));
    let n2 = parseFloat(window.prompt("Número 2"));
    let result;

    switch (opt) {
        case "1":
            result = n1 + n2;
            break;
        case "2":
            result = n1 - n2;
            break;
        case "3":
            result = n1 * n2;
            break;
        case "4":
            result = n1 / n2;
            break;
        default:
            result = "Opção inválida.";
    }

    window.alert(`Resultado: ${result}`);
}