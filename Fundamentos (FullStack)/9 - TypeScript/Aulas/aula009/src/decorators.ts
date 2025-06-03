function Decorator() {
    return function (target: any, key: any, descriptor: any) {
        descriptor.value = function (value: number) {
            console.log(`Calculando ${value}^2`);
            return value ** 2;
        }
    }
}

function Log() {
    return function (target: any, key: any, descriptor: any) {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            console.log("------------------------------------");
            console.log(`Chamando o Método ${key} com os parâmetros: ${JSON.stringify(args)}`);

            const result = originalMethod.apply(this, args);

            console.log(`O método ${key} retornou o valor: ${JSON.stringify(result)}`);
            console.log("------------------------------------");

            return result;
        }
    }
}

class Planet {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    @Log()
    calculate(value: number) {
        console.log(`Calculando ${value} * 2`);
        return value * 2;
    }

    @Log()
    invertName() {
        return this.name.split("").reverse().join("");
    }
}

const planet = new Planet("Terra");
const result = planet.calculate(9);
console.log(`resultado: ${result}`);
planet.invertName();

