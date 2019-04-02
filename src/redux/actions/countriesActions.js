import axios from 'axios';

export const getCountries = () => {
    return {
        type: 'GET_COUNTRIES',
        payload: axios.get('https://restcountries.eu/rest/v2/all?fields=name')
    }
}