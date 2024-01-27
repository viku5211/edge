import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  // Make an HTTP request to fetch the JSON data
  fetch('https://raw.githubusercontent.com/viku5211/edge/main/blocks/cards/course.json')
    .then(response => response.json())
    .then(data => {
      const courses = data.courses;

      const ul = document.createElement('ul');
      ul.style.listStyle = 'none';
      ul.style.margin = '0';
      ul.style.padding = '0';
      ul.style.display = 'grid';
      ul.style.gridTemplateColumns = 'repeat(auto-fill, minmax(278px, 1fr))';
      ul.style.gridGap = '16px';

      courses.forEach(course => {
        const li = document.createElement('li');
        li.style.border = '1px solid var(--dark-color)';
        li.style.backgroundColor = 'var(--background-color)';
        li.style.margin = '16px';

        const title = document.createElement('h2');
        title.textContent = course.name;

        const description = document.createElement('p');
        description.textContent = course.description;

        const image = document.createElement('img');
        image.src = course.image;
        image.alt = course.name;
        image.style.width = '100%';
        image.style.aspectRatio = '4 / 3';
        image.style.objectFit = 'cover';

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
