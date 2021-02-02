import { RSAA } from 'redux-api-middleware';
import { API_PATH } from '../config/setting';

export const uploadImage = (canvasImage) => {
  console.log('====>', { image: canvasImage });
  return {
    [RSAA]: {
      endpoint: `${API_PATH}/product/upload/image`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ image: canvasImage }),
      // body: JSON.stringify({ image: canvasImage }),
      types: [
        'REQUEST_UPLOAD_IMAGE',
        'UPLOAD_IMAGE_SUCCESS',
        'FAILURE'
      ]
    }
  };
};

export const createProduct = (payload) => {
  return {
    [RSAA]: {
      endpoint: `${API_PATH}/product/create`,
      method: 'POST',
      body: JSON.stringify({ payload }),
      types: [
        'REQUEST_CREATE_PRODUCT',
        'CREATE_PRODUCT_SUCCESS',
        'FAILURE'
      ]
    }
  };
};

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

export const loadProduct = (productId) => {
  console.log(productId);
  return {
    [RSAA]: {
      endpoint: `${API_PATH}/product/item/${productId}`,
      method: 'GET',
      types: [
        'REQUEST_PRODUCT_ITEM',
        'PRODUCT_ITEM_SUCCESS',
        'FAILURE'
      ]
    }
  };
};

export const loadProductList = (productCat) => {
  return {
    [RSAA]: {
      endpoint: `${API_PATH}/product/list/${productCat}`,
      method: 'GET',
      types: [
        'REQUEST_PRODUCT_LIST',
        'PRODUCT_LIST_SUCCESS',
        'FAILURE'
      ]
    }
  };
};
