import { galleryItems } from "./gallery-items.js";

// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const imgContainer = createGalleryItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", imgContainer);
galleryContainer.addEventListener("click", onGalleryContainerClick);

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
    </a>
    </div>
`;
    })
    .join("");
}

function onGalleryContainerClick(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(`
  <div class="modal">
    <img
      src="${evt.target.dataset.source}" width="800" height="600"" />
  </div>
`);
  instance.show();

  window.onkeydown = function( event ) {
    if ( event.keyCode == 27 ) {
    instance.close();
    };
};
};

console.log(galleryItems);
