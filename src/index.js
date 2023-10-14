import createCard from './card';
import initialMenu from '../dist/initial-menu.json';

function populateMenu(items) {
  const menu = document.querySelector('.menu');

  items.forEach((item) => {
    menu.appendChild(createCard(item));
  });
}

function init() {
  populateMenu(initialMenu.menu);
}

init();
