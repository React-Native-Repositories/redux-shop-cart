import {combineReducers} from 'redux';
import {categoriesListReducer} from './categoriesReducer';
import {productListReducer} from './productReducer';

const reducers = combineReducers({
  products: productListReducer,
  categories: categoriesListReducer,
});

export default reducers;
