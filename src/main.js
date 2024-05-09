import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchPhotoByQuery } from './js/pixabay-api.js';
import { createImageGalleryItem } from './js/render-functions.js';

const inputEl = document.querySelector('.js-search-form');
const galletyEl = document.querySelector('.gallery');

fetchPhotoByQuery()
  .then(imagesData => {
    const markup = createImageGalleryItem(imagesData.hits);
    galletyEl.innerHTML = markup;
  })
  .catch(error => {
    console.log(error);
  });
