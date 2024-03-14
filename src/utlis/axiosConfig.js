import axios from 'axios';

const ApiEndpoint1 = axios.create({
  baseURL: 'http://192.168.191.1:8083', 
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default ApiEndpoint1;