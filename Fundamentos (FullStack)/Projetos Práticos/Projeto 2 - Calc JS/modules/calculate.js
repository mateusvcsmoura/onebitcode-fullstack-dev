const resultInput = document.querySelector('#result');

function calculate () {

    resultInput.value = "Error";
    resultInput.classList.add('error');

    const result = eval(input.value);

    input.value = result;
    resultInput.value = result;
    resultInput.classList.remove('error');
}

export { calculate };
