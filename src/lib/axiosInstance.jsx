import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://dragon-ecommerce-backend-zy4t.onrender.com/api/v1',
  // baseURL: 'http://localhost:3000/api/v1',
  withCredentials: true,
});

export default axiosInstance;
