let flag = true;

// Functions

function showMenu() {
    let menu = `CALCULADORA GEOMÉTRICA\n\n1 - Área do Triângulo\n2 - Área do Retângulo\n3 - Área do quadrado\n4 - Área do Trapézio\n5 - Área do Círculo\n6 - Sair`;
    let opt = parseFloat(window.prompt(menu));

    return opt;
}

function triangleArea(base, height) {
    return (base * height) / 2;
}

function rectangleArea(base, height) {
    return base * height;
}

function squareArea(side) {
    return side * side;
}

function trapezeArea(higherBase, base, height) {
    return (higherBase + base) * height / 2;
}

function circleArea(pi, radius) {
    return pi * radius ** 2;
}

// Loop

do {
    let opt = showMenu();
    let base;
    let height;
    let side;
    let result;
    let higherBase;
    let radius;
    let pi = 3.14;

    switch (parseFloat(opt)) {
        case 1:
            base = parseFloat(window.prompt("Base do Triângulo"));
            height = parseFloat(window.prompt("Altura do Triângulo"));
            result = triangleArea(base, height);

            window.alert(`Resultado | Área\n\n${result}`);

            break;
        case 2:
            base = parseFloat(window.prompt("Base do Retângulo"));
            height = parseFloat(window.prompt("Altura do Retângulo"));
            result = rectangleArea(base, height);

            window.alert(`Resultado | Área\n\n${result}`);

            break;
        case 3:
            side = parseFloat(window.prompt("Lado do Quadrado"));
            result = squareArea(side);

            window.alert(`Resultado | Área\n\n${result}`);

            break;
        case 4:
            higherBase = parseFloat(window.prompt("Base Maior"));
            base = parseFloat(window.prompt("Base Menor"));
            height = parseFloat(window.prompt("Altura"));
            result = trapezeArea(higherBase, base, height);

            window.alert(`Resultado | Área\n\n${result}`);

            break;
        case 5:
            radius = parseFloat(window.prompt("Raio do Círculo"));
            result = circleArea(pi, radius);

            window.alert(`Resultado | Área\n\n${result}`);

            break;
        case 6:
            window.alert("Saindo..");
            flag = false;

            break;
        default:
            window.alert("Opção inválida.");

            break;
    }
} while (flag)

