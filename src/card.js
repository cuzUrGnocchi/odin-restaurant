function createCard(item) {
  const card = document.createElement('div');
  const img = document.createElement('img');
  const text = document.createElement('div');
  const name = document.createElement('h2');
  const description = document.createElement('p');
  const shoutout = document.createElement('p');

  card.classList.add('card');
  text.classList.add('text');
  name.classList.add('name');
  description.classList.add('description');
  shoutout.classList.add('shoutout');

  card.appendChild(img);
  card.appendChild(text);
  text.appendChild(name);
  text.appendChild(description);
  text.appendChild(shoutout);

  img.src = item.img;
  name.textContent = item.name;
  description.textContent = item.description;
  shoutout.innerHTML = item.shoutout;

  return card;
}

export default createCard;
