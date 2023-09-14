import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const markup = galleryItems
  .map(link => `
    <li class="gallery__item">
      <a class="gallery__link" href="${link.preview}">
        <img
          class="gallery__image"
          src="${link.original}"
          data-source="${link.original}"
          alt="${link.description}"
          loading="lazy"
        />
      </a>
    </li>
  `)
  .join('');

gallery.insertAdjacentHTML('beforeend', markup);

gallery.addEventListener('click', onHandleClick);


  
function onHandleClick(event) {
  event.preventDefault();
  if (event.target.tagName === 'IMG') {
    const source = event.target.dataset.source;
    const description = event.target.alt;
    const instance = basicLightbox.create(`
  <img class="gallery__image" src="${source}" alt="${description}">`);
    instance.show();
  }
}

