import {combineReducers} from 'redux';
import {cartListReducer} from './cartReducer';
import {categoriesListReducer} from './categoriesReducer';
import {productListReducer} from './productReducer';

const reducers = combineReducers({
  products: productListReducer,
  categories: categoriesListReducer,
  cart: cartListReducer,
});

export default reducers;
