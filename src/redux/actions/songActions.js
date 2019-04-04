import { axiosInstance } from "../helpers/axiosHelper";

export const fetchSong = (id) => {
    return {
        type: 'GET_SONG',
        payload: axiosInstance.get('/songs', {
            id
        })
    }
}

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

export const updateSongData = (data) => {
    return {
        type: 'UPDATE_SONG_DATA',
        payload: data
    }
}