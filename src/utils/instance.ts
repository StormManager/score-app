import axios from 'axios';

import setupInterceptorsTo from './Interceptors';

const instance = axios.create({
  baseURL: '',
  // baseURL: import.meta.env.NODE_ENV === 'production' ? import.meta.env.VITE_APP_PUBLIC_URL : import.meta.env.VITE_APP_LOCAL_URL,
});

export default setupInterceptorsTo(instance);
