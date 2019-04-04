const initialState = {
    songTitle: '',
    songFile: null,
    genres: {
        genres1: '',
        genres2: '',
        genres3: '',
    },
    mainArtist: '',
    additionalArtists: [],
    albumArt: null,
    songWriters: [],
    owners: [],
    collaborators: [],
}

export const song = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_SONG':
            return state;
        case 'GET_SONG_PENDING':
            return state;
        case 'GET_SONG_REJECTED':
            return { error: action.payload.data };
        case 'GET_SONG_FULFILLED':
            return action.payload.data;
        case 'UPDATE_SONG_DATA':
            return action.payload;
        default:
            return state;
    }
};
