import axios from 'axios';
import { DatasetTypes } from './data-types/index';

const ROOT_API = process.env.REACT_APP_PUBLIC_API;
const API_VERSION = 'api';

export async function getHasilUjiDataService() {
  const url = `${ROOT_API}/${API_VERSION}/knn/train/ujidata`;

  const response = await axios({
    url,
    method: 'GET',
  }).catch((error) => error.message);

  return response.data;
}

export async function updateHasilUjiService() {
  const url = `${ROOT_API}/${API_VERSION}/knn/train/training`;

  const response = await axios({
    url,
    method: 'GET',
  }).catch((error) => error.message);

  return response.data;
}

// enabled typings
export async function getHasilUjiLastBeforeService() {
  const url = `${ROOT_API}/${API_VERSION}/knn/train/ujidata/lastbefore`;

  const response = await axios({
    url,
    method: 'GET',
  }).catch((error) => error.message);

  return response.data;
}

export async function klasifikasiService(data : DatasetTypes) {
  const url = `${ROOT_API}/${API_VERSION}/knn/classify`;
  const response = await axios({
    url,
    method: 'POST',
    data,
  }).catch((err) => err.response);

  if (response.data.statusCode > 300) {
    const res = {
      error: 1,
      message: response.data.message,
      data: null,
    };
    return res;
  }
  const res = {
    error: 0,
    message: 'Berhasil mengklasifikasikan data',
    data: response.data,
  };

  return res;
}
