let value = parseFloat(window.prompt("Valor | Tabuada"));
let result = "";

for (let i = 1; i < 11; i++) {
    result += `${value} x ${i} = ${value * i}\n`;
}

window.alert(`Tabuada do ${value}\n\n${result}`);