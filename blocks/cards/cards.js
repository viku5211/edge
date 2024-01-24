import { createOptimizedPicture } from '../../scripts/aem.js';

const getData = () => {
    var res= []
    var options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer 302007b37f939016dc2ecffa995fd97f`,
      }
    };

    fetch("https://learningmanager.adobe.com/primeapi/v2/learningObjects?page[limit]=10&filter.loTypes=course&sort=name&filter.ignoreEnhancedLP=true",
      options
    ).then((response) => {
      response.json().then((data) => {
          res = data;
          if(data.data){
data.data.map(function(item){
    console.log(item);
    var content = '<li><div class="cards-card-image"><picture><source type="image/webp" srcset="/media_1fa6f697de17429a7e9d0a36e5cf954884071248f.jpeg?width=750&amp;format=webply&amp;optimize=medium"><img loading="lazy" alt="An iceberg" src="/media_1fa6f697de17429a7e9d0a36e5cf954884071248f.jpeg?width=750&amp;format=jpeg&amp;optimize=medium"></picture></div><div class="cards-card-body"><p><strong>Content at scale</strong></p><p>AEM allows you to publish more content in shorter time with smaller teams</p><p>https://github.com/viku5211/edge/blob/main/blocks/cards/course.json</p></div></li>';
});
          }
        
      });
    });
    return res;
  };
  
export default function decorate(block) {
  var courses = getData();
    console.log("ssss aaAaAAaaA", courses);
  /* change to ul, li */
  console.log("test",block);
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-card-image';
      else div.className = 'cards-card-body';
    });
    ul.append(li);
  });
  ul.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';
  block.append(ul);
    console.log("test1",block);
}
