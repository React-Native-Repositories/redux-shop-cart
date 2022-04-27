import {config} from '../config';
import {get} from '../helpers/http-handler';

export const getDataFromExampleQuery = () =>
  get(`${config.API_URL}/restaurants`);
