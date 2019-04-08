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

export const facebookLogin = (token) => {
    return axios.post(`${process.env.REACT_APP_API_ENDPOINT}/login/facebook`, {}, {
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