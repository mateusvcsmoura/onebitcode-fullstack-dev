function handleClick (charKeyBtn) {
    const value = charKeyBtn.dataset.value; // Recebe o valor do dataset do elemento
    input.value += value;
}

export { handleClick };
