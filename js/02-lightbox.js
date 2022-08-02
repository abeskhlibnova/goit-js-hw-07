import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const imgContainer = createGalleryItemsMarkup(galleryItems);
galleryContainer.addEventListener("click", onGalleryContainerClick);
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

function onGalleryContainerClick(evt) {
    evt.preventDefault();
  
    if (!evt.target.classList.contains("gallery__image")) {
      return;
    }
    console.log(evt.target);

    let lightbox = new SimpleLightbox('.gallery a');
    lightbox.on('show.simplelightbox');
  }
console.log(galleryItems);
