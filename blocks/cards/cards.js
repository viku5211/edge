import { createOptimizedPicture } from '../../scripts/aem.js';

// Define the decorate function
async function decorate(block) {
    try {
        // Fetch data from the API
        const response = await fetch('https://learningmanager.adobe.com/primeapi/v2/learningObjects?page[limit]=10&filter.loTypes=course&sort=name&filter.ignoreEnhancedLP=true', {
            method: 'GET',
            headers: {
                'Accept': 'application/vnd.api+json',
                'Authorization': 'oauth 791264e38701b78c456546329220737a'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Create a ul element to hold the cards
        const ul = document.createElement('ul');
        ul.className = 'cards-container'; // Add a class for styling if needed

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
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

// Call the function when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const block = document.querySelector('.cards');
    if (block) {
        decorate(block);
    } else {
        console.error('Block element not found.');
    }
});


