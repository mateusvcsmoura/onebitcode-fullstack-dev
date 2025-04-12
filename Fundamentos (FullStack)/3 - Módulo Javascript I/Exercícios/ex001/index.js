let firstName = window.prompt('Nome');
let lastName = window.prompt('Sobrenome');
let studyArea = window.prompt('Campo de Estudo');
let birthYear = parseFloat(window.prompt('Ano de Nascimento'));

let date = new Date();
let year = date.getFullYear();

let age = year - birthYear;

window.alert(`Nome: ${firstName} ${lastName}\nCampo de Estudo: ${studyArea}\nIdade: ${age}`);
