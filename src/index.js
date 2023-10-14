import createMenu from './menu';
import initialMenu from './initial-menu.json';

function init() {
  const title = document.createElement('h1');
  const menu = createMenu(initialMenu.menu);

  document.body.appendChild(title);
  document.body.appendChild(menu);

  title.classList.add('title');
  title.textContent = 'Food';
}

init();
