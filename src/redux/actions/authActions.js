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

export const submitEmail = (email, notifications) => {
    return axiosInstance.post('/me', {
        email,
        notifications
    }, {
        headers: {'Authorization': `Bearer ${JSON.parse(localStorage.getItem('login')).token}`}
    });
}

export const submitEmailVerification = (data) => {
    return axiosInstance.post('/verification/email', {
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        notifications: data.notifications
    }, {
        headers: {'Authorization': `Bearer ${JSON.parse(localStorage.getItem('login')).token}`}
    });
}

export const submitMobileVerification = (data) => {
    return axiosInstance.post('/verification/mobile', {
        mobile: data.phone
    }, {
        headers: {'Authorization': `Bearer ${JSON.parse(localStorage.getItem('login')).token}`}
    });
}

export const submitEmailVerificationCode = (code) => {
    return axiosInstance.post('/verification/email-code', {
        code
    }, {
        headers: {'Authorization': `Bearer ${JSON.parse(localStorage.getItem('login')).token}`}
    });
}

export const submitMobileVerificationCode = (code) => {
    return axiosInstance.post('/verification/mobile-code', {
        code
    }, {
        headers: {'Authorization': `Bearer ${JSON.parse(localStorage.getItem('login')).token}`}
    });
}

export const resendEmail = () => {
    return axiosInstance.post('/verification/email-resend', {}, {
        headers: {'Authorization': `Bearer ${JSON.parse(localStorage.getItem('login')).token}`}
    });
}

export const resendMobile = () => {
    return axiosInstance.post('/verification/mobile-resend', {}, {
        headers: {'Authorization': `Bearer ${JSON.parse(localStorage.getItem('login')).token}`}
    });
}