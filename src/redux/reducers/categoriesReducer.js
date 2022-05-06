import {ActionType} from '../constants/actionType';

const initialState = {
  categoryList: [],
  categoryLoading: false,
};

export const categoriesListReducer = (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
    case ActionType.CATEGORIES_LOADING:
      return {...state, categoryLoading: action.payload};
    case ActionType.CATEGORIES_LIST:
      return {...state, categoryList: action.payload};
    default:
      return state;
  }
};
