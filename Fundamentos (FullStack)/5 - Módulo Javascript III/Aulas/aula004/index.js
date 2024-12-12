function addContact() {
    const contactSection = document.getElementById('contacts-list');
    const h3 = document.createElement('h3');
    h3.innerText = "Contato";
    const ul = document.createElement('ul');

    // List Items
    const nameLi = document.createElement('li');
    nameLi.innerText = "Nome: ";

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'fullname';
    nameInput.placeholder = 'Nome..';

    nameLi.appendChild(nameInput);
    ul.append(nameLi);
    ul.appendChild(document.createElement('br'));


    const phoneLi = document.createElement('li');
    phoneLi.innerText = "Telefone: ";

    const phoneInput = document.createElement('input');
    phoneInput.type = 'text';
    phoneInput.name = 'phone';
    phoneInput.placeholder = 'Telefone..';

    phoneLi.appendChild(phoneInput);
    ul.append(phoneLi);
    ul.appendChild(document.createElement('br'));

    const addressLi = document.createElement('li');
    addressLi.innerText = "Endereço: ";

    const addressInput = document.createElement('input');
    addressInput.type = 'text';
    addressInput.name = 'address';
    addressInput.placeholder = 'Endereço..';

    addressLi.appendChild(addressInput);
    ul.append(addressLi);
    ul.appendChild(document.createElement('br'));

    contactSection.append(h3, ul);
}

function removeContact() {
    const contactSection = document.getElementById('contacts-list');

    const titles = document.getElementsByTagName('h3');
    const contacts = document.getElementsByTagName('ul');

    contactSection.removeChild(titles[titles.length - 1]);
    contactSection.removeChild(contacts[contacts.length - 1]);
}