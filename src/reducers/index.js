import { combineReducers } from 'redux';
import counterReducer from './counter';
import productReducer from './product';
import commonReducer from './common';

const allReducers = combineReducers({
  counter: counterReducer,
  product: productReducer,
  common: commonReducer,
});

export default allReducers;
