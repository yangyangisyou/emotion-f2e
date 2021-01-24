import { RSAA } from 'redux-api-middleware';
import { API_PATH } from '../config/setting';

export const loadHotProductsTitle = () => {
  return {
    [RSAA]: {
      endpoint: `${API_PATH}/product/hotTitle`,
      method: 'GET',
      types: [
        'REQUEST_HOT_PRODUCTS',
        'HOT_PRODUCTS_SUCCESS',
        'FAILURE'
      ]
    }
  };
};

export const loadProducts = (productType) => {
  return {
    [RSAA]: {
      endpoint: `${API_PATH}/product/list/${productType}`,
      method: 'GET',
      types: [
        'REQUEST_PRODUCTS_LIST',
        'PRODUCTS_LIST_SUCCESS',
        'FAILURE'
      ]
    }
  };
};
