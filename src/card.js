import './style.css';

function createCard(item) {
  const card = document.createElement('div');
  const img = document.createElement('img');
  const text = document.createElement('div');
  const name = document.createElement('h2');
  const description = document.createElement('p');
  const credit = document.createElement('p');

  card.classList.add('card');
  text.classList.add('text');
  name.classList.add('name');
  description.classList.add('description');
  credit.classList.add('credit');

  card.appendChild(img);
  card.appendChild(text);
  text.appendChild(name);
  text.appendChild(description);
  text.appendChild(credit);

  img.src = item.img;
  name.textContent = item.name;
  description.textContent = item.description;
  credit.innerHTML = item.credits;

  return card;
}

export default createCard;
