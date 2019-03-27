import React, { Component } from 'react';
import fulllogo from '../../assets/img/rchain-fulllogo.svg';

class Login extends Component {

	fbLogin() {
		window.FB.login(function (response) {
			console.log(response)
			localStorage.setItem('login', JSON.stringify(
				{
					id: response.id,
					method: 'facebook',
				}
			))
		}, { scope: 'email' });
	}

	googleLogin() {
		window.googleAuthObject.signIn(
			{
				scope: 'profile email'
			}
		).then((response) => {
			localStorage.setItem('login', JSON.stringify(
				{
					id: response.El,
					method: 'google',
				}
			))
			console.log(response);
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
					<a className="facebook-blue db white pv3 ph3 mb4 mw6 br2 f5 tc center" onClick={this.fbLogin}>Login / Register with Facebook</a>
					<a className="google-red db white pv3 ph3 mw6 br2 f5 tc center" onClick={this.googleLogin}>Login / Register with Google</a>
				</div>
			</div>
		);
	}
}

export default Login;
