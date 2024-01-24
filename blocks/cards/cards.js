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
          var content = '';
          res = data;
          if(data.data){
data.data.map(function(item){
    if(item.attributes.imageUrl){
        content =content+ '<li><div class="cards-card-image"><picture><source type="image/webp" srcset="+item.attributes.imageUrl+"><img loading="lazy" alt="An iceberg" src={item.attributes.imageUrl}></picture></div><div class="cards-card-body"><p><strong>Content at scale</strong></p><p>AEM allows you to publish more content in shorter time with smaller teams</p><p>https://github.com/viku5211/edge/blob/main/blocks/cards/course.json</p></div></li>';
    }
    
});
              console.log(content);
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
