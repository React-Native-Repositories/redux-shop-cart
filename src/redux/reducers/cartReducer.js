import {ActionType} from '../constants/actionType';

const initialState = {
  cartList: [],
  cartLoading: false,
};

export const cartListReducer = (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
    case ActionType.CART_LOADING:
      return {...state, cartLoading: action.payload};
    case ActionType.CART_LIST:
      return {...state, cartList: action.payload};
    default:
      return state;
  }
};
