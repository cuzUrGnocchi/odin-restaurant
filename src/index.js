import createNavigationTab from './navigationTab';
import createMenu from './menu';
import PLACEHOLDER from './resources/placeholder';
import createContacts from './contactPage';

function init() {
  const content = document.createElement('div');

  function invokeMenu() {
    content.innerHTML = '';
    const menu = createMenu(PLACEHOLDER);
    content.appendChild(menu);
  }

  function invokeContacts() {
    content.innerHTML = '';
    const contacts = createContacts();
    content.appendChild(contacts);
  }

  const navigationTab = createNavigationTab(invokeMenu, invokeContacts);

  document.body.appendChild(navigationTab);
  document.body.appendChild(content);

  content.classList.add('content');

  invokeMenu();
}

init();
