import {ActionType} from '../constants/actionType';

const initialState = {
  productList: [],
  productsLoading: false,
};

export const productListReducer = (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
    case ActionType.PRODUCTS_LOADING:
      return {...state, productsLoading: action.payload};
    case ActionType.PRODUCT_LIST:
      return {...state, productList: action.payload};
    default:
      return state;
  }
};
