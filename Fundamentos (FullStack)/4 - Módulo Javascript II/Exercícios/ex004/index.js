let flag = true;

// Functions

function showMenu() {
    let menu = `CALCULADORA GEOMÉTRICA\n\n1 - Área do Triângulo\n2 - Área do Retângulo\n3 - Área do quadrado\n4 - Área do Trapézio\n5 - Área do Círculo\n6 - Sair`;
    let opt = parseFloat(window.prompt(menu));

    return opt;
}

function triangleArea() {
    const base = parseFloat(window.prompt("Base do Triângulo"));
    const height = parseFloat(window.prompt("Altura do Triângulo"));
    const result = (base * height) / 2;

    return window.alert(`Resultado | Área\n\n${result}`);;
}

function rectangleArea() {
    const base = parseFloat(window.prompt("Base do Retângulo"));
    const height = parseFloat(window.prompt("Altura do Retângulo"));
    const result = base * height;

    return window.alert(`Resultado | Área\n\n${result}`);
}

function squareArea() {
    const side = parseFloat(window.prompt("Lado do Quadrado"));
    const result = side * side;

    return window.alert(`Resultado | Área\n\n${result}`);
}

function trapezeArea() {
    const higherBase = parseFloat(window.prompt("Base Maior"));
    const base = parseFloat(window.prompt("Base Menor"));
    const height = parseFloat(window.prompt("Altura"));
    const result = (higherBase + base) * height / 2;

    return window.alert(`Resultado | Área\n\n${result}`);
}

function circleArea() {
    let pi = 3.14;

    const radius = parseFloat(window.prompt("Raio do Círculo"));
    const result = pi * radius ** 2;


    return window.alert(`Resultado | Área\n\n${result}`);
}

// Loop

do {
    let opt = showMenu();

    switch (parseFloat(opt)) {
        case 1:
            triangleArea();
            break;
        case 2:
            rectangleArea();
            break;
        case 3:
            squareArea();
            break;
        case 4:
            trapezeArea();
            break;
        case 5:
            circleArea();
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

