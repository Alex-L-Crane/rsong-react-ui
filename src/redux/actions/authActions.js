import axios from 'axios';
import { axiosInstance } from '../helpers/axiosHelper';

export const googleLogin = (w3, token) => {
    return axios.post(`${process.env.REACT_APP_API_ENDPOINT}/login/gmail`, {
        ...w3
    }, {
        headers: {
            gusrid: token
        }
    })
}

export const facebookLogin = (authResponse, token) => {
    return axios.post(`${process.env.REACT_APP_API_ENDPOINT}/login/facebook`, {
        authResponse
    }, {
        headers: {
            access_token: token
        }
    })
}

export const logout = () => {
    return axiosInstance.post('/logout', {}, {
        headers: {'Authorization': `Bearer ${JSON.parse(localStorage.getItem('login')).token}`}
    });
}

export const sumbmitEmail = (email, notifications) => {
    return axiosInstance.post('/me', {
        email,
        notifications
    }, {
        headers: {'Authorization': `Bearer ${JSON.parse(localStorage.getItem('login')).token}`}
    });
}