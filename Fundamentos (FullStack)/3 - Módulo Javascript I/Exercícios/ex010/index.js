let word = window.prompt("Palavra | Palindrome Finder");
let reversedWord = "";

for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += `${word[i]}`;
}

if (word === reversedWord) {
    window.alert("É um palíndromo.");
} else {
    window.alert(`Não é um palíndromo.\n\nPalavra: ${word}\nPalavra em reverso: ${reversedWord}`);
}

