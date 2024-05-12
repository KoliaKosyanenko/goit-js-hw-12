import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function getGalleryElement() {
  return document.querySelector('.gallery');
}

function getLoaderElement() {
  return document.querySelector('.loader');
}

export function renderGallery(images) {
  const galleryElement = getGalleryElement();
  const cardsHtml = images.map(image => {
    const {
      largeImageURL,
      webformatURL,
      tags,
      likes,
      views,
      comments,
      downloads,
    } = image;
      
    const cardHTML = `
      <li class="gallery-container">
        <a href="${largeImageURL}" title="${tags}">
          <img src="${webformatURL}" alt="${tags}" class="card-img-top">
        </a>
        <div class="card-body">
          <p class="card-text"><span>Likes:</span> ${likes}</p>
          <p class="card-text"><span>Views:</span> ${views}</p>
          <p class="card-text"><span>Comments:</span> ${comments}</p>
          <p class="card-text"><span>Downloads:</span> ${downloads}</p>
        </div>
      </li>
    `;
    return cardHTML;
  });
  galleryElement.insertAdjacentHTML('beforeend', cardsHtml.join(''));
  lightbox.refresh();
}

export function clearGallery() {
  const galleryElement = getGalleryElement();
  galleryElement.innerHTML = '';
}

export function showLoading() {
  const loader = getLoaderElement();
  loader.style.display = 'block';
}

export function hideLoading() {
  const loader = getLoaderElement();
  loader.style.display = 'none';
}

export function showError(message) {
  iziToast.error({
    title: 'Error',
    message: message,
  });
}
