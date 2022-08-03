import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const imgContainer = createGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", imgContainer);

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
</a>`;
    })
    .join("");
}
    let lightbox = new SimpleLightbox('.gallery a', {
      captionDelay: 250,
      captionsData: 'alt',
      close: true,
      enableKeyboard: true,
});

console.log(galleryItems);
