import { axiosInstance } from "../../axiosHelper";

export const updateSong = (data) => {
    return {
        type: 'UPDATE_SONG',
        payload: axiosInstance.put(
            'songs', {
                data
            }
        )
    }
}