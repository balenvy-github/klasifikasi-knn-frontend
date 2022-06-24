import axios from 'axios';
import { ParameterInputTypes } from './data-types/index';
import callAPI from '../config/api';

const ROOT_API = process.env.REACT_APP_PUBLIC_API;
const API_VERSION = 'api';

export async function getParameterService() {
  const URL = 'parameter';

  const response = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
  const axiosResponse = response.data;

  return axiosResponse.data.result;
}

export async function postParameterService(data: ParameterInputTypes) {
  const url = `${ROOT_API}/${API_VERSION}/parameter/create`;

  const response = await callAPI({
    url,
    method: 'POST',
    data,
  });

  return response;
}

export async function getParameterByIdService({ queryKey } : any) {
  /* eslint-disable no-unused-vars */
  const [_key, { id }] = queryKey;
  const url = `${ROOT_API}/${API_VERSION}/parameter/${id}`;

  const response = await callAPI({
    url,
    method: 'GET',
  });

  return response;
}

export async function updateParameterService(id: string | undefined, data: ParameterInputTypes) {
  const url = `${ROOT_API}/${API_VERSION}/parameter/update/${id}`;

  const response = await callAPI({
    url,
    method: 'PUT',
    data,
  });

  return response;
}

export async function editParameter() {
  return 0;
}
