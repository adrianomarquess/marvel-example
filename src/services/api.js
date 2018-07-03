import { create } from 'apisauce';
import md5 from 'js-md5';

const api = create({
  baseURL: 'https://gateway.marvel.com:443/v1/public/',
});


export const apiConfig = {
  PUBLIC_KEY: '7b595ef9196c0b4ba774e2bb0604dd90',
  PRIVATE_KEY: '5e4e44f16514c03411fa3fca0cdc12b613f13390',
  timestamp: Number(new Date()),
};

const hash = md5.create();
hash.update(apiConfig.timestamp + apiConfig.PRIVATE_KEY + apiConfig.PUBLIC_KEY);

export const hashMd5 = hash.hex();
export default api;
