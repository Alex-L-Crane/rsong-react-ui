import React, { Component } from 'react';
import { withRouter } from 'react-router';
import fulllogo from '../../assets/img/rchain-fulllogo.svg';
import { googleLogin } from '../../redux/actions/authActions';

class Login extends Component {

	setStorageAndRedirect = ({ token, method, kyc }) => {
		localStorage.setItem('login', JSON.stringify({ token, method, kyc }));
		if (!kyc) {
			this.props.history.push('/kyc');
		}
		this.props.history.push('/');
	}

	fbLogin = () => {
		const scope = this;
		window.FB.login(function (response) {
			console.log(response)
			if (response.status === 'connected') {
				scope.setStorageAndRedirect({ token: response.id, method: 'facebook' });
			} else {
				console.log('unsuccesfull login')
			}			
		}, { scope: 'email' });
	}

	googleLogin = () => {
		window.googleAuthObject.signIn({ scope: 'profile email' })
		.then((response) => {
			console.log(response);
			googleLogin(response.w3, response.Zi.id_token)
			.then((response) => {
				console.log(response);
				this.setStorageAndRedirect({ token: response.data.token, method: 'google', kyc: response.data.require_kyc });
			})
			.catch((error) => {
				console.log(error);
			});			
		})
	}

	render() {
		return (
			<div className="w-100 vh-100 flex">
				<div className="w-50 bg-blue">
					<div className="w-100 pt2 pl2"><img src={fulllogo} alt="" /></div>
					<div className="ph5 pt5">
						<p className="f1 b white lh-title">Take control<br /> of your<br /> music.</p>
					</div>
				</div>
				<div className="w-50 ph5 pt7 bg-black">
					<a className="facebook-blue db white pv3 ph3 mb4 mw6 br2 f5 tc center pointer" onClick={this.fbLogin}>Login / Register with Facebook</a>
					<a className="google-red db white pv3 ph3 mw6 br2 f5 tc center pointer" onClick={this.googleLogin}>Login / Register with Google</a>
				</div>
			</div>
		);
	}
}

export default withRouter(Login);
