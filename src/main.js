import { PER_PAGE, searchImages } from './js/pixabay-api.js';
import {
  showError,
  renderGallery,
  showLoading,
  hideLoading,
  clearGallery,
  showMoreBtn,
  hideMoreBtn,
  showInfo,
} from './js/render-functions.js';

let page = 1;
let totalPages = 0;
let searchQuery = null;



document.addEventListener('DOMContentLoaded', function () {
  const searchForm = document.getElementById('search-form');
  searchForm.addEventListener('submit', async function (event) {
    event.preventDefault();
    clearGallery();
    const searchInput = document.getElementById('search-input');
    searchQuery = searchInput.value.trim();

    if (searchQuery !== '') {
      hideMoreBtn();
      showLoading();
      try {
        page = 1;
        const { images, totalImages } = await searchImages(searchQuery, page);
        hideLoading();
        if (images.length === 0) {
          showError(
            'Sorry, there are no images matching your search query. Please try again!'
          );
        } else {
          renderGallery(images);

          totalPages = Math.ceil(totalImages / PER_PAGE);
          if (totalPages > 1) {
            showMoreBtn();
          }
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
  loadMoreBtn.addEventListener('click', async function () {
    try {
      page += 1;
      showLoading();

      const { images } = await searchImages(searchQuery, page);

      renderGallery(images);

      hideLoading();
      smoothScrollOnLoadMore();

      // Hide button if reach end of collection
      if (page >= totalPages) {
        showInfo("We're sorry, but you've reached the end of search results.");
        hideMoreBtn();
      }
    } catch (error) {
      hideLoading();
      showError(error.message);
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
