let jobs = Array(
    { 'job-name': "Analista de TI", 'description': "Apoio à equipe de gestão de TI.", 'limit-date': "25/12/2024", 'candidates': ["Mateus", "Pedro", "Paulo"] },

    { 'job-name': "QA Assurance", 'description': "Responsável pela qualidade dos códigos.", 'limit-date': "31/12/2024", 'candidates': ["Douglas", "Ellen"] }
);

function translate(word) {
    let words = {
        'job-name': "Nome da Vaga",
        'description': "Descrição",
        'limit-date': "Data Limite",
        'candidates': "Candidatos"
    };

    return words[word];
}

let flag = true;


do {
    let menu = `LinkedIn\n\nVagas: ${jobs.length}\n\n1 - Listar Vagas\n2 - Criar Vaga\n3 - Visualizar Vaga\n4 - Inscrever Candidato\n5 - Excluir Vaga\n6 - Sair\n\nOpção`;
    let opt = window.parseFloat(window.prompt(menu));

    switch (opt) {
        case 1:
            let jobsString = jobs.reduce(function (accumulator, job) {
                return accumulator + `Índice: ${jobs.indexOf(job)} | ${job["job-name"]}: ${job.candidates.length} Inscritos.\n`;
            }, "");

            window.alert(`Vagas disponíveis\n\n${jobsString}`);
            break;
        case 2:
            let newJob = {};

            let jobName = window.prompt("Nome da Vaga");
            let jobDescription = window.prompt("Descrição da Vaga");
            let jobLimitDate = window.prompt("Data Limite (DD/MM/YYYY)");

            let confirmation = window.confirm(`Deseja confirmar a vaga abaixo?\n\nNome da Vaga: ${jobName}\nDescrição: ${jobDescription}\nData limite: ${jobLimitDate}`);

            if (confirmation) {
                newJob["job-name"] = jobName;
                newJob["description"] = jobDescription;
                newJob["limit-date"] = jobLimitDate;
                newJob["candidates"] = Array();

                jobs.push(newJob);

                window.alert("Upload de Vaga CONCLUÍDO COM SUCESSO.");
            } else {
                window.alert("Voltando ao menu.");
            }
            break;
        case 3:
            let jobIndex = window.parseFloat(window.prompt("Visualizar Vaga\n\nInsira o índice da vaga"));
            let jobViewString = "";

            for (const [key, value] of Object.entries(jobs[jobIndex])) {
                jobViewString += `${translate(key)}:  ${value}\n`;
            }

            window.alert(`Vaga\n\n${jobViewString}`);

            break;
        case 4:
            let candidateName = window.prompt("Inserir Candidato\n\nNome");
            let jobIndex1 = window.parseFloat(window.prompt("Inserir Candidato\n\nInsira o índice da vaga"));
            let jobString = "";

            for (const [key, value] of Object.entries(jobs[jobIndex1])) {
                jobString += `${translate(key)}:  ${value}\n`;
            }

            let candidateConfirmation = window.confirm(`Confirma inserir ${candidateName} na Vaga\n\n${jobString}`);

            if (candidateConfirmation) {
                jobs[jobIndex1].candidates.push(candidateName);
            } else {
                window.alert("Voltando ao menu.");
            }

            break;
        case 5:
            let jobIndex2 = window.parseFloat(window.prompt("Inserir Candidato\n\nInsira o índice da vaga"));
            let jobStringExclude = "";

            for (const [key, value] of Object.entries(jobs[jobIndex2])) {
                jobStringExclude += `${translate(key)}:  ${value}\n`;
            }

            let excludeConfirmation = window.confirm(`Confirma deletar a Vaga\n\n${jobStringExclude}`);

            if (excludeConfirmation) {
                jobs.splice(jobIndex2, 1);
                window.alert("Vaga excluída com sucesso.");
            } else {
                window.alert("Voltando ao menu.");
            }

            break;
        case 6:
            flag = false;
            break;
        default:
            window.alert("Opção inválida.");
            break;
    }

} while (flag)

