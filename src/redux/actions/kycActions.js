import { axiosInstance } from "../helpers/axiosHelper";

export const fetchKyc = (id) => {
    return {
        type: 'FETCH_KYC',
        payload: axiosInstance.get('/kyc', {
            id
        })
    }
}

export const updateKyc = (data) => {
    return {
        type: 'UPDATE_KYC',
        payload: axiosInstance.put(
            'kyc', {
                data
            }
        )
    }
}

export const addKyc = (data) => {
    const formData = transformKycData(data);
    return {
        type: 'ADD_KYC',
        payload: axiosInstance.post('/kyc', formData)
    }
}

export const updateKycData = (data) => {
    return {
        type: 'UPDATE_KYC_DATA',
        payload: data
    }
}

const transformKycData = (data) => {
    const formData = new FormData();
    formData.append('country_of_residence', data.country);
    formData.append('first_name', data.first_name);
    formData.append('last_name', data.birthdate);
    formData.append('gender', data.gender);
    formData.append('identification_type', data.identification);
    formData.append('identification_id_number', data.kycID);
    formData.append('identification_expiration_date', data.expiration);
    formData.append('identification_front_image', data.cardFront);
    formData.append('identification_back_image', data.cardBack);
    formData.append('identification_selfie_image', data.selfie);
    return formData;
}