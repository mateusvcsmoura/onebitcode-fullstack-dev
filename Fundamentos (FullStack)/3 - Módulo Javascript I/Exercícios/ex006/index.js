let cities = [];
let flag;

let username = window.prompt("Nome de Usuário");
let string = "";

do {
    flag = window.confirm("Visitou cidade?");

    if (flag) {
        let cityName = window.prompt("Nome da Cidade");
        cities.push(cityName);
    }
} while (flag)

for (let i = 0; i < cities.length; i++) {
    string += `Cidade ${i + 1}: ${cities[i]}\n`;
}

window.alert(`Usuário: ${username}\n\nCidades visitadas: ${cities.length}\n\n${string}`);

