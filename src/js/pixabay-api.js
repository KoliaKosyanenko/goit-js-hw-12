export function searchImages(query) {
  const apiKey = '43687048-bb18a09d847445a540140347b';
  const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

  return fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      return data.hits;
    })
    .catch(error => {
      throw new Error('An error occurred while fetching data.');
    });
}
