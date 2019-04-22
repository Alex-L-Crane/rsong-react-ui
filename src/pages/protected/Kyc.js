import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Dropdown from '../../components/form-inputs/Dropdown';
import BasicInput from '../../components/form-inputs/BasicInput';
import Checkbox from '../../components/form-inputs/Checkbox';
import Radio from '../../components/form-inputs/Radio';
import FileInput from '../../components/form-inputs/FileInput';
import Button from '../../components/buttons/Button';
import { updateKycData, addKyc, skipKyc, resetKycData } from '../../redux/actions/kycActions';
import fulllogo from '../../assets/img/rchain-fulllogo.svg';
import kycSelfie from '../../assets/img/KYC_Selfie.svg';
import Terms from '../../components/notifications/Terms';
import { validateKycForm } from '../../validators/kycValidator';
import { getCountries } from '../../redux/actions/countriesActions';
import BasicDatePicker from '../../components/form-inputs/BasicDatePicker';
import ErrorMessages from '../../components/notifications/ErrorMessages';
import ErrorModal from '../../components/notifications/ErrorModal';
import { stopLoader, startLoader } from '../../redux/actions/loaderActions';

class Kyc extends Component {
	constructor(props) {
        super(props);
        this.state = {
			cardFront: '',
			cardBack: '',
			selfie: '',
			showTos: false,
			errors: {},
			errorModal: false,
			errorModalMessage: ''
        };
	}

	componentWillMount = () => {
		this.props.getCountries();
	}

    componentWillUnmount = () => {
        this.props.resetKycData();
	}

	closeErrorModal = () => {
        this.setState({
            errorModal: false,
        })
    }

	skipKyc = () => {
		this.props.startLoader();
		skipKyc()
		.then((resonse) => {
			this.props.stopLoader();
			this.props.history.push('/');
		})
		.catch((error) => {
			console.log(error);
			this.props.stopLoader();
			this.setState({
				errorModal: true,
				errorModalMessage: 'Error skiping KYC'
			})
		})
	}

	handleChange = (event) => {
		this.props.handleChange({ ...this.props.kyc, [event.target.name]: event.target.value });
	}

	handleChangeDropdown = (name, value) => {
		this.props.handleChange({ ...this.props.kyc, [name]: value });
	}

	handleChangeBirthdate = (value) => {
		this.props.handleChange({ ...this.props.kyc, birthdate: value });
	}

	handleChangeExpiration = (value) => {
		this.props.handleChange({ ...this.props.kyc, expiration: value });
	}

	handleChangeFile = (event) => {
		console.log(event.target.files[0].type)
		const scope = this;
		const name = event.target.name;
		this.props.handleChange({ ...this.props.kyc, [name]: event.target.files[0] });
		const reader = new FileReader();
		reader.onload = function(e) {
			scope.setState({ [name]: e.target.result });
		}
		reader.readAsDataURL(event.target.files[0]);
	}

	handleChangeTos = (event) => {
		this.props.handleChange({ ...this.props.kyc, tos: event.target.checked });
	}

	handleChangeTosModal = (value) => {
		this.props.handleChange({ ...this.props.kyc, tos: value });
		this.handleShowTos();
	}

	handleShowTos = () => {
		this.setState({ showTos: !this.state.showTos });
	}

	handleRemoveFile = (name) => {
		this.props.handleChange({ ...this.props.kyc, [name]: null });
		this.setState({ [name]: '' })
    }

	submitForm = () => {
		const validForm = this.validateForm();
		if (validForm) {
			this.props.startLoader();
			addKyc(this.props.kyc)
			.then((response) => {
				const user = JSON.parse(localStorage.getItem('login'));
				localStorage.setItem('login', JSON.stringify({ ...user, require_kyc: false }));
				this.props.stopLoader();
				this.props.history.push('/');
			})
			.catch((error) => {
				console.log(error);
				this.props.stopLoader();
				this.setState({
					errorModal: true,
					errorModalMessage: 'Error submiting KYC'
				})
			});
		}
	}

	validateForm = () => {
		let errors = {};
		const { kyc } = this.props;
		errors = validateKycForm(kyc);
        this.setState({ errors })
        if (Object.keys(errors).length > 0 && errors.constructor === Object) {
            console.log(errors);
            return false;
        }
        return true;
	}

