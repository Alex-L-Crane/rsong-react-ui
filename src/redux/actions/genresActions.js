import { axiosInstance } from "../helpers/axiosHelper";

export const getGenres = () => {
    return {
        type: 'GET_GENRES',
        payload: axiosInstance.get('/genres', {
            headers: {'Authorization': `Bearer ${JSON.parse(localStorage.getItem('login')).token}`}
        })
    }
}