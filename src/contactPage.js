import createIcon from './icon';
import XLogo from './resources/icons/x-twitter.svg';
import InstagramLogo from './resources/icons/instagram.svg';
import createContactList from './contactList';

function createContactPage() {
  const contacts = document.createElement('div');
  const socialMedia = document.createElement('div');
  const x = createIcon('https://twitter.com', XLogo);
  const instagram = createIcon('https://instagram.com', InstagramLogo);
  const separator = document.createElement('hr');
  const list = createContactList([
    { mean: 'Phone', value: '(555)555-1234' },
    { mean: 'Mail', value: 'food@maker.com' },
    { mean: 'Address', value: 'Easy Street 123, Virginia, Colorado' },
  ]);

  contacts.appendChild(socialMedia);
  socialMedia.appendChild(x);
  socialMedia.appendChild(instagram);
  contacts.appendChild(separator);
  contacts.appendChild(list);

  contacts.classList.add('contact-page');
  socialMedia.classList.add('social-media');

  return contacts;
}

export default createContactPage;
