const BASE_URL = 'https://pixabay.com/api/';

const options = {
  key: '43802528-015b222178f5679b6792a0cf2',
  q: 'yellow+flower',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};

export const fetchPhotoByQuery = query => {
  const searchParams = new URLSearchParams({
    key: options.key,
    q: options.q,
    orientation: options.orientation,
    image_type: options.image_type,
    safesearch: options.safesearch,
  });

  return fetch(`${BASE_URL}?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(
        iziToast.show({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        })
      );
    }

    return response.json();
  });
};
