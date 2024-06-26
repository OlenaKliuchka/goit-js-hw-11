import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchPhotoByQuery } from './js/pixabay-api.js';
import { createImageGalleryItem } from './js/render-functions.js';

const galleryEl = document.querySelector('.js-gallery');
const searchFormEl = document.querySelector('.js-search-form');
const loaderEl = document.querySelector('.js-loader');

function onSearchFormSubmit(event) {
  event.preventDefault();
  const searchQuery = event.target.elements.searchKeyword.value.trim();

  if (searchQuery === '') {
    galleryEl.innerHTML = '';
    event.target.reset();
    iziToast.show({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
      timeout: 2000,
      color: 'red',
    });

    return;
  }

  galleryEl.innerHTML = '';
  loaderEl.classList.remove('is-hidden');

  fetchPhotoByQuery(searchQuery)
    .then(imagesData => {
      if (imagesData.total === 0) {
        iziToast.show({
          message: 'Sorry, there are no images for this query',
          position: 'topRight',
          timeout: 2000,
          color: 'red',
        });
      }

      galleryEl.innerHTML = createImageGalleryItem(imagesData.hits);

      new SimpleLightbox('.gallery-list a', {
        captionsData: 'alt',
        captionDelay: 250,
      });
    })

    .catch(error => console.log(error))
    .finally(() => {
      event.target.reset();
      loaderEl.classList.add('is-hidden');
    });
}

searchFormEl.addEventListener('submit', onSearchFormSubmit);
