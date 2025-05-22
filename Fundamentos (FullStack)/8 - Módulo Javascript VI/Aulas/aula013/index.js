function createCountryCard(country) {
    const card = document.createElement("div");
    card.classList.add("country");

    const countryName = country.name.common; // Retorna o nome comum (API)

    const name = document.createElement("h2");
    name.textContent = countryName;

    const flag = document.createElement("img");
    flag.src = country.flags.svg;
    flag.alt = country.flags.alt;

    card.append(name, flag);
    document.querySelector("#countries").append(card);
}

async function getContries() {
    const response = await fetch('https://restcountries.com/v3.1/all'); // Solicita todos os dados de países da API
    const countries = await response.json(); // Espera a resposta em JSON (para manipular/mostrar)

    countries.forEach(country => {
        createCountryCard(country);
    });
}

getContries();