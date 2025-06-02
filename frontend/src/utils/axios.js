import axios from 'axios';
import { toast } from 'sonner';

// Create axios instance with default config
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  withCredentials: true
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Get token from localStorage
    const token = localStorage.getItem('taghyeerToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.error('Response error:', error);

    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      const { status, data } = error.response;

      switch (status) {
        case 400:
          toast.error(data.message || 'Bad request');
          break;
        case 401:
          // Clear user data and token on unauthorized
          localStorage.removeItem('taghyeerUser');
          localStorage.removeItem('taghyeerToken');
          window.location.href = '/auth/login';
          toast.error('Session expired. Please login again.');
          break;
        case 403:
          toast.error('Access denied');
          break;
        case 404:
          toast.error(data.message || 'Resource not found');
          break;
        case 409:
          toast.error(data.message || 'Conflict error');
          break;
        case 500:
          toast.error('Server error. Please try again later.');
          break;
        default:
          toast.error('An unexpected error occurred');
      }
    } else if (error.request) {
      // The request was made but no response was received
      toast.error('No response from server. Please check your connection.');
    } else {
      // Something happened in setting up the request that triggered an Error
      toast.error('Error setting up request. Please try again.');
    }

    return Promise.reject(error);
  }
);

export default axiosInstance; 