export const countries = (state = [], action) => {
    switch (action.type) {
        case 'GET_COUNTRIES':
            return state;
        case 'GET_COUNTRIES_PENDING':
            return state;
        case 'GET_COUNTRIES_REJECTED':
            return { error: action.payload.data };
        case 'GET_COUNTRIES_FULFILLED':
            return action.payload.data;
        default:
            return state;
    }
};
