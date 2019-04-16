import { axiosInstance } from "../helpers/axiosHelper";

export const getKycStatus = () => {
    return {
        type: 'GET_KYC_STATUS',
        payload: axiosInstance.get('/kyc', {
            headers: {'Authorization': `Bearer ${JSON.parse(localStorage.getItem('login')).token}`}
        })
    }
}

export const skipKyc = () => {
    return axiosInstance.post('/kyc/skip', {}, {
        headers: {'Authorization': `Bearer ${JSON.parse(localStorage.getItem('login')).token}`}
    });
}

export const fetchKyc = (id) => {
    return {
        type: 'GET_KYC',
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
    return axiosInstance.post('/kyc', formData, {
        headers: {'Authorization': `Bearer ${JSON.parse(localStorage.getItem('login')).token}`}
    });
}

export const updateKycData = (data) => {
    return {
        type: 'UPDATE_KYC_DATA',
        payload: data
    }
}

export const resetKycData = () => {
    return {
        type: 'RESET_KYC_DATA',
        payload: {}
    }
}

const transformKycData = (data) => {
    const formData = new FormData();
    formData.append('country_of_residence', data.country);
    formData.append('first_name', data.first_name);
    formData.append('last_name', data.last_name);
    formData.append('date_of_birth', data.birthdate);
    formData.append('gender', data.gender);
    formData.append('identification_type', data.identification);
    formData.append('identification_id_number', data.kycID);
    formData.append('identification_expiration_date', data.expiration);
    formData.append('identification_front_image', data.cardFront);
    if (data.identification !== 'Passport') {
        formData.append('identification_back_image', data.cardBack);
    }
    formData.append('identification_selfie_image', data.selfie);
    return formData;
}