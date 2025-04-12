function calcular(a, b, operacao) {
    console.log("Realizando Operação.");

    const resultado = operacao(a, b);

    return resultado;
}

function somar(x, y) {
    console.log("Realizando Soma.");

    return x + y;
}

// console.log(calcular(3, 5, somar));

const list = ["Maçã", "Limão", "Uva"];

list.forEach(function (element, index, array) {
    console.log({
        element,
        index,
        array
    });
});

