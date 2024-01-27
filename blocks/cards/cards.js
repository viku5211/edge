import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  // Make an HTTP request to fetch the JSON data
  fetch('https://raw.githubusercontent.com/viku5211/edge/main/blocks/cards/course.json')
    .then(response => response.json())
    .then(data => {
      const courses = data.courses;

      const ul = document.createElement('ul');
      ul.classList.add('cards');

      courses.forEach(course => {
        const li = document.createElement('li');
        li.classList.add('cards-card-body');

        const title = document.createElement('h2');
        title.textContent = course.name;

        const description = document.createElement('p');
        description.textContent = course.description;

        const image = document.createElement('img');
        image.src = course.image;
        image.alt = course.name;

        li.appendChild(title);
        li.appendChild(description);
        li.appendChild(image);

        ul.appendChild(li);
      });

      block.textContent = '';
      block.appendChild(ul);
    })
    .catch(error => console.error(error));
}
