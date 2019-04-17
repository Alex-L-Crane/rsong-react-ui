import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT,
});

axiosInstance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error.response.status === 401) {
        let localStorageParse = JSON.parse(localStorage.login);
		if (localStorageParse.method === 'facebook') {
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
		} else if (localStorageParse.method === 'google') {
			if(window.googleAuthObject) {
				window.googleAuthObject.signOut()
					.then(() => {
						clearStorageAndRedirect();
					})
			}
		}
    }
    return Promise.reject(error);
});

function clearStorageAndRedirect() {
    localStorage.removeItem('login');
    console.log('logged out')
    window.location.href='/login';
}