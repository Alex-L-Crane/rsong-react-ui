export const genres = (state = [], action) => {
    switch (action.type) {
        case 'GET_GENRES':
            return state;
        case 'GET_GENRES_PENDING':
            return state;
        case 'GET_GENRES_REJECTED':
            return { error: action.payload.data };
        case 'GET_GENRES_FULFILLED':
            return action.payload.data;
        default:
            return state;
    }
};