	render() {
		console.log(this.props.kyc)
		return (
			<section className="relative">
				<div className="w-100 absolute top0 right0 bottom0 left0 mw-9 flex overflow-hidden">
					<div className="w-50 bg-yellow v-top">
						<div className="w-100 pt2 pl2"><img src={fulllogo} alt="" /></div>
						<div className="ph5 pt5">
							<p className="f2 b black lh-title">Verify your<br /> identity</p>
							<p className="f5 lh-copy">We require a live ID verification process, which ensures that you are who you claim to be. We protect our members by ensuring nobody impersonates someone else.</p>
							<span className="dib ph0 mt2 mb2">
								<Button
									name="skip"
									buttonText="Skip for now"
									onClick={this.skipKyc}
								/>
							</span>
							<p className="f5 lh-copy">You’re welcome to skip the identity verification process for now. However, you won’t get paid for your music until your identity is verified.</p>
						</div>
					</div>
					<div className="w-50 vh-100 ph5 pt7 overflow-x">
						<p className="f6 lh-copy">If you have reached this page and have already submitted your verification information, you logged in with the wrong Facbook or Google account. Log out and log in again with the correct account.</p>

						<fieldset className="bn ph0 pt2 mb3">
							<Dropdown
								name="country"
								options={this.props.countries}
								value={this.props.kyc.country}
								onChange={this.handleChangeDropdown}
								placeholder="Country of residence *"
								error={this.state.errors.countries}
							/>
							<span className="w-100 dib flex items-justify pa0">
								<span className="w-50 dib pl0 pr1 border-box">
									<BasicInput
										name="first_name"
										placeholder="First name *"
										value={this.props.kyc.first_name}
										onChange={this.handleChange}
										error={this.state.errors.first_name}
									/>
								</span>
								<span className="w-50 dib pl1 pr0 border-box">
									<BasicInput
										name="last_name"
										placeholder="Last name *"
										value={this.props.kyc.last_name}
										onChange={this.handleChange}
										error={this.state.errors.last_name}
									/>
								</span>
							</span>
							<BasicDatePicker
								name="birthdate"
								placeholder="Date of birth *"
								value={this.props.kyc.birthdate}
								onChange={this.handleChangeBirthdate}
								error={this.state.errors.birthdate}
								maxDate={true}
							/>
						</fieldset>

						<fieldset className="bn ph0 mb3">
							<span className="f5 b dib ph0 pb2 w-100">Gender *</span>

							<span className="dib w-100 ph0 mb3 flex">
								<span className="w-33">
									<Radio
										name="gender"
										id="female"
										value="female"
										onChange={this.handleChange}
										checked={this.props.kyc.gender === 'female' ? true : false}
										error={this.state.errors.gender}
									/>
									<a className="v-mid dib f5 pl2">Female</a>
								</span>

								<span className="w-33">
									<Radio
										name="gender"
										id="male"
										value="male"
										onChange={this.handleChange}
										checked={this.props.kyc.gender === 'male' ? true : false}
										error={this.state.errors.gender}
									/>
									<a className="v-mid f5 pl2">Male</a>
								</span>

								<span className="w-33 flex">
									<Radio
										name="gender"
										id="genderneutral"
										value="gender_neutral"
										onChange={this.handleChange}
										checked={this.props.kyc.gender === 'gender_neutral' ? true : false}
										error={this.state.errors.gender}
									/>
									<a className="v-mid f5 pl2">Gender<br />neutral</a>
								</span>
							</span>
						</fieldset>

						<fieldset className="bn ph0 mb4">
							<span className="f5 b dib ph0 pb2 w-100">Identification *</span>
							<span className="dib w-100 ph0 mb3 flex">
								<span className="w-33">
									<Radio
										name="identification"
										id="passport"
										value="passport"
										onChange={this.handleChange}
										checked={this.props.kyc.identification === 'passport' ? true : false}
										error={this.state.errors.identification}
									/>
									<a className="v-mid dib pl2">Passport</a>
								</span>

								<span className="w-33 flex">
									<Radio
										name="identification"
										id="dl"
										value="drivers_licence"
										onChange={this.handleChange}
										checked={this.props.kyc.identification === 'drivers_licence' ? true : false}
										error={this.state.errors.identification}
									/>
									<a className="v-mid pl2">Driver's<br/>licence</a>
								</span>

								<span className="w-33">
									<Radio
										name="identification"
										id="idcard"
										value="id_card"
										onChange={this.handleChange}
										checked={this.props.kyc.identification === 'id_card' ? true : false}
										error={this.state.errors.identification}
									/>
									<a className="v-mid pl2">ID card</a>
								</span>
							</span>
							<BasicInput
								name="kycID"
								placeholder="Number *"
								value={this.props.kyc.kycID}
								onChange={this.handleChange}
								error={this.state.errors.kycID}
							/>
							<BasicDatePicker
								name="expiration"
								placeholder="Expiration *"
								value={this.props.kyc.expiration}
								onChange={this.handleChangeExpiration}
								error={this.state.errors.expiration}
								minDate={true}
							/>
						</fieldset>

						{this.props.kyc.identification !== '' ? <>
						<fieldset className="bn ph0 mb4">
							<span className="f5 b dib ph0 pb2 w-100">
								{this.props.kyc.identification === 'passport' ? 'Passport ' : <></>}
								{this.props.kyc.identification === 'drivers_licence' ? "Driver's license " : <></>}
								{this.props.kyc.identification === 'id_card' ? "ID card " : <></>}
								front *</span>
							<FileInput
								name="cardFront"
								onChange={this.handleChangeFile}
								image={this.state.cardFront}
								error={this.state.errors.cardFront}
								extraClass="square-tile"
								handleRemove={this.handleRemoveFile}
							/>
						</fieldset>

						{this.props.kyc.identification !== 'passport' ?
							(
								<fieldset className="bn ph0 mb3">
									<span className="f5 b dib ph0 pb2 w-100">
										{this.props.kyc.identification === 'passport' ? 'Passport ' : <></>}
										{this.props.kyc.identification === 'drivers_licence' ? "Driver's license " : <></>}
										{this.props.kyc.identification === 'id_card' ? "ID card " : <></>}
										back *</span>
									<FileInput
										name="cardBack"
										onChange={this.handleChangeFile}
										image={this.state.cardBack}
										error={this.state.errors.cardBack}
										extraClass="square-tile"
										handleRemove={this.handleRemoveFile}
									/>
								</fieldset>
							) : (
								<></>
							)
						}

						<fieldset className="bn ph0 mb4">
							<span className="f5 b dib ph0 pb2 w-100">Selfie with
								{this.props.kyc.identification === 'passport' ? ' passport ' : <></>}
								{this.props.kyc.identification === 'drivers_licence' ? " driver's license " : <></>}
								{this.props.kyc.identification === 'id_card' ? " ID card " : <></>}
								*</span>
							<p className="f5 lh-copy">Please provide a photograph with ID or passport and a note marked with “RChain,” “Today’s Date,” and “Signature” hold by hand and ensure the identity information and your face are clear and recognizable.</p>
							<img src={kycSelfie} className="square-tile dib ba mb2" alt=""/>
								<FileInput
									name="selfie"
									onChange={this.handleChangeFile}
									image={this.state.selfie}
									error={this.state.errors.selfie}
									extraClass="square-tile"
									handleRemove={this.handleRemoveFile}
								/>
						</fieldset>
						</> : <></>}

						<span className="dib w-100 ph0 mb3">
							<Checkbox
								name="tos"
								checked={this.props.kyc.tos}
								onChange={this.handleChangeTos}
								error={this.state.errors.tos}
							/>
							<a className="v-mid pl2 underline pointer" onClick={this.handleShowTos}>Terms of service</a>
							{this.state.showTos ? <Terms handleChange={this.handleChangeTosModal} /> : <></> }
						</span>

						<div>
						{Object.keys(this.state.errors).length > 0 && this.state.errors.constructor === Object ?
							(
								<ErrorMessages
									errorMessages={[{ id: '1', message: '* Fill out required fields before proceeding' }]}
								/>
							) : (
								<></>
							)
						}
						</div>

						<span className="dib pb3 ph0">
							<input
								type="submit"
								name="continue"
								id="submit"
								className="hidebbutton"
								onClick={this.submitForm}
							/>
							<label htmlFor="submit" className="button-wide dib white pv2 ph4 br1 bg-black tc f5 pointer">Continue</label>
						</span>

					</div>
				</div>
				{this.state.errorModal ?
                    <ErrorModal
                        closeErrorModal={this.closeErrorModal}
                        errorMessage={this.state.errorModalMessage}
                    />
                    : <></>
                }
			</section>
		);
	}
}

function mapStateToProps(state) {
    return {
        kyc: state.kyc,
        countries: state.countries,
    }
}

function mapDispatchToProps(dispatch) {
    return {
		handleChange: (data) => dispatch(updateKycData(data)),
		getCountries: () => dispatch(getCountries()),
		resetKycData: () => dispatch(resetKycData()),
		startLoader: () => dispatch(startLoader()),
		stopLoader: () => dispatch(stopLoader())
    }
}

const KycRedux = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Kyc);

export default withRouter(KycRedux);
