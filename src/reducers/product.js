const initState = {
  data: [{}, {}, {}, {}, {}, {}],
  titleList: [],
  isLoadingProduct: false,
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case 'REQUEST_HOT_PRODUCTS': {
      return state;
    }
    case 'HOT_PRODUCTS_SUCCESS': {
      return {
        ...state,
        titleList: action.payload.data,
      };
    }
    case 'REQUEST_PRODUCTS_LIST': {
      return {
        ...state,
        isLoadingProduct: true,
      };
    }
    case 'PRODUCTS_LIST_SUCCESS': {
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
