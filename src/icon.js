function createIcon(link, img) {
  const anchor = document.createElement('a');
  const icon = document.createElement('img');

  anchor.appendChild(icon);

  icon.classList.add('icon');

  anchor.href = link;
  icon.src = img;

  return anchor;
}

export default createIcon;
