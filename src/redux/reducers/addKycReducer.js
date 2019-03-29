export const addKyc = (state = [], action) => {
    switch (action.type) {
        case 'ADD_KYC':
            return state;
        case 'ADD_KYC_PENDING':
            return state;
        case 'ADD_KYC_REJECTED':
            return { error: action.payload.data };
        case 'ADD_KYC_FULFILLED':
            return action.payload.data;
        default:
            return state;
    }
};
