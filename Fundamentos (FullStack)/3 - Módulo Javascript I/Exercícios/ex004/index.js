let players = [];

function getPlayer1Info() {
    let username = window.prompt("Username | P1");
    let attackPoints = parseFloat(window.prompt("Poder de Ataque | P1"));

    let player1 = { username: username, attackPoints: attackPoints };

    return players.push(player1);
}

function getPlayer2Info() {
    let username = window.prompt("Username | P2");
    let lifePoints = parseFloat(window.prompt("Pontos de Vida | P2"));
    let defensePower = parseFloat(window.prompt("Poder de Defesa | P2"));
    let hasShield = window.confirm("Possui Escudo? P2");

    let player2 = { username: username, lifePoints: lifePoints, defensePower: defensePower, hasShield: hasShield };

    return players.push(player2);
}

function checkDamageCaused(players) {

    let damage;

    if (players[0].attackPoints > players[1].defensePower && players[1].hasShield === false) {
        damage = players[0].attackPoints - players[1].defensePower;

        players[1].lifePoints = players[1].lifePoints - damage;
    } else if (players[0].attackPoints > players[1].defensePower && players[1].hasShield === true) {
        damage = (players[0].attackPoints - players[1].defensePower) / 2;

        players[1].lifePoints = players[1].lifePoints - damage;
    } else {
        damage = 0;

        players[1].lifePoints = players[1].lifePoints - damage;
    }

    // Show Players Info
    window.alert(`Fim de Jogo\n\n\nPlayer 1\n\nNome: ${players[0].username}\nPontos de Ataque: ${players[0].attackPoints}\n\n\nPlayer 2\n\nNome: ${players[1].username}\nPontos de Vida Restantes: ${players[1].lifePoints}\nPoder de Defesa: ${players[1].defensePower}\nPossuia Escudo? ${players[1].hasShield}`);

}

getPlayer1Info();
getPlayer2Info();
checkDamageCaused(players);

