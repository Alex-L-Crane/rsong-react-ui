import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT,
    headers: {'Authorization': `Bearer ${JSON.parse(localStorage.getItem('login')).token}`}
});