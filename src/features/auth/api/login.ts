import { API } from '@/config';
import { axios } from '@/lib/axios';

import { UserResponse } from '../types';

export type LoginCredentialsDTO = {
  email: string;
  password: string;
};

export const loginWithEmailAndPassword = async (
  data: LoginCredentialsDTO
): Promise<UserResponse> => {
  await axios.get(API.auth.csrf_cookie);
  return axios.post(API.auth.login, data);

  //axios.get('/sanctum/csrf-cookie').then(() => {
  //  return axios.post('/login', data);
  //});
};
