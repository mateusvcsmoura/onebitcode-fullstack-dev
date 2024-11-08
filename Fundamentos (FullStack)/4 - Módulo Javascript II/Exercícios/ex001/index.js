let flag = true;
let patients = ["Mateus", "Marcos", "Pedro"];

do {

    let queue = "Hospital\n\nPacientes\n\n";

    for (let i = 0; i < patients.length; i++) {
        queue += `${i + 1}º - ${patients[i]}\n`;
    }

    const menu = "\nOpções\n\n1 - Novo Paciente\n2 - Consultar Paciente\n3 - Sair";
    let opt = parseFloat(window.prompt(queue + menu));

    switch (opt) {
        case 1:
            const patientName = window.prompt("Nome do Paciente");
            patients.push(patientName);

            break;
        case 2:
            if (patients.length > 0) {
                const donePatient = patients.shift();
                window.alert(`Paciente: ${donePatient} consultado!`);
            } else {
                window.alert("Não há pacientes para serem consultados.");
            }

            break;
        case 3:
            window.alert("Saindo do Hospital..");
            flag = false;

            break;
        default:
            window.alert("Opção inválida.");

            break;
    }

} while (flag)

