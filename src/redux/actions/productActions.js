import {ActionType} from '../constants/actionType';

export const categoriesList = list => {
  return {
    type: ActionType.CATEGORIES_LIST,
    payload: list,
  };
};

export const categoriesListLoading = status => {
  return {
    type: ActionType.CATEGORIES_LOADING,
    payload: status,
  };
};


export const productsList = list => {
  return {
    type: ActionType.PRODUCT_LIST,
    payload: list,
  };
};

export const productsListLoading = status => {
  return {
    type: ActionType.PRODUCTS_LOADING,
    payload: status,
  };
};