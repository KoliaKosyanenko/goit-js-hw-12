
import { searchImages } from './js/pixabay-api.js';
import {
  showError,
  renderGallery,
  showLoading,
  hideLoading,
  clearGallery,
} from './js/render-functions.js';

document.addEventListener('DOMContentLoaded', function () {
  const searchForm = document.getElementById('search-form');
  searchForm.addEventListener('submit', function (event) {
    event.preventDefault();
    clearGallery();
    const searchInput = document.getElementById('search-input');
    const query = searchInput.value.trim();

    if (query !== '') {
      showLoading();

      searchImages(query)
        .then(images => {
          hideLoading();

          if (images.length === 0) {
            showError(
              'Sorry, there are no images matching your search query. Please try again!'
            );
          } else {
            renderGallery(images);
          }
        })
        .catch(error => {
          hideLoading();
          showError(
            'An error occurred while fetching data. Please try again later.'
          );
        });
    } else {
      showError('Please enter a search query.');
    }
  });
});
