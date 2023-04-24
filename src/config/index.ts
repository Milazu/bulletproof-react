//import { type } from 'os';

export const API_URL = 'http://127.0.0.1:8000/' as string;
export const JWT_SECRET = '123456' as string;

export const API = { auth: { csrf_cookie: 'sanctum/csrf-cookie', login: 'login' } } as API_ROUTES;

export type API_ROUTES = {
  auth: API_AUTH_ROUTES;
};

export type API_AUTH_ROUTES = {
  login: string;
  csrf_cookie: string;
};
