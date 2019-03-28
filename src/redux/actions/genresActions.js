import { axiosInstance } from "../../axiosHelper";

export const getGenres = () => {
    return {
        type: 'GET_GENRES',
        payload: axiosInstance.get('/genres', {

        })
    }
}