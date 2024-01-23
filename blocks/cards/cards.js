import { createOptimizedPicture } from '../../scripts/aem.js';

async function decorate(block) {
    // Fetch data from the API
    const response = await fetch('https://learningmanager.adobe.com/primeapi/v2/learningObjects?page[limit]=10&filter.loTypes=course&sort=name&filter.ignoreEnhancedLP=true', {
        method: 'GET',
        headers: {
            'Accept': 'application/vnd.api+json',
            'Authorization': 'oauth 68baec3bbf3ea3d527c2f2901c50f614'
        }
    });
    const data = await response.json();

    // Create a ul element to hold the cards
    const ul = document.createElement('ul');

    // Loop through each course
    data.data.forEach((course) => {
        // Create li element for each course
        const li = document.createElement('li');
        li.className = 'cards-card';

        // Extract image URL, name, and description
        const imageUrl = course.attributes.imageUrl;
        const name = course.attributes.localizedMetadata[0].name;
        const description = course.attributes.localizedMetadata[0].description;

        // Create elements for the card image, title, and description
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = name;
        img.className = 'cards-card-image';

        const title = document.createElement('h2');
        title.textContent = name;
        title.className = 'cards-card-title';

        const desc = document.createElement('p');
        desc.textContent = description;
        desc.className = 'cards-card-description';

        // Append elements to the li element
        li.appendChild(img);
        li.appendChild(title);
        li.appendChild(desc);

        // Append the li element to the ul
        ul.appendChild(li);
    });

    // Clear the original content and append the new ul
    block.textContent = '';
    block.append(ul);
}

// Call the function (you might want to call this function on window load or on document DOMContentLoaded depending on your setup)
decorate(document.querySelector('.your-block-class')); // Replace '.your-block-class' with the actual class or id of your block element.

