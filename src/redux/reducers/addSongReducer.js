export const addSong = (state = [], action) => {
    switch (action.type) {
        case 'ADD_SONG':
            return state;
        case 'ADD_SONG_PENDING':
            return state;
        case 'ADD_SONG_REJECTED':
            return { error: action.payload.data };
        case 'ADD_SONG_FULFILLED':
            return action.payload.data;
        default:
            return state;
    }
};
