import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000', // URL base del backend
});

export default instance;

