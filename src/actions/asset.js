import { RSAA } from 'redux-api-middleware';
import { API_PATH } from '../config/setting';

// https://pixabay.com/api/docs/

export const loadProductImage = (keyword) => {
  return {
    [RSAA]: {
      endpoint: `${API_PATH}/asset/images/${keyword}`,
      method: 'GET',
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
      endpoint: `${API_PATH}/asset/videos/${keyword}`,
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      types: [
        'REQUEST_PRODUCT_IMAGES',
        'PRODUCT_IMAGES_SUCCESS',
        'FAILURE'
      ]
    }
  };
};

export const loadNewsList = (keyword) => {
  return {
    [RSAA]: {
      endpoint: `${API_PATH}/asset/news/${keyword}`,
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      types: [
        'REQUEST_NEWS_LIST',
        'NEWS_LIST_SUCCESS',
        'FAILURE'
      ]
    }
  };
};
