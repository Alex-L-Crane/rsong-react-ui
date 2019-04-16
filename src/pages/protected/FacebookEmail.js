import React, { Component } from 'react';
import { withRouter } from 'react-router';
import BasicInput from '../../components/form-inputs/BasicInput'
import Checkbox from '../../components/form-inputs/Checkbox'
import Button from '../../components/buttons/Button'
import TextButton from '../../components/buttons/TextButton'
import fulllogo from '../../assets/img/rchain-fulllogo.svg';
import ErrorModal from '../../components/notifications/ErrorModal';
import { sumbmitEmail } from '../../redux/actions/authActions';


class FacebookEmail extends Component {
	constructor(props) {
        super(props);
        this.state = {
			email: '',
			notifications: false,
			error: false,
			errorModal: false,
        };
	}

	closeErrorModal = () => {
        this.setState({
            errorModal: false,
        })
    }

	handleChange = (event) => {
		this.setState({ [event.target.name ]: event.target.value });
	}

	handleChangeNotfications = (event) => {
		this.setState({ notifications: event.target.checked });
	}

	validateForm = () => {
		if (this.state.email === '') {
			this.setState({ error: true });
			return false;
		}
		return true;
	}

	onSubmit = () => {
		if (this.validateForm()) {
			sumbmitEmail(this.state.email, this.state.notifications)
			.then((response) => {
				const user = JSON.parse(localStorage.getItem('login'));
				localStorage.setItem('login', JSON.stringify({ ...user, require_email: false }));
				if (user.require_kyc) {
					this.props.history.push('/kyc');
				} else {
					this.props.history.push('/');
				}
			})
			.catch((error) => {
				console.log(error);
				this.setState({
					errorModal: true,
					errorModalMessage: 'Error submiting Email'
				})
			});
		}
	}

	onCancel = () => {
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
	}

	clearStorageAndRedirect = () => {
		localStorage.removeItem('login');
		console.log('logged out')
		this.props.history.push('/login');
	}

	render() {
		console.log(this.state)
		return (
			<div className="w-100 vh-100 flex">
				<div className="w-50 bg-blue">
					<div className="w-100 pt2 pl2"><img src={fulllogo} alt=""/></div>
					<div className="ph5 pt5">
						<p className="f1 b white lh-title">Enter your<br />email<br />address</p>
					</div>
				</div>
				<div className="w-50 ph5 pt7 bg-black">
					<BasicInput 
						name="email"
						placeholder="Email address *"
						theme="dark"
						value={this.state.email}
						onChange={this.handleChange}
						error={this.state.error}
					/>
					<span className="dib w-100 ph0 mb3">
						<Checkbox 
							name="notfications" 
							theme="dark"
							value={this.state.notifications}
							onChange={this.handleChangeNotfications}
						/>
						<a className="white v-mid pl2 underline pointer">I agree to allow RSong to use my email for notifications</a>
					</span>
					<div className="pv4">
						<TextButton
							name="cancel"
							buttonText="Cancel"
							theme="dark"
							onClick={this.onCancel}
						/>
						<Button
							name="continue"
							buttonText="Continue"
							theme="dark"
							onClick={this.onSubmit}
						/>
					</div>
				</div>
				{this.state.errorModal ? 
                    <ErrorModal
                        closeErrorModal={this.closeErrorModal}
                        errorMessage={this.state.errorModalMessage}
                    /> 
                    : <></>
                }
			</div>
		);
	}
}

export default withRouter(FacebookEmail);
