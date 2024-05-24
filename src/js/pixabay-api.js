import axios from 'axios';

const apiKey = '43687048-bb18a09d847445a540140347b';
const perPage = 15;

export async function searchImages(query, page) {
  const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${query}
  &image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;

  try {
    const response = await axios.get(apiUrl);
    console.log(response);
    if (response.status !== 200) {
      throw new Error('Network response was not ok');
    }
    if (page * perPage > response.data.totalHits) {
      throw new Error(
        "We're sorry, but you've reached the end of search results."
      );
    }
    return response.data.hits;
  } catch (error) {
    throw new Error(error.message);
  }
}
