import axios from 'axios';

let curentPage = 1;

const apiKey = '43687048-bb18a09d847445a540140347b';
const options = new URLSearchParams({
  page: curentPage,
  per_page: 9,
});
export async function searchImages(query) {
  const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&${options}`;

  try {
    const response = await axios.get(apiUrl);
    console.log(response);
    if (response.status !== 200) {
      throw new Error('Network response was not ok');
    }
    return response.data.hits;
  } catch (error) {
    throw new Error('An error occurred while fetching data.');
  }
}
