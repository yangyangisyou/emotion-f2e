const initState = {
  data: [{}, {}, {}, {}, {}, {}],
  titleList: [],
  item: {},
  isLoadingItem: true,
  isLoadingProduct: false,
  isSubmitting: false,
  canvasImage: null,
  isLoadingCanvasImage: false,
  isLoadingUploadCanvas: false,
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case 'REQUEST_PRODUCT_CANVAS': {
      return {
        ...state,
        isLoadingCanvasImage: true,
      };
    }
    case 'PRODUCT_CANVAS_SUCCESS': {
      return {
        ...state,
        canvasImage: action.payload.data,
        isLoadingCanvasImage: false,
      };
    }
    case 'REQUEST_UPLOAD_IMAGE': {
      return {
        ...state,
        isLoadingUploadCanvas: true,
      };
    }
    case 'UPLOAD_IMAGE_SUCCESS': {
      return {
        ...state,
        isLoadingUploadCanvas: false,
      };
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
        data: [{}, {}, {}, {}, {}, {}],
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
    case 'PRODUCT_CANVAS_FAILURE': {
      return {
        ...state,
        canvasImage: undefined,
      };
    }
    default: {
      return state;
    }
  }
};

export default productReducer;
