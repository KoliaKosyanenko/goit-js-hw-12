import { searchImages } from './js/pixabay-api.js';
import {
  showError,
  renderGallery,
  showLoading,
  hideLoading,
  clearGallery,
  showMoreBtn,
  hideMoreBtn,
} from './js/render-functions.js';
let page = 1;
document.addEventListener('DOMContentLoaded', function () {
  const searchForm = document.getElementById('search-form');
  searchForm.addEventListener('submit', async function (event) {
    event.preventDefault();
    clearGallery();
    const searchInput = document.getElementById('search-input');
    const query = searchInput.value.trim();

    if (query !== '') {
      showLoading();
      try {
        page = 1;
        const images = await searchImages(query, page);
        hideLoading();
        if (images.length === 0) {
          showError(
            'Sorry, there are no images matching your search query. Please try again!'
          );
        } else {
          renderGallery(images);
          showMoreBtn();
        }
      } catch (error) {
        hideLoading();
        showError(
          'An error occurred while fetching data. Please try again later.'
        );
      }
    } else {
      showError('Please enter a search query.');
    }
  });

  const loadMoreBtn = document.getElementById('load-more');
  loadMoreBtn.addEventListener('click', async function (event) {
    event.preventDefault();
    const searchInput = document.getElementById('search-input');
    const query = searchInput.value.trim();

    if (query !== '') {
      hideMoreBtn();
      showLoading();
      try {
        page += 1;
        const images = await searchImages(query, page);
        hideLoading();
        if (images.length === 0) {
          showError(
            'Sorry, there are no images matching your search query. Please try again!'
          );
        } else {
          renderGallery(images);
          showMoreBtn();
          smoothScrollOnLoadMore();
        }
      } catch (error) {
        hideLoading();
        showError(error.message);
      }
    } else {
      showError('Please enter a search query.');
    }
  });
});

function smoothScrollOnLoadMore() {
  const lastImage = document.querySelector('.gallery-container:last-child');
  if (lastImage) {
    const newsImageCardHeight = lastImage.getBoundingClientRect().height;
    const scrollHeight = newsImageCardHeight * 2;

    window.scrollBy({
      top: scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
  }
}