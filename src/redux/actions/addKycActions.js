import { axiosInstance } from "../../axiosHelper";

export const addKyc = (data) => {
    return {
        type: 'ADD_KYC',
        payload: axiosInstance.post(
            'kyc', {
                data
            }
        )
    }
}