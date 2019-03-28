import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

class MainNavLinks extends Component {

	clearStorageAndRedirect = () => {
		localStorage.removeItem('login');
		console.log('logged out')
		this.props.history.push('/login');
	}

	logout = () => {
		if (localStorage.login) {
			let localStorageParse = JSON.parse(localStorage.login);
			if (localStorageParse.method === 'facebook') {
				const scope = this;
				window.FB.getLoginStatus(function (response) {
					if (response.status === 'connected') {
						console.log('connected')
						window.FB.logout(function (response) {
							console.log(response)
							scope.clearStorageAndRedirect();
						});
					} else {
						console.log('not connected')
						scope.clearStorageAndRedirect();
					}
				});
			} else if (localStorageParse.method === 'google') {
				window.googleAuthObject.signOut()
					.then(() => {
						this.clearStorageAndRedirect();
					})
			}
		} else {
			this.clearStorageAndRedirect();
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

export default withRouter(MainNavLinks);
