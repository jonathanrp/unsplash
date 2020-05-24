import {
  SEARCH_IMAGE,
  SEARCH_IMAGE_SUCCESS,
  SEARCH_IMAGE_ERROR,
} from './actions';

const initialState = {
  searchTerm: '',
  images: [],
  fetching: false,
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_IMAGE:
      return {
        ...state,
        searchTerm: action.searchTerm,
        images: [],
        fetching: true,
      }
    case SEARCH_IMAGE_SUCCESS:
      return {
        ...state,
        images: action.images,
        fetching: false,
      }
    case SEARCH_IMAGE_ERROR:
      return {
        ...state,
        error: action.error,
        fetching: false,
      }
    default:
      return state;
  }
}