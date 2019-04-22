import axios from 'axios';
import { store } from '../store';
import { resetSongs } from '../actions/songsActions';
import { resetKycStatus } from '../actions/kycActions';

export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT,
});

axiosInstance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error && error.response && error.response.status === 401) {
        let localStorageParse = JSON.parse(localStorage.login);
		if (localStorageParse.method === 'facebook' && window.FB) {
			window.FB.getLoginStatus(function (response) {
				if (response.status === 'connected') {
					console.log('connected')
					window.FB.logout(function (response) {
						console.log(response)
						clearStorageAndRedirect();
					});
				} else {
					console.log('not connected')
					clearStorageAndRedirect();
				}
			});
		} else if (localStorageParse.method === 'google' && window.googleAuthObject) {
			window.googleAuthObject.signOut()
				.then(() => {
					clearStorageAndRedirect();
				})
				.catch(() => {
					clearStorageAndRedirect();
				})
		} else {
			clearStorageAndRedirect();
		}
    }
    return Promise.reject(error);
});

function clearStorageAndRedirect() {
	localStorage.removeItem('login');
	store.dispatch(resetSongs());
	store.dispatch(resetKycStatus());
    console.log('logged out')
    window.location.href='/login';
}