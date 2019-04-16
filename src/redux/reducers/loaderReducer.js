export const loader = (state = 0, action) => {
    switch (action.type) {
        case 'START_LOADER':
        case 'GET_SONGS_PENDING':
        case 'GET_KYC_STATUS_PENDING':
            return state + 1;
        case 'STOP_LOADER':
        case 'GET_SONGS_REJECTED':
        case 'GET_SONGS_FULFILLED':
        case 'GET_KYC_STATUS_REJECTED':
        case 'GET_KYC_STATUS_FULFILLED':
            return state - 1;
        default:
            return state;
    }
};
