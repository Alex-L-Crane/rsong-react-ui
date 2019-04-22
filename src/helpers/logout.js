import { store } from '../redux/store';
import { resetKycStatus } from '../redux/actions/kycActions';
import { resetSongs } from '../redux/actions/songsActions';

export const logout = (history) => {
    let localStorageParse = JSON.parse(localStorage.login);
	if (localStorageParse.method === 'facebook' && window.FB) {
		window.FB.getLoginStatus(function (response) {
			if (response.status === 'connected') {
				console.log('logout facebook, connected')
				window.FB.logout(function (response) {
					console.log(response)
					clearStorageAndRedirect(history);
				});
			} else {
				console.log('logout facebook, not connected')
				clearStorageAndRedirect(history);
			}
		});
	} else if (localStorageParse.method === 'google' && window.googleAuthObject) {
        console.log('logout google')
		window.googleAuthObject.signOut()
			.then(() => {
				clearStorageAndRedirect(history);
			})
			.catch(() => {
				clearStorageAndRedirect(history);
			})
	} else {
		clearStorageAndRedirect(history);
	}
}

function clearStorageAndRedirect(history) {
	localStorage.removeItem('login');
	store.dispatch(resetSongs());
	store.dispatch(resetKycStatus());
    console.log('logged out');
    if (history) {
        history.push('/login');
    } else {
        window.location.href='/login';
    }    
}