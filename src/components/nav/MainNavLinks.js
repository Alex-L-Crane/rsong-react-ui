import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class MainNavLinks extends Component {

	logout() {
		if (localStorage.login) {
			let localStorageParse = JSON.parse(localStorage.login);
			if (localStorageParse.method === 'facebook') {
				window.FB.getLoginStatus(function (response) {
					if (response.status === 'connected') {
						console.log('connected')
						window.FB.logout(function (response) {
							console.log(response)
							localStorage.removeItem('login');
							console.log('logged out')
						});
					} else {
						console.log('not connected')
					}
				});
			} else if (localStorageParse.method === 'google') {
				window.googleAuthObject.signOut()
					.then(() => {
						console.log(localStorage)
						localStorage.removeItem('login');
						console.log(localStorage)
					})
			}
		} else {
			console.log('not connected at all')
		}
	}

	render() {
		return (
			<ul className="list white flex">
				<li className="mr4">
					<NavLink exact className="white link pt2 ttu" activeClassName="bt bw2 b--white" to="/">songs</NavLink>
				</li>
				<li className="mr4">
					<NavLink className="white link pt2 ttu" activeClassName="bt bw2 b--white" to="/account">account</NavLink>
				</li>
				<li className="mr4">
					<span className="pt2 ttu" onClick={this.logout}>log out</span>
				</li>
			</ul>);
	}
}

export default MainNavLinks;
