import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5093/api',
  withCredentials: false,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

export default apiClient;