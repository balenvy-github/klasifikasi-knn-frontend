import axios from 'axios';
import { DatasetTypes } from './data-types';

const ROOT_API = process.env.REACT_APP_PUBLIC_API;
const API_VERSION = 'api';

export async function getDatasetService() {
  const url = `${ROOT_API}/${API_VERSION}/knn/train`;

  const response = await axios({
    url,
    method: 'GET',
  }).catch((error) => error.message);

  return response.data.data;
}

// enabled typings
export async function getDatasetByIdService({ queryKey }: any) {
  /* eslint-disable no-unused-vars */
  const [_key, { id }] = queryKey;

  const url = `${ROOT_API}/${API_VERSION}/knn/train/${id}`;

  const response = await axios({
    url,
    method: 'GET',
  }).catch((error) => error.message);

  return response.data;
}

// enabled typings
export async function updateDatasetService(
  { id, formData } : {id: string | undefined, formData: DatasetTypes},
) {
  const url = `${ROOT_API}/${API_VERSION}/knn/train/update/${id}`;

  const response = await axios({
    url,
    method: 'PUT',
    data: formData,
  });

  return response.data;
}

export async function createDatasetService(data : Array<DatasetTypes>) {
  const url = `${ROOT_API}/${API_VERSION}/knn/train/create`;
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
    message: 'Berhasil menambah data',
    data: response.data,
  };

  return res;
}
