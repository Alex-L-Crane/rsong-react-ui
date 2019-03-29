import axios from 'axios';

export const googleLogin = (w3, token) => {
    return axios.post(`${process.env.REACT_APP_API_ENDPOINT}/login/gmail`, {
        ...w3
    }, {
        headers: {
            gusrid: token
        }
    })
}