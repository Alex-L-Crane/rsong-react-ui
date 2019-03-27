import { axiosInstance } from "../../axiosHelper";

export const getSongs = () => {
    return {
        type: 'GET_SONGS',
        payload: axiosInstance.get('/songs', {

        })
    }
}