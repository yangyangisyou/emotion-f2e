import { RSAA } from 'redux-api-middleware';
import { API_PATH } from '../config/setting';

export const increment = () => {
  return {
    type: 'INCREMENT'
  };
};

export const loadProducts = (productType) => {
  return {
    [RSAA]: {
      endpoint: `${API_PATH}/product/${productType}`,
      method: 'GET',
      credentials: 'include',
      types: [
        'REQUEST_PRODUCTS_LIST',
        'PRODUCTS_LIST_SUCCESS',
        'FAILURE'
      ]
    }
  };
};
