import axios from 'axios';

const caxious = axios.create({
  baseURL: '/api/v2/',
  headers: {
    'Content-Type': 'application/json',
  },
});

caxious.interceptors.request.use(
  config => {
    let authToken = localStorage.getItem('token');
    if (!authToken) {
      authToken = sessionStorage.getItem('token');
    }
    if(authToken) {
      config.headers['Authorization'] = `Bearer ${authToken}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

export default caxious;
