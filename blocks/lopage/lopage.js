.catalog .carousel_main {
  max-width: 100rem;
}
.carousel_main {
  max-width: 100rem;
  height: 35rem;
  margin: 0 auto;
  position: relative;
  overflow-x: hidden;
}

.catalog-container {
  padding: 64px 32px;
}

.slideapi {
  position: absolute;
  top: 0;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  /* THIS creates the animation! */
  transition: transform 1s;
}
.slider__btn {
  position: absolute;
  top: 50%;
  z-index: 10;
  border: none;
  background: rgba(255, 255, 255, 0.7);
  font-family: inherit;
  color: #333;
  border-radius: 50%;
  height: 5.5rem;
  width: 5.5rem;
  font-size: 3.25rem;
  cursor: pointer;
}

.slider__btn--left {
  left: 6%;
  transform: translate(-76%, -118%);
}

.slider__btn--right {
  right: 6%;
  transform: translate(50%, -118%);
}
.slideapi img {
  /* Only for images that have different size than slide */
  width: 1200px;
  height: 500px;
}
button {
  padding: 0px 16px;
  margin: 0px;
}
.slideapi > div {
  position: relative;
}
.img-txt {
  position: absolute;
  font-size: 37px;
  font-weight: 1000;
  font-style: unset;
  bottom: 50px;
  left: 5%;
  right: 50px;
  background: #000;
  color: #fff;
  padding: 20px;
  width: 85%;
  border-radius: 50px;
  filter: brightness(80%);
  text-align: center;
}



/* cards */
.card-item{
  overflow: hidden;
  border: 1px solid grey;
  border-radius: 10px;
}
.catalog > ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(278px, 1fr));
  grid-gap: 16px;
}



.catalog > ul > li {
  border: 1px solid var(--dark-color);
  background-color: var(--background-color);
}

.catalog .cards-card-body {
  margin: 16px;
}

.catalog .cards-card-image {
  line-height: 0;
}

.catalog .cards-card-body > *:first-child {
  margin-top: 0;
}

.catalog > ul > li img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}

.slideapi img{
  filter: brightness(80%);
}
/* list */
.list_catalog ul{
  list-style: none;
  margin: 0;
  padding: 0;
  display: block;
}
.list_catalog > ul > li {
  padding: 20px;

}
.list_catalog li {
  display: flex;
  margin-bottom: 20px;
}
.list_catalog .item .item-image img{
  width: 250px;
  margin-right: 20px;
}
.list_catalog .item .item-body{
  flex: 1;
  text-align: left;
}

.list_catalog .item-title {
  font-size: 20px;
  line-height: 1.2;
  font-weight: 700;
  margin-top: 0;
}

.list_catalog .item-text {
  margin-top: 0;
  font-size: 16px;
  color: rgb(40, 60, 96);
  line-height: 1.4;
  overflow: hidden;
   display: -webkit-box;
   -webkit-line-clamp: 4; /* number of lines to show */
           line-clamp: 4; 
   -webkit-box-orient: vertical;
}

.list_catalog li,.list_catalog p {
line-height: 200%
}

@media (min-width: 900px) {
  .list_catalog {
 max-width: 600px;
}
}
@media (min-width: 1200px) {
  .list_catalog {
  max-width: 1140px;
}

}

.list_catalog > div > div > :first-child {
margin-top: 0;
}

.list_catalog > div > div > :last-child {
margin-bottom: 0;
}
