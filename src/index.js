import createMenu from './menu';
import INITIAL_MENU from './initialMenu';

function init() {
  const title = document.createElement('h1');
  const menu = createMenu(INITIAL_MENU);

  document.body.appendChild(title);
  document.body.appendChild(menu);

  title.classList.add('title');
  title.textContent = 'Food';
}

init();
