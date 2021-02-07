const initState = {
  data: [{}, {}, {}, {}, {}, {}],
  titleList: [],
  item: {},
  isLoadingItem: true,
  isLoadingProduct: false,
  isSubmitting: false,
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case 'REQUEST_UPLOAD_IMAGE': {
      console.log('uploading...');
      return state;
    }
    case 'UPLOAD_IMAGE_SUCCESS': {
      console.log('success upload image');
      console.log(action.payload);
      return state;
    }
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
      console.log('action.payload ', action.payload);
      return {
        ...state,
        item: action.payload.data,
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
        data: action.payload.data.Items,
        isLoadingProduct: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default productReducer;
