export const createImageGalleryItem = images => {
  return images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        downloads,
        comments,
      }) => `
      <div class="col">
        <div class="card shadow-sm">
        <a class="gallery-link" href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" class="gallery-img img-fluid" />
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              <small class="text-body-secondary">Likes: ${likes}</small>
              <small class="text-body-thirdary">vVews: ${views}</small>
              <small class="text-body-fourthary">Comments: ${comments}</small>
              <small class="text-body-fifthary">Downloads: ${downloads}</small>
            </div>
          </div>
        </div>
      </div>`
    )
    .join('');
};
