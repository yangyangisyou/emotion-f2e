import { RSAA } from 'redux-api-middleware';
import { API_PATH } from '../config/setting';

// https://pixabay.com/api/docs/

export const loadProductImage = (keyword) => {
  return {
    [RSAA]: {
      endpoint: `${API_PATH}/asset/images/${keyword}`,
      method: 'GET',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      types: [
        'REQUEST_PRODUCT_IMAGES',
        'PRODUCT_IMAGES_SUCCESS',
        'FAILURE'
      ]
    }
  };
};

export const loadProductVideos = (keyword) => {
  return {
    [RSAA]: {
      endpoint: `${API_PATH}/asset/video/${keyword}`,
      method: 'GET',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      types: [
        'REQUEST_PRODUCT_IMAGES',
        'PRODUCT_IMAGES_SUCCESS',
        'FAILURE'
      ]
    }
  };
};
