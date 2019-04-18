export const kycStatus = (state = {}, action) => {
    switch (action.type) {
        case 'GET_KYC_STATUS':
            return state;
        case 'GET_KYC_STATUS_PENDING':
            return state;
        case 'GET_KYC_STATUS_REJECTED':
            return { error: action.payload.data };
        case 'GET_KYC_STATUS_FULFILLED':
            return action.payload.data;
        case 'RESET_KYC_STATUS':
            return {};
        default:
            return state;
    }
};
