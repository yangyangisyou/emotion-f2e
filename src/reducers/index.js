import { combineReducers } from 'redux';
import counterReducer from './counter';
import productReducer from './product';
import commonReducer from './common';
import assetReducer from './asset';

const allReducers = combineReducers({
  counter: counterReducer,
  product: productReducer,
  common: commonReducer,
  asset: assetReducer,
});

export default allReducers;
