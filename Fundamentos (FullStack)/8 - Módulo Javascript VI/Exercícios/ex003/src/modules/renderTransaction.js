import { editTransaction } from "./editTransaction.js";

export function renderTransaction(transaction) {
    const li = document.createElement('li');
    li.classList.add('transaction');

    const transactionName = document.createElement('span');
    transactionName.classList.add('transaction-name');
    transactionName.textContent = transaction.name + " | ID: " + transaction.id;

    const transactionValue = document.createElement('span');
    transactionValue.classList.add('transaction-value');
    transactionValue.textContent = transaction.value;

    const initialTransactionValue = transaction.value; // use as argument to editTransactions()

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

    editBtn.addEventListener("click", () => {
        if (editBtn.textContent === "Editar") {
            const nameInput = document.createElement("input");
            nameInput.type = "text";
            nameInput.value = transaction.name;
            nameInput.classList.add("transaction-name");

            const valueInput = document.createElement("input");
            valueInput.type = "number";
            valueInput.value = transaction.value;
            valueInput.classList.add("transaction-value");

            const typeSelect = document.createElement("select");
            typeSelect.innerHTML = `
                <option value="income" ${transaction.type === "income" ? "selected" : ""}>Entrada</option>
                <option value="expense" ${transaction.type === "expense" ? "selected" : ""}>Saída</option>
            `;
            typeSelect.classList.add("transaction-type");

            li.replaceChild(nameInput, transactionName);
            li.replaceChild(valueInput, transactionValue);
            li.insertBefore(typeSelect, actionsDiv);

            editBtn.textContent = "Salvar";
        } else {
            const newName = li.querySelector("input[type='text']").value;
            const newValue = li.querySelector("input[type='number']").value;
            const newType = li.querySelector("select").value;

            transaction.name = newName;
            transaction.value = newValue;
            transaction.type = newType;

            transactionName.textContent = newName + " | ID: " + transaction.id;
            transactionValue.textContent = newValue;

            li.replaceChild(transactionName, li.querySelector("input[type='text']"));
            li.replaceChild(transactionValue, li.querySelector("input[type='number']"));
            li.removeChild(li.querySelector("select"));

            editTransaction(initialTransactionValue, transaction);

            editBtn.textContent = "Editar";
        }
    });
}

