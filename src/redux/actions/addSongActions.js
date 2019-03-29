import { axiosInstance } from "../../axiosHelper";

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