import { createOptimizedPicture } from '../../scripts/aem.js';


  
eexport default function decorate(block) {
  const cardHTML = `
    <div class="card">
      <div class="card-image">
        <img src="image_url_here" alt="Image Alt Text">
      </div>
      <div class="card-body">
        <h2>Title</h2>
        <p>Description</p>
      </div>
    </div>
  `;

  // Create a temporary element to hold the card HTML
  const tempElement = document.createElement('div');
  tempElement.innerHTML = cardHTML;

  // Replace the content of the 'block' with the card HTML
  block.innerHTML = '';
  block.appendChild(tempElement.firstElementChild);
}
