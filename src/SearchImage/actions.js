import axios from 'axios';

export const SEARCH_IMAGE = 'SEARCH_IMAGE';
export const SEARCH_IMAGE_SUCCESS = 'SEARCH_IMAGE_SUCCESS';
export const SEARCH_IMAGE_ERROR = 'SEARCH_IMAGE_ERROR';

function searchImages(searchTerm) {
  return {
    type: SEARCH_IMAGE,
    searchTerm,
  };
}

function searchImageSuccess(results) {
  return {
    type: SEARCH_IMAGE_SUCCESS,
    images: results,
  };
}

function searchImageError(error) {
  return {
    type: SEARCH_IMAGE_ERROR,
    error,
  };
}

export function searchImagesBy(term) {
  return (dispatch) => {
    dispatch(searchImages());
    return axios
      .get('https://api.unsplash.com/search/photos', {
        params: { query: term},
        headers: {
          Authorization: 'Client-ID PvTUZHmcFMYVS6yfjZa-B8RQn-VJTUyX_4daGoOdBCA'
        }
      })
      .then((response) => {
        if (response.status !== 200) {
          dispatch(searchImageError(response.statusText));
        } else {
          dispatch(searchImageSuccess(response.data.results));
        }
      })
      .catch((error) => {
        dispatch(searchImageError(error));
      });
  };
}