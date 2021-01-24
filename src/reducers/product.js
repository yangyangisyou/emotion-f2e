const initState = {
  data: [],
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case 'REQUEST_PRODUCTS_LIST': {
      console.log('hey');
      return state;
    }
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
