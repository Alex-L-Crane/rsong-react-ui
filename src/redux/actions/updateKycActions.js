import { axiosInstance } from "../../axiosHelper";

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