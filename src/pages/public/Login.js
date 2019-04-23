import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import fulllogo from '../../assets/img/rchain-fulllogo.svg';
import { googleLogin, facebookLogin } from '../../redux/actions/authActions';
import { stopLoader, startLoader } from '../../redux/actions/loaderActions';

class Login extends Component {

	setStorageAndRedirect = (method, data) => {
		localStorage.setItem('login', JSON.stringify({ method, ...data }));
		if (data.verification.requireEmail) {
			this.props.history.push('/login/signup-email');
		} else if (data.verification.requireEmailVerification) {
			this.props.history.push('/login/signup-email-verify');
		} else if (data.verification.requireMobile) {
			this.props.history.push('/login/signup-phone');
		} else if (data.verification.requrireMobileVerification) {
			this.props.history.push('/login/signup-phone-verify');
		} else if (data.verification.requireKyc) {
			this.props.history.push('/kyc');
		} else {
			this.props.history.push('/');
		}				
	}

	fbLogin = () => {
		const scope = this;
		if (window.FB) {
			this.props.startLoader();
			window.FB.login(function (response) {
				console.log(response)
				if (response.status === 'connected') {
					facebookLogin(response.authResponse, response.authResponse.accessToken)
					.then((response) => {
						console.log(response);
						scope.props.stopLoader();
						scope.setStorageAndRedirect('facebook', response.data);
					})
					.catch((error) => {
						scope.props.stopLoader();
						console.log(error);
					});
				} else {
					scope.props.stopLoader();
					console.log('unsuccesfull login')
				}			
			}, { scope: 'email' });
		}		
	}

	googleLogin = () => {
		if (window.googleAuthObject) {
			this.props.startLoader();
			window.googleAuthObject.signIn({ scope: 'profile email' })
			.then((response) => {
				console.log(response);
				googleLogin(response.w3, response.Zi.id_token)
				.then((response) => {
					console.log(response);
					this.props.stopLoader();
					this.setStorageAndRedirect('google', response.data);
				})
				.catch((error) => {
					this.props.stopLoader();
					console.log(error);
				});			
			})
			.catch(() => {
				this.props.stopLoader();
			})
		}		
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

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
		startLoader: () => dispatch(startLoader()),
		stopLoader: () => dispatch(stopLoader())
    }
}

const LoginRedux = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Login);

export default withRouter(LoginRedux);
