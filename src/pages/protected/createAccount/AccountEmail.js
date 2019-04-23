import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ReCAPTCHA from "react-google-recaptcha";
import fulllogo from '../../../assets/img/rchain-fulllogo.svg';
import BasicInput from '../../../components/form-inputs/BasicInput';
import Button from '../../../components/buttons/Button'
import TextButton from '../../../components/buttons/TextButton'
import Checkbox from '../../../components/form-inputs/Checkbox'
import { validateEmailForm } from '../../../validators/accountCreateValidators';
import { startLoader, stopLoader } from '../../../redux/actions/loaderActions';
import { submitEmailVerification } from '../../../redux/actions/authActions';
import ErrorModal from '../../../components/notifications/ErrorModal';
import { logout } from '../../../helpers/logout';

class AccountEmail extends Component {
	constructor(props) {
        super(props);
        this.state = {
			first_name: '',
			last_name: '',
			email: '',
			notifications: false,
			captcha: false,
			showNotifications: false,
			errors: {},
			errorModal: false,
			errorModalMessage: ''
        };
	}

	closeErrorModal = () => {
        this.setState({
            errorModal: false,
        })
	}
	
	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleChangeNotifications = (event) => {
		this.setState({ notifications: event.target.checked });
	}
 
	onChangeCaptcha = (value) => {
		this.setState({ captcha: true });
	}

	onCancel = () => {
		logout(this.props.history);
	}

	submitForm = () => {
		const validForm = this.validateForm();
		if (validForm) {
			this.props.startLoader();
			submitEmailVerification(this.state)
			.then((response) => {
				const user = JSON.parse(localStorage.getItem('login'));
				user.user.first_name = this.state.first_name;
				user.user.last_name = this.state.last_name;
				user.user.email = this.state.email;
				user.verification.requireEmail = false;
				localStorage.setItem('login', JSON.stringify({ ...user }));
				this.props.stopLoader();
				this.props.history.push('/login/signup-email-verify');
			})
			.catch((error) => {
				console.log(error);
				this.props.stopLoader();
				this.setState({
					errorModal: true,
					errorModalMessage: 'Error submiting your data'
				})
			});
		}
	}

	validateForm = () => {
		let errors = {};
		errors = validateEmailForm(this.state);
        this.setState({ errors })
        if (Object.keys(errors).length > 0 && errors.constructor === Object) {
            console.log(errors);
            return false;
        }
        return true;
	}

	render() {
		console.log(this.state)
		return (
			<div className="w-100 vh-100 flex">
				<div className="w-50 bg-blue">
					<div className="w-100 pt2 pl2"><img src={fulllogo} alt="" /></div>
					<div className="ph5 pt5">
						<p className="f1 b white lh-title mb0">Verify your<br /> email<br /> address</p>
            			<p className="f6 white lh-copy">Already have an RSong account?<br />
							<a onClick={this.onCancel} className="f6 white underline pointer">Log in with the correct google or facebook account.</a>
						</p>
					</div>
				</div>
				<div className="w-50 ph5 pt7 bg-black">
					<p className="f5 white lh-copy">We use a couple of different pieces of information to create a secure account for you. Start by entering your name and email address.</p>
					<fieldset className="bn ph0 pt2 mb3">
						<span className="w-100 dib flex items-justify pa0">
							<span className="w-50 dib pl0 pr1 border-box">
							<BasicInput
								name="first_name"
								value={this.state.first_name}
								error={this.state.errors.first_name}
								placeholder="First name *"
								theme="dark"
								onChange={this.handleChange}
							/>
							</span>
							<span className="w-50 dib pl1 pr0 border-box">
							<BasicInput
								name="last_name"
								value={this.state.last_name}
								error={this.state.errors.last_name}
								placeholder="Last name *"
								theme="dark"
								onChange={this.handleChange}
							/>
							</span>
						</span>
						<BasicInput 
							name="email"
							value={this.state.email}
							error={this.state.errors.email}
							placeholder="Email address *"
							theme="dark"
							onChange={this.handleChange}
						/>
        			</fieldset>
					<span className="dib w-100 ph0 mb4 flex">
						<Checkbox 
							name="terms" 
							value={this.state.notifications}
							error={this.state.errors.notifications}
							theme="dark"
							onChange={this.handleChangeNotifications}
						/>
						<span className="white v-mid pl2 f6">I agree to allow RSong to use my email for notifications.<br />We won’t sell your data. *</span>
					</span>
					<span className="dib w-100 ph0 mb4 flex">
						<ReCAPTCHA
							sitekey={process.env.REACT_APP_GOOGLE_CAPTCHA}
							onChange={this.onChangeCaptcha}
							theme="dark"
						/>
					</span>
					<div className="pb4">
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
							onClick={this.submitForm}
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

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
		startLoader: () => dispatch(startLoader()),
		stopLoader: () => dispatch(stopLoader())
    }
}

const AccountEmailRedux = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AccountEmail);

export default withRouter(AccountEmailRedux);