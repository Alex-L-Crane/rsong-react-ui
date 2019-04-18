import { axiosInstance } from "../helpers/axiosHelper";

export const getSongs = () => {
    return {
        type: 'GET_SONGS',
        payload: axiosInstance.get('/songs', {
            headers: {'Authorization': `Bearer ${JSON.parse(localStorage.getItem('login')).token}`}
        })
    }
}

export const resetSongs = () => {
    return {
        type: 'RESET_SONGS',
        payload: {}
    }
}