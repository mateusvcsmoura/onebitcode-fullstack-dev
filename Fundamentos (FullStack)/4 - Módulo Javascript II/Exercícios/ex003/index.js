const words = {
    "owner": "Dono:",
    "roomsQuantity": "Quantidade de Quartos:",
    "bathroomQuantity": "Quantidade de Banheiros:",
    "hasGarage": "Possui Garagem?"
}

function translate(word) {
    return words[word];
}

let properties = [];
let flag = true;

do {

    let menu = `Cadastro de Imóveis\n\nImóveis cadastrados: ${properties.length}\n\n1 - Cadastrar Imóvel\n2 - Ver Imóveis\n3 - Sair`;
    let opt = parseFloat(window.prompt(menu));

    switch (opt) {
        case 1:
            let propertyObject = {};

            propertyObject.owner = window.prompt("Nome do Proprietário");
            propertyObject.roomsQuantity = parseFloat(window.prompt("Quantidade de Quartos"));
            propertyObject.bathroomQuantity = parseFloat(window.prompt("Quantidade de Banheiros"));
            propertyObject.hasGarage = window.confirm("Possui Garagem?");

            properties.push(propertyObject);

            break;
        case 2:

            let string = "Imóveis Cadastrados\n";

            for (let i = 0; i < properties.length; i++) {

                string += `\n\nImóvel ${i + 1}\n`;

                for (const [key, value] of Object.entries(properties[i])) {
                    string += `${translate(key)} ${value}\n`;
                }
            }

            window.alert(string);

            break;
        case 3:
            window.alert("Saindo..");
            flag = false;

            break;
        default:
            window.alert("Opção inválida.");

            break;
    }
} while (flag)
