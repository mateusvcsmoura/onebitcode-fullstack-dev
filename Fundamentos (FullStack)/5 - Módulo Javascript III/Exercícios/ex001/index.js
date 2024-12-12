function addPlayer() {
    const playerPosition = document.querySelector('input#position');
    const playerName = document.querySelector('input#name');
    const playerNumber = document.querySelector('input#number');

    const confirmation = window.confirm(`Deseja escalar ${playerName.value}?\n\nPosição: ${playerPosition.value}\nNúmero: ${playerNumber.value}`);

    if (confirmation) {
        const playerList = document.querySelector('section#players-list');

        const ul = document.createElement('ul');
        const h3 = document.createElement('h3');
        h3.innerText = `Jogador ${playerNumber.value}`;
        ul.appendChild(h3);

        const nameLi = document.createElement('li');
        nameLi.innerText = "Nome do Jogador: ";
        const nameSpan = document.createElement('span');
        nameSpan.innerText = playerName.value;

        nameLi.appendChild(nameSpan);
        ul.appendChild(nameLi);

        const positionLi = document.createElement('li');
        positionLi.innerText = "Posição: ";
        const positionSpan = document.createElement('span');
        positionSpan.innerText = playerPosition.value;

        positionLi.appendChild(positionSpan);
        ul.appendChild(positionLi);

        const numberLi = document.createElement('li');
        numberLi.innerText = "Número: ";
        const numberSpan = document.createElement('span');
        numberSpan.innerText = playerNumber.value;

        numberLi.appendChild(numberSpan);
        ul.appendChild(numberLi);

        // PASSANDO O ID PARA FICAR FACIL DE ENCONTRAR A UL NA SECTION
        ul.id = playerNumber.value;
        playerList.append(ul);
    }

    playerPosition.value = "";
    playerNumber.value = "";
    playerName.value = "";
}

function removePlayer() {
    const playerNumberToRemove = document.querySelector('input#removeNumber');
    const players = document.querySelector('#players-list');

    // BUSCANDO O ELEMENTO QUE TEM O ID DA CAMISA
    const playerItem = document.getElementById(playerNumberToRemove.value);

    const confirmation = window.confirm(`Deseja remover o camisa ${playerNumberToRemove.value}?`)

    if (confirmation) {
        players.removeChild(playerItem);
    }

    playerNumberToRemove.value = "";

}

