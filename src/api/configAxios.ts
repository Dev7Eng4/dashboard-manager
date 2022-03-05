import qs from 'qs';
import axios, {
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from 'axios';
import { NavigateFunction } from 'react-router-dom';

import { getSessionJWTAccessToken } from 'utils/session';
import { ErrorResponse, ValidAxiosResponse } from './types/Response';

interface RequestOptionsType {
  axiosOptions?: AxiosRequestConfig;
  useAuth?: boolean;
}

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URI,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setupInterceptor = (navigate: NavigateFunction) => {
  axiosInstance.interceptors.request.use(
    (config: AxiosRequestConfig) => config,
    (error: ErrorResponse) => Promise.reject(error)
  );

  axiosInstance.interceptors.response.use(
    // Any status code that lie within the range of 2xx cause this function to trigger
    (response: AxiosResponse) => response.data,
    (error: ErrorResponse) => {
      if (axios.isCancel(error)) {
        return null;
      }
      if (error.response?.status === 401) {
        navigate('/login');
      }
      return Promise.reject(error);
    }
  );
};

const mergeRequestConfig = ({
  axiosOptions = {},
  useAuth = true,
}: RequestOptionsType = {}) => ({
  ...axiosOptions,
  headers: {
    ...axiosOptions.headers,
    Authorization: useAuth ? getSessionJWTAccessToken() : '',
  },
});

const encodePayload = (payload: any, headers?: AxiosRequestHeaders) => {
  if (!headers) {
    return payload;
  }
  if (headers['Content-Type'] === 'application/x-www-form-urlencoded') {
    return qs.stringify(payload);
  }
  return payload;
};

const axiosGet = async (url: string, options?: RequestOptionsType) => {
  return await axiosInstance.get(url, mergeRequestConfig(options));
};

const axiosPost = async (
  url: string,
  payload: unknown,
  options?: RequestOptionsType
): Promise<AxiosResponse<ValidAxiosResponse>> => {
  return await axiosInstance.post(
    url,
    encodePayload(payload, options?.axiosOptions?.headers),
    mergeRequestConfig(options)
  );
};

const axiosPatch = async (
  url: string,
  payload: unknown,
  options?: RequestOptionsType
) => {
  return axiosInstance.patch(url, payload, mergeRequestConfig(options));
};

const axiosDelete = async (url: string, options: RequestOptionsType) => {
  return axiosInstance.delete(url, mergeRequestConfig(options));
};

export { axiosGet, axiosPost, axiosPatch, axiosDelete };
