import { axiosInstance } from "../helpers/axiosHelper";

export const getSongs = () => {
    return {
        type: 'GET_SONGS',
        payload: axiosInstance.get('/songs', {

        })
    }
}