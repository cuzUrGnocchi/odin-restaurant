function createNavigationTab(invokeMenu, invokeContacts) {
  const navigationTab = document.createElement('nav');
  const menuSwitcher = document.createElement('div');
  const menuLink = document.createElement('a');
  const contactsSwitcher = document.createElement('div');
  const contactsLink = document.createElement('p');

  navigationTab.appendChild(menuSwitcher);
  navigationTab.appendChild(contactsSwitcher);
  menuSwitcher.appendChild(menuLink);
  contactsSwitcher.appendChild(contactsLink);

  menuLink.classList.add('link');
  contactsLink.classList.add('link');

  menuLink.textContent = 'Food';
  contactsLink.textContent = 'Contact';

  menuLink.addEventListener('click', invokeMenu);
  contactsLink.addEventListener('click', invokeContacts);

  return navigationTab;
}

export default createNavigationTab;
