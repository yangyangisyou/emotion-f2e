const initState = {
  data: [{}, {}, {}, {}, {}, {}],
  titleList: [],
  isLoadingProduct: false,
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case 'REQUEST_HOT_PRODUCT': {
      return state;
    }
    case 'HOT_PRODUCT_SUCCESS': {
      return {
        ...state,
        titleList: action.payload.data,
      };
    }
    case 'REQUEST_PRODUCT_ITEM': {
      return {
        ...state,
        isLoadingProduct: true,
      };
    }
    case 'PRODUCT_ITEM_SUCCESS': {
      const data = {
        productName: 'Tofu', productNo: 5, description: 'It tastes like the pudding.', userName: 'Joanne', productCat: '10000', imageLink: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png',
      };
      return {
        ...state,
        data: data,
        isLoadingProduct: false,
      };
    }
    case 'REQUEST_PRODUCT_LIST': {
      return {
        ...state,
        isLoadingProduct: true,
      };
    }
    case 'PRODUCT_LIST_SUCCESS': {
      console.log('payload: ', action.payload);
      return {
        ...state,
        data: action.payload.data,
        isLoadingProduct: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default productReducer;
