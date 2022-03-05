import { z } from 'zod';

import { axiosGet, axiosPost, axiosPatch, axiosDelete } from './configAxios';
import { AuthResponse, authSchema } from './types/Auth';
import apiUri from './uri';

const createAxiosResponseError = () => new Error('Axios request return void');
const createTypeguardError = () =>
  new Error('Typeguard could not validate response');

export const fetchLogin = async (username: string, password: string) => {
  const res = await axiosPost(
    apiUri.POST.login,
    { username, password },
    {
      axiosOptions: {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
      useAuth: false,
    }
  );

  if (!res) {
    throw createAxiosResponseError();
  }

  return res;
};

export const fetchSendCode = async (username: string, password: string) => {
  const res = await axiosPost(`/token2FA`, {
    username,
    password,
  });

  if (!res) {
    throw createAxiosResponseError();
  }

  return res;
};

export const fetchVerifyCode = async (
  username: string,
  password: string,
  code: string
) => {
  const res = await axiosPost(`/verify2FA`, {
    username,
    password,
    token: code,
  });

  if (!res) {
    throw createAxiosResponseError();
  }

  const validResponse = authSchema.safeParse(res);

  if (!validResponse.success) {
    throw createTypeguardError();
  }

  return validResponse.data;
};

export const fetchFindAccount = async (username: string) => {
  const res = await axiosPost(`/findAccount`, { username });
  return res;
};

export const getUser = async () => {
  // const res = await
};

export const verifyAuth = () => {};
