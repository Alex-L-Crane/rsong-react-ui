export const songs = (state = [], action) => {
    switch (action.type) {
        case 'GET_SONGS':
            return state;
        case 'GET_SONGS_PENDING':
            return state;
        case 'GET_SONGS_REJECTED':
            return { error: action.payload.data };
        case 'GET_SONGS_FULFILLED':
            return action.payload.data;
        default:
            return state;
    }
};
