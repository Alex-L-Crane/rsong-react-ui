import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: REACT_APP_API_ENDPOINT,
    headers: {'X-Custom-Header': 'foobar'}
});