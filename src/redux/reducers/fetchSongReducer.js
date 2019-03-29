export const song = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_SONG':
            return state;
        case 'FETCH_SONG_PENDING':
            return state;
        case 'FETCH_SONG_REJECTED':
            return { error: action.payload.data };
        case 'FETCH_SONG_FULFILLED':
            return action.payload.data;
        default:
            return state;
    }
};
