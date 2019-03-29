export const updateSong = (state = [], action) => {
    switch (action.type) {
        case 'UPDATE_SONG':
            return state;
        case 'UPDATE_SONG_PENDING':
            return state;
        case 'UPDATE_SONG_REJECTED':
            return { error: action.payload.data };
        case 'UPDATE_SONG_FULFILLED':
            return action.payload.data;
        default:
            return state;
    }
};
