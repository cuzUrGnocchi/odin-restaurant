function createContactList(contactList) {
  const list = document.createElement('table');

  list.classList.add('contact-list');

  contactList.forEach((contact) => {
    const row = document.createElement('tr');
    const mean = document.createElement('td');
    const value = document.createElement('td');

    list.appendChild(row);
    row.appendChild(mean);
    row.appendChild(value);

    mean.textContent = contact.mean;
    value.textContent = contact.value;
  });

  return list;
}

export default createContactList;
