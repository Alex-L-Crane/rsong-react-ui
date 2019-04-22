import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import { logout } from '../../redux/actions/authActions';
import { resetSongs } from '../../redux/actions/songsActions';
import { resetKycStatus } from '../../redux/actions/kycActions';

class MainNavLinks extends Component {

	clearStorageAndRedirect = () => {
		localStorage.removeItem('login');
		this.props.resetKycStatus();
		this.props.resetSongs();
		console.log('logged out')
		this.props.history.push('/login');
	}

	logout = () => {		
		if (localStorage.login) {
			logout()
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});
			let localStorageParse = JSON.parse(localStorage.login);
			if (localStorageParse.method === 'facebook' && window.FB) {
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
			} else if (localStorageParse.method === 'google' && window.googleAuthObject) {
				window.googleAuthObject.signOut()
					.then(() => {
						this.clearStorageAndRedirect();
					})
					.catch(() => {
						this.clearStorageAndRedirect();
					})		
			} else {
				this.clearStorageAndRedirect();
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

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
		resetSongs: () => dispatch(resetSongs()),
		resetKycStatus: () => dispatch(resetKycStatus()),		
    }
}

const MainNavLinksRedux = connect(
    mapStateToProps,
    mapDispatchToProps,
)(MainNavLinks);

export default withRouter(MainNavLinksRedux);
