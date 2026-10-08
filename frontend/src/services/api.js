import axios from 'axios';

const api = axios.create({
  baseURL: 'http://4.247.29.20:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
