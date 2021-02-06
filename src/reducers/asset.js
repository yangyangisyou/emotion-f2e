const initState = {
  recommandImages: [{}, {}, {}, {}, {}],
  loadingRecommandImages: true,
  newsList: [],
  loadingNewsList: false,
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
    case 'REQUEST_NEWS_LIST': {
      return {
        ...state,
        loadingNewsList: true,
      };
    }
    case 'NEWS_LIST_SUCCESS': {
      return {
        ...state,
        newsList: action.payload.data,
        loadingNewsList: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default productReducer;
