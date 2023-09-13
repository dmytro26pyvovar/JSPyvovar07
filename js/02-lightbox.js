import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const markup = galleryItems.map(link => `
    <li class="gallery__item">
   <a class="gallery__link" href="large-image.jpg">
            <img
                class="gallery__image"
                src="small-image.jpg"
                alt="Image description" />
   </a>
</li>
 `).join('');
 gallery.insertAdjacentHTML('beforeend', markup)

console.log(galleryItems);
