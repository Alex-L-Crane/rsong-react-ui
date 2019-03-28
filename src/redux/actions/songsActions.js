import { axiosInstance } from "../../axiosHelper";

export const getSongs = () => {
    return {
        type: 'GET_SONGS',
        payload: axiosInstance.get('/songs', {

        })
    }
}

export const addSong = (data) => {
    return {
        type: 'ADD_SONG',
        payload: axiosInstance.post(
            'songs', {
                data
            }
        )
    }
}