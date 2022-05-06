import config from '../config';
import {Delete, get, patch, post, put} from '../helpers/http-handler';

// auth

export const registerUser = payload => post(`${config.API_URL}/users`, payload);

export const loginUser = payload =>
  post(`${config.API_URL}/auth/login`, payload);

// users

export const getAllUsers = () => get(`${config.API_URL}/users`);

export const getSpecificUser = id => get(`${config.API_URL}/users/${id}`);

export const updateUser = (id, payload) =>
  post(`${config.API_URL}/users/${id}`, payload);

export const deleteUser = id => post(`${config.API_URL}/users/${id}`);
