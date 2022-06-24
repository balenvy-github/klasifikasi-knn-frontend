import callAPI from '../config/api';
import { LoginTypes } from './data-types';

const ROOT_API = process.env.REACT_APP_PUBLIC_API;
const API_VERSION = 'api';

export async function setLogin(data: LoginTypes) {
  const url = `${ROOT_API}/${API_VERSION}/auth/login`;

  const response = await callAPI({
    url,
    method: 'POST',
    data,
  });

  return response;
}

export async function test() {
  return 0;
}
