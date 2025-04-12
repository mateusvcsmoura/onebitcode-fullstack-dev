const input = document.querySelector('#input');

document.getElementById('value').addEventListener('click', function () {
    input.value = "Olá, mundo!";

    console.log(input.value);
    console.log(input.getAttribute('value'));
});

document.getElementById('type').addEventListener('click', function () {
    // input.type = input.type !== 'radio' ? input.type = 'radio' : input.type = 'text';
    input.setAttribute('type', 'radio');
});

document.getElementById('placeholder').addEventListener('click', function () {
    input.placeholder = "Digite algo..";
});

document.getElementById('disable').addEventListener('click', function () {
    input.toggleAttribute('disabled');
});

document.getElementById('data').addEventListener('click', function () {
    const data = input.dataset.somethingElse;
    console.log(`O Valor do Atributo data-somethingElse é: ${data}`);

    input.dataset.somethingElse = "Outro valor :)";
    console.log(`O Valor do Atributo data-somethingElse agora é: ${input.dataset.somethingElse}`);
});

