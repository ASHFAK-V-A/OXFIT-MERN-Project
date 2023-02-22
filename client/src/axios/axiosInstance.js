import axios from 'axios';
import { baseUrl } from '../constants/BaseUrl';
const instance = axios.create({
  baseURL: baseUrl
});

export default instance;