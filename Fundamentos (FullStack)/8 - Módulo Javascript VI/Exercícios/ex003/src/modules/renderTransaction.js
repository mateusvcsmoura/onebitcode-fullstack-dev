export function renderTransaction(transaction) {
    const li = document.createElement('li');
    li.classList.add('transaction');

    const transactionName = document.createElement('span');
    transactionName.classList.add('transaction-name');
    transactionName.textContent = transaction.name + " | ID: " + transaction.id;

    const transactionValue = document.createElement('span');
    transactionValue.classList.add('transaction-value');
    transactionValue.textContent = transaction.value;

    const actionsDiv = document.createElement('div');
    actionsDiv.classList.add('actions');

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit');
    editBtn.textContent = "Editar";

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.textContent = "Excluir";

    actionsDiv.append(editBtn, deleteBtn);
    li.append(transactionName, transactionValue, actionsDiv);

    document.querySelector("#transaction-list").prepend(li);
}

