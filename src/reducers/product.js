const initState = {
  data: [],
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case 'PRODUCTS_LIST_SUCCESS': {
      console.log('payload: ', action.payload);
      return {
        ...state,
        data: action.payload.data,
      };
    }
    default: {
      return state;
    }
  }
};

export default productReducer;
