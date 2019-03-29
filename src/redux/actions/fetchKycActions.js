import { axiosInstance } from "../../axiosHelper";

export const fetchKyc = () => {
    return {
        type: 'FETCH_KYC',
        payload: axiosInstance.get('/kyc', {
            id
        })
    }
}