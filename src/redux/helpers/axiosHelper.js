import axios from 'axios';
import { logout } from '../../helpers/logout';

export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT,
});

axiosInstance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error && error.response && error.response.status === 401) {
		logout();
	}
    return Promise.reject(error);
});