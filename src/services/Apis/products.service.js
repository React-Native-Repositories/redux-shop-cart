import config from '../config';
import {Delete, get, patch, post, put} from '../helpers/http-handler';

// category

export const getAllCategories = () =>
  get(`${config.API_URL}/products/categories`);

export const getSpecificCategoryProduct = category =>
  get(`${config.API_URL}/products/category/${category}`);

// product

export const getAllProducts = () => get(`${config.API_URL}/products`);

export const getSpecificProduct = id => get(`${config.API_URL}/products/${id}`);

export const createProduct = payload =>
  post(`${config.API_URL}/products`, payload);

export const updateProduct = (id, payload) =>
  put(`${config.API_URL}/products/${id}`, payload);

export const updateProductPatch = (id, payload) =>
  patch(`${config.API_URL}/products/${id}`, payload);

export const deleteProduct = id => Delete(`${config.API_URL}/products/${id}`);

// cart

export const getAllCarts = () => get(`${config.API_URL}/carts`);

export const getSpecificCarts = id => get(`${config.API_URL}/carts/${id}`);

export const getUserCarts = id => get(`${config.API_URL}/carts/user/${id}`);

export const deleteCart = id => get(`${config.API_URL}/carts/${id}`);

export const updateProductCart = (id, payload) =>
  put(`${config.API_URL}/carts/${id}`, payload);


  export const addProductCart = ( payload) =>
  post(`${config.API_URL}/carts`, payload);
