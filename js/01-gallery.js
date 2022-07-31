import { galleryItems } from "./gallery-items.js";

// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const imgContainer = createGalleryItemsMarkup(galleryItems);

// const ddd = galleryContainer.getAttribute("data-source");
// console.log("ddd", ddd);

galleryContainer.insertAdjacentHTML("beforeend", imgContainer);
galleryContainer.addEventListener("click", onGalleryContainerClick);
galleryContainer.addEventListener("keydown", onKeyEscClose);

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
  console.log(evt.target);

  const instance = basicLightbox.create(`
  <div class="modal">
    <img
      src="${evt.target.dataset.source}" width="800" height="600"" />
  </div>
`);
  instance.show();

  const KEY_CODE_CLOSE = 'Escape';
  if(evt.code === KEY_CODE_CLOSE) {
    instance.close()
  }
}


console.log(galleryItems);

// DoDeLat+++++++++++++++++=============================================

// function onKeyEscClose(evt){
//   console.log(evt.code);
//   const KEY_CODE_CLOSE = 'Escape';
//   if(evt.code === KEY_CODE_CLOSE) {
    
//   }

// }
// basicLightbox--visible