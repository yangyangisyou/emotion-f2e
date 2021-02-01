const initState = {
  data: [{}, {}, {}, {}, {}, {}],
  titleList: [],
  item: {},
  isLoadingItem: false,
  isLoadingProduct: false,
  isSubmitting: false,
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case 'REQUEST_CREATE_PRODUCT': {
      return {
        ...state,
        isSubmitting: true,
      };
    }
    case 'CREATE_PRODUCT_SUCCESS': {
      return {
        ...state,
        isSubmitting: false,
      };
    }
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
        isLoadingItem: true,
      };
    }
    case 'PRODUCT_ITEM_SUCCESS': {
      const data = {
        productName: 'Tofu', productNo: 5, description: 'It tastes like the pudding.', userName: 'Joanne', productCat: '10000', imageLink: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png',
      };
      return {
        ...state,
        item: data,
        isLoadingItem: false,
      };
    }
    case 'REQUEST_PRODUCT_LIST': {
      return {
        ...state,
        isLoadingProduct: true,
      };
    }
    case 'PRODUCT_LIST_SUCCESS': {
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
