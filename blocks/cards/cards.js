import { createOptimizedPicture } from '../../scripts/aem.js';


export default function decorate(block) {
  const ul = document.createElement('ul');
  ul.classList.add('cards');

  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    li.classList.add('cards-card-body');

    while (row.firstElementChild) {
      li.appendChild(row.firstElementChild);
    }

    ul.appendChild(li);
  });

  ul.querySelectorAll('img').forEach((img) => {
    const picture = document.createElement('picture');
    const source = document.createElement('source');
    source.setAttribute('srcset', img.src);
    source.setAttribute('media', '(min-width: 750px)');
    const image = document.createElement('img');
    image.setAttribute('src', img.src);
    image.setAttribute('alt', img.alt);

    picture.appendChild(source);
    picture.appendChild(image);

    img.closest('picture').replaceWith(picture);
  });

  block.textContent = '';
  block.appendChild(ul);
}
