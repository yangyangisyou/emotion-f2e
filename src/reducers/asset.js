const initState = {
  recommandImages: [{}, {}, {}, {}, {}],
  loadingRecommandImages: true,
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case 'REQUEST_PRODUCT_IMAGES': {
      return {
        ...state,
        loadingRecommandImages: true,
      };
    }
    case 'PRODUCT_IMAGES_SUCCESS': {
      return {
        ...state,
        recommandImages: action.payload.hits,
        loadingRecommandImages: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default productReducer;
