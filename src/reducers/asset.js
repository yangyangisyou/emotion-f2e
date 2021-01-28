const initState = {
  recommandImages: [],
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case 'PRODUCT_IMAGES_SUCCESS': {
      return {
        ...state,
        recommandImages: action.payload.hits,
      };
    }
    default: {
      return state;
    }
  }
};

export default productReducer;
