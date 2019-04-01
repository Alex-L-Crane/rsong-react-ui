import axios from 'axios';

// const token = JSON.parse(localStorage.getItem('login')).token;
const token = 'aasd'

export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT,
    headers: {'Authorization': `Bearer ${token}`}
});