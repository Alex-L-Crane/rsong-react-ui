const initialState = {
    songTitle: '',
    additionalArtists: [],
    mainArtist: '',
    songWriters: [],
    owners: [],
    collaborators: [],
}

export const song = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_SONG':
            return state;
        case 'FETCH_SONG_PENDING':
            return state;
        case 'FETCH_SONG_REJECTED':
            return { error: action.payload.data };
        case 'FETCH_SONG_FULFILLED':
            return action.payload.data;
        case 'UPDATE_SONG_DATA':
            return action.payload;
        default:
            return state;
    }
};
