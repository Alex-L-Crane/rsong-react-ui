import { axiosInstance } from "../helpers/axiosHelper";

export const getCountries = () => {
    return {
        type: 'GET_COUNTRIES',
        payload: axiosInstance.get('/countries', {

        })
    }
}