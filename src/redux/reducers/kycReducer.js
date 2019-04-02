const initialState = {
    country: '',
    first_name: '',
    last_name: '',
    birthdate: null,
    gender: '',
    identification: '',
    kycID: '',
    expiration: null,
    cardFront: null,
    cardBack: null,
    selfie: null,
    tos: false
}

export const kyc = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_KYC':
            return state;
        case 'FETCH_KYC_PENDING':
            return state;
        case 'FETCH_KYC_REJECTED':
            return { error: action.payload.data };
        case 'FETCH_KYC_FULFILLED':
            return action.payload.data;
        case 'UPDATE_KYC_DATA':
            return action.payload;
        default:
            return state;
    }
};
