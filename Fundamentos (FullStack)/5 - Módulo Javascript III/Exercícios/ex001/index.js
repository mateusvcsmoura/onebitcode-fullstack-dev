function addPlayer() {
    const playerPosition = document.querySelector('input#position');
    const playerName = document.querySelector('input#name');
    const playerNumber = document.querySelector('input#number');

    const confirmation = window.confirm(`Deseja escalar ${playerName.value}?\n\nPosição: ${playerPosition.value}\nNúmero: ${playerNumber.value}`);

    if (confirmation) {
        const playerList = document.querySelector('ul#players-list');
        const player = document.createElement('li');
        player.id = playerNumber.value;

        player.innerText = `${playerPosition.value}: ${playerName.value} | Camisa ${playerNumber.value}`;

        playerList.appendChild(player);
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

    const confirmation = window.confirm(`Deseja remover o ${playerItem.innerText}?`)

    if (confirmation) {
        players.removeChild(playerItem);
    }

    playerNumberToRemove.value = "";

}

