import Simplelightbox from "simplelightbox";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(`.gallery`);

function createGalleryItem(gallery) {
    return gallery.map(({preview, original, description}) => {
        return `
        <a class="gallery__link" href="${original}">
           <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    `}).join("");
}

const galleryCardMarkup = createGalleryItem(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryCardMarkup);

galleryContainer.addEventListener(`click`, onViewingStart);

let gallery = new Simplelightbox('.gallery a', {captionsData: "alt", captionDelay: 250});

function onViewingStart(event) {
    gallery.on('show.Simplelightbox')
}