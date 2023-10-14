import populateMenu from './menu';
import initialMenu from '../dist/initial-menu.json';

function init() {
  populateMenu(initialMenu.menu);
}

init();
