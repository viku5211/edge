import { createOptimizedPicture } from '../../scripts/aem.js';

const jsonData = [
  {
    imageUrl: "http://example.com/image1.jpg",
    imageAlt: "Image 1 Description",
    content: "Content for card 1"
  },
  {
    imageUrl: "http://example.com/image2.jpg",
    imageAlt: "Image 2 Description",
    content: "Content for card 2"
  }
  // ... add more objects for more items
];

function decorate(block, data) {
  const ul = document.createElement('ul');
  
  // Iterate over JSON data to create list items
  data.forEach((itemData) => {
    const li = document.createElement('li');
    
    // Create and append the image container
    const picture = createOptimizedPicture(itemData.imageUrl, itemData.imageAlt, false, [{ width: '750' }]);
    const imageContainer = document.createElement('div');
    imageContainer.className = 'cards-card-image';
    imageContainer.append(picture);
    li.append(imageContainer);
    
    // Create and append the content container
    const contentContainer = document.createElement('div');
    contentContainer.className = 'cards-card-body';
    contentContainer.textContent = itemData.content; // assuming 'content' is a text. If it's HTML, use innerHTML instead.
    li.append(contentContainer);
    
    // Append the list item to the list
    ul.append(li);
  });
  
  // Clear the block and append the new content
  block.textContent = '';
  block.append(ul);
}



