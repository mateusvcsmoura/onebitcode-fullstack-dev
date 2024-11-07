do {
    let menu = "Conversor de Medidas\n\n1 - Milímetro (mm)\n2 - Centímetro (cm)\n3 - Decímetro (dm)\n4 - Decâmetro (dam)\n5 - Hectômetro (hm)\n6 - Quilômetro (km)\n7 - Sair";

    let opt = window.prompt(menu);

    let valor = parseFloat(window.prompt("Valor em Metros (m)"));

    switch (parseFloat(opt)) {
        case 1:
            valor = (valor * 1000) + "mm";
            break;
        case 2:
            valor = (valor * 100) + "cm";
            break;
        case 3:
            valor = (valor * 10) + "dm";
            break;
        case 4:
            valor = (valor / 10) + "dam";
            break;
        case 5:
            valor = (valor / 100) + "hm";
            break;
        case 6:
            valor = (valor / 1000) + "km";
            break;
        default:
            window.alert("Opção inválida.");
            break;
    }

    window.alert(`Resultado: ${valor}.`);
} while (opt != "5")