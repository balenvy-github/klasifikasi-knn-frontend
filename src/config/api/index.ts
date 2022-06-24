import axios, { AxiosRequestConfig } from 'axios';

export default async function callAPI({ url, method, data }: AxiosRequestConfig) {
  // const error = '';
  const response = await axios({
    url,
    method,
    data,
  }).catch((error) => error.response);

  // if (error !== '') {
  //   const res = {
  //     error: true,
  //     message: error,
  //     data: null,
  //   };
  //   return res;
  // }

  const axiosResponse = response?.data;
  if (axiosResponse.error === 1) {
    const res = {
      error: true,
      message: response?.data.message,
      data: null,
    };
    return res;
  }
  const res = {
    error: false,
    message: 'success',
    data: response?.data,
  };

  return res;
}
