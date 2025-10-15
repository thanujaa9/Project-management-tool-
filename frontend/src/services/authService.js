// frontend/src/services/authService.js
import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_URL}/api/auth`; 

const register = async (userData) => {
  console.log("authService: Registering user...", userData);
  const response = await axios.post(`${API_URL}/register`, userData);
  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('userId', response.data.userId);
    localStorage.setItem('username', response.data.username);
    localStorage.setItem('email', response.data.email);
  }
  console.log("authService: Register response data:", response.data);
  return response.data;
};

const login = async (userData) => {
  console.log("authService: Logging in user...", userData);
  const response = await axios.post(`${API_URL}/login`, userData);
  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('userId', response.data.userId);
    localStorage.setItem('username', response.data.username);
    localStorage.setItem('email', response.data.email);
  }
  console.log("authService: Login response data:", response.data);
  return response.data;
};

const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  localStorage.removeItem('username');
  localStorage.removeItem('email');
  console.log("authService: User logged out, localStorage cleared.");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
