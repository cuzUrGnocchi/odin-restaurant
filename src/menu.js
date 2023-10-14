import createCard from './card';

function populateMenu(items) {
  const menu = document.querySelector('.menu');

  menu.innerHTML = '';

  items.forEach((item) => {
    menu.appendChild(createCard(item));
  });
}

export default populateMenu;
