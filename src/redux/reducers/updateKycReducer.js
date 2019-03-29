export const updateKyc = (state = [], action) => {
    switch (action.type) {
        case 'UPDATE_KYC':
            return state;
        case 'UPDATE_KYC_PENDING':
            return state;
        case 'UPDATE_KYC_REJECTED':
            return { error: action.payload.data };
        case 'UPDATE_KYC_FULFILLED':
            return action.payload.data;
        default:
            return state;
    }
};
