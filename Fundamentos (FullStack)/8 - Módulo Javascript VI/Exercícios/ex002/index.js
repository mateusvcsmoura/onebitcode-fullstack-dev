const imcRanges = [
    { min: 0, max: 18.5, label: "thinness" },
    { min: 18.5, max: 25, label: "normal" },
    { min: 25, max: 30, label: "overweight" },
    { min: 30, max: 40, label: "obesity" },
    { min: 40, max: Infinity, label: "severe obesity" }
];

async function calculateImc(weight, height) {
    if (typeof (weight) !== "number" || typeof (height) !== "number") {
        return Promise.reject("both arguments should be numbers");
    } else {
        const imc = weight / (height ** 2);

        return (parseFloat(parseFloat(imc).toFixed(2)));
    }
}

async function showImcSituation(weight, height) {
    try {
        console.log(`calculating imc for ${weight}kg and ${height}m`);

        const result = await calculateImc(weight, height);

        console.log(`\nyour imc: ${result}`);

        const situation = imcRanges.find(range => result >= range.min && result < range.max);

        if (situation) {
            console.log(`situation: ${situation.label}\n`);
        } else {
            console.log("invalid imc");
        }

    } catch (e) {
        console.log(e);
    }
}

showImcSituation(80, 1.65);
showImcSituation(70, 1.63);
showImcSituation(56, 1.63);
showImcSituation(null, 1.80);
showImcSituation(60, 1.73);
