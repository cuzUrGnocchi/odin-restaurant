import createCard from './card';

function createMenu(items) {
  const menu = document.createElement('div');
  menu.classList.add('menu');
  menu.innerHTML = '';

  items.forEach((item) => {
    menu.appendChild(createCard(item));
  });

  return menu;
}

export default createMenu;
