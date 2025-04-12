let devs = Array({ username: "Admin", techs: [{ techName: "PHP", experience: "senior" }] });
const form = document.getElementById('devForm');
const addTechBtn = document.querySelector('#addTech');

function createLabel(textContent, htmlFor) {
    const label = document.createElement('label');

    label.htmlFor = htmlFor;
    label.textContent = textContent;

    return label;
}

function createInput(id, value, name, type = 'text', placeholder = '') {
    const input = document.createElement('input');

    input.id = id;
    input.value = value;
    input.name = name;
    input.type = type;
    input.placeholder = placeholder;

    return input;
}

function createSelectOption(textContent, value = "", selected = false, disabled = false) {
    const option = document.createElement('option');

    option.selected = selected;
    option.disabled = disabled;
    option.textContent = textContent;
    option.value = value;

    return option;
}

function createButton(id, textContent) {
    const button = document.createElement('button');

    button.id = id;
    button.textContent = textContent;

    return button;
}

function addTech(ev) {
    ev.preventDefault();
    addTechBtn.disabled = true;

    // SELECT
    let selectLabel = createLabel("Escolha uma tecnologia: ", "techsInput");

    let select = document.createElement('select');
    select.name = "techsInput";
    select.id = "techsInput";

    let option0 = createSelectOption("Selecione uma linguagem..", "Selecione uma linguagem..", true, true);
    select.appendChild(option0);
    let option1 = createSelectOption("HTML5", "HTML", false, false);
    select.appendChild(option1);
    let option2 = createSelectOption("CSS3", "CSS", false, false);
    select.appendChild(option2);
    let option3 = createSelectOption("Javascript", "Javascript", false, false);
    select.appendChild(option3);
    let option4 = createSelectOption("Python", "Python", false, false);
    select.appendChild(option4);

    // RADIO
    let p = document.createElement('p');
    p.textContent = "Experiência";

    let input1 = createInput("junior", "junior", "experience", "radio");
    let label1 = createLabel("Júnior (0-2 anos)", input1.id);

    let input2 = createInput("mid", "mid", "experience", "radio");
    let label2 = createLabel("Pleno (3-4 anos)", input2.id);

    let input3 = createInput("senior", "senior", "experience", "radio");
    let label3 = createLabel("Sênior (5+ anos)", input3.id);

    //BTNS
    let saveBtn = createButton("saveBtn", "Salvar Tecnologia");
    saveBtn.addEventListener('click', saveTech);

    let removeBtn = createButton("removeBtn", "Remover linha");
    removeBtn.addEventListener('click', removeLine);

    //BTNS DIV

    let btnsDiv = document.createElement('div');
    btnsDiv.id = "btnsDiv";
    btnsDiv.append(saveBtn, removeBtn);

    //DIV TECHS
    let tech = document.createElement('div');
    tech.id = "tech";

    tech.append(selectLabel, select, p, input1, label1, input2, label2, input3, label3, btnsDiv);

    //FINAL APPEND
    form.append(tech);
}

function saveTech(ev) {
    ev.preventDefault();

    const username = document.querySelector('input[name="username"]').value;
    const techName = document.querySelector('select[name="techsInput"]').value;
    const experience = document.querySelector('input[name="experience"]:checked').value;

    if (username !== "" && techName !== "Selecione uma linguagem..") {
        const dev = { username: username, techs: [{ techName, experience }] };

        let userFound = false;

        for (let i = 0; i < devs.length; i++) {
            if (devs[i].username === username) {
                let techFound = false;

                for (let j = 0; j < devs[i].techs.length; j++) {
                    if (devs[i].techs[j].techName === techName) {
                        devs[i].techs[j].experience = experience;

                        techFound = true;
                    }
                }

                if (!techFound) {
                    devs[i].techs.push({ techName, experience });
                }

                userFound = true;
            }
        }

        if (!userFound) {
            devs.push(dev);
        }

        clearFields();
        console.log(devs);
    } else {
        window.alert('Preecha as informações antes de continuar');
    }

}

function removeLine(ev) {
    ev.preventDefault();

    const divToRemove = ev.currentTarget.parentNode.parentNode;

    if (divToRemove) {
        form.removeChild(divToRemove);

        addTechBtn.disabled = false;
    }
}

function clearFields() {
    const radios = document.querySelectorAll('input[name="experience"');
    radios.forEach((radio) => {
        radio.checked = false;
    });

    const select = document.querySelector('select[name="techsInput"]');
    select.selectedIndex = 0;
}

addTechBtn.addEventListener('click', addTech);

