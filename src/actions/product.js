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

export const loadProduct = (productCat, productNo) => {
  console.log(productCat, productNo);
  return {
    type: 'PRODUCT_ITEM_SUCCESS'
  };
  // return {
  //   [RSAA]: {
  //     endpoint: `${API_PATH}/product/item/${productCat}/${productNo}`,
  //     method: 'GET',
  //     types: [
  //       'REQUEST_PRODUCT_ITEM',
  //       'PRODUCT_ITEM_SUCCESS',
  //       'FAILURE'
  //     ]
  //   }
  // };
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
