import createMenu from './menu';
import initialMenu from '../dist/initial-menu.json';

function init() {
  const menu = createMenu(initialMenu.menu);
  document.body.appendChild(menu);
}

init();
