export const kyc = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_KYC':
            return state;
        case 'FETCH_KYC_PENDING':
            return state;
        case 'FETCH_KYC_REJECTED':
            return { error: action.payload.data };
        case 'FETCH_KYC_FULFILLED':
            return action.payload.data;
        default:
            return state;
    }
};
