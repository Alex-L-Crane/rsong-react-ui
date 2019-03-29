import { axiosInstance } from "../../axiosHelper";

export const fetchSong = () => {
    return {
        type: 'FETCH_SONG',
        payload: axiosInstance.get('/songs', {
            id
        })
    }
}