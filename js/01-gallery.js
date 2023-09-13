import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const markup = galleryItems
  .map(link => `
    <li class="gallery__item">
      <a class="gallery__link" href="${link.largeImage}">
        <img
          class="gallery__image"
          src="${link.smallImage}"
          data-source="${link.largeImage}"
          alt="${link.imageDescription}"
          loading="lazy"
        />
      </a>
    </li>
  `)
  .join('');

gallery.insertAdjacentHTML('beforeend', markup);

gallery.addEventListener('click', handleClick);
  
function handleClick(event) {
  event.preventDefault();
  if (event.target.tagName === 'IMG') {
    const source = event.target.dataset.source;
    const description = event.target.alt;
    const instance = basicLightBox.create(`
  <div class = "box"><img class ="gallery__image" src="${source}" alt="${description}"></div>`);
    instance.show();
  }
}

