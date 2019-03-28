const musicGenres = [
    {
        id: 1,
        name: 'Rap',
    },
    {
        id: 2,
        name: 'Rock',
    },
    {
        id: 3,
        name: 'Jazz',
    },
    {
        id: 4,
        name: 'R&B',
    }
]

export const genres = (state = [...musicGenres], action) => {
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
