import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Dropdown from '../../components/form-inputs/Dropdown';
import BasicInput from '../../components/form-inputs/BasicInput';
import Checkbox from '../../components/form-inputs/Checkbox';
import Radio from '../../components/form-inputs/Radio';
import FileInput from '../../components/form-inputs/FileInput';
import Button from '../../components/buttons/Button';
import { updateKycData } from '../../redux/actions/kycActions';
import fulllogo from '../../assets/img/rchain-fulllogo.svg';
import kycSelfie from '../../assets/img/KYC_Selfie.svg';
import Terms from '../../components/notifications/Terms';

class Kyc extends Component {
	constructor(props) {
        super(props);
        this.state = {
			cardFront: '',
			cardBack: '',
			selfie: '',
			showTos: false,
			errors: {}
        };
    }

	handleChange = (event) => {
		this.props.handleChange({ ...this.props.kyc, [event.target.name]: event.target.value });
	}

	handleChangeFile = (event) => {
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

	submitForm = () => {
		const validForm = this.validateForm();
		if (validForm) {
			//akcija
		}
	}

	validateForm = () => {
		const errors = {};
        this.setState({ errors })
        if (errors !== {}) {
            console.log(errors)
            return false;
        }
        return true;
	}

	render() {
		console.log(this.props.kyc)
		return (
			<section>
				<div className="w-100 fixed top0 right0 bottom0 left0 mw-9 flex">
					<div className="w-50 bg-yellow v-top">
						<div className="w-100 pt2 pl2"><img src={fulllogo}  alt="" /></div>
						<div className="ph5 pt5">
							<p className="f2 b black lh-title">Verify your<br /> identity</p>
							<p className="f5 lh-copy">We require a live ID verification process, which ensures that you are who you claim to be. We protect our members by ensuring nobody impersonates someone else.</p>
							<span className="dib ph0 mt2 mb2">
								<Button
										name="skip"
										buttonText="Skip for now"
								/>
							</span>
							<p className="f5 lh-copy">You’re welcome to skip the identity verification process for now. However, you won’t get paid for your music until your identity is verified.</p>
						</div>
					</div>
					<div className="w-50 vh-100 ph5 pt7 overflow-x">
						<p className="f6 lh-copy">If you have reached this page and have already submitted your verification information, you logged in with the wrong Facbook or Google account. Log out and log in again with the correct account.</p>

						<fieldset className="bn ph0 pt2 mb3">
							<Dropdown name="country" options={this.props.countries} placeholder="Country of residence" />
							<span className="w-100 dib flex items-justify pa0">
								<span className="w-50 dib pl0 pr1 border-box">
									<BasicInput
										name="first_name"
										placeholder="First name"
										value={this.props.kyc.first_name}
										onChange={this.handleChange}
									/>
								</span>
								<span className="w-50 dib pl1 pr0 border-box">
									<BasicInput
										name="last_name"
										placeholder="Last name"
										value={this.props.kyc.last_name}
										onChange={this.handleChange}
									/>
								</span>
							</span>
							<BasicInput
								name="birthdate"
								placeholder="Date of birth"
								value={this.props.kyc.birthdate}
								onChange={this.handleChange}
							/>
						</fieldset>

						<fieldset className="bn ph0 mb3">
							<span className="f5 b dib ph0 pb2 w-100">Gender</span>

							<span className="dib w-100 ph0 mb3">
								<Radio
									name="gender"
									id="female"
									value="female"
									onChange={this.handleChange}
									checked={this.props.kyc.gender === 'female' ? true : false}
								/>
								<a className="v-mid dib pl2 mr3">Female</a>

								<Radio
									name="gender"
									id="male"
									value="male"
									onChange={this.handleChange}
									checked={this.props.kyc.gender === 'male' ? true : false}
								/>
								<a className="v-mid pl2 mr3">Male</a>

								<Radio
									name="gender"
									id="genderneutral"
									value="genderneutral"
									onChange={this.handleChange}
									checked={this.props.kyc.gender === 'genderneutral' ? true : false}
								/>
								<a className="v-mid pl2">Gender neutral</a>
							</span>
						</fieldset>

						<fieldset className="bn ph0 mb3">
							<span className="f5 b dib ph0 pb2 w-100">Identification</span>
							<span className="dib w-100 ph0 mb3">
								<Radio
									name="identification"
									id="passport"
									value="passport"
									onChange={this.handleChange}
									checked={this.props.kyc.identification === 'passport' ? true : false}
								/>
								<a className="v-mid dib pl2 mr3">Passport</a>

								<Radio
									name="identification"
									id="dl"
									value="dl"
									onChange={this.handleChange}
									checked={this.props.kyc.identification === 'dl' ? true : false}
								/>
								<a className="v-mid pl2 mr3">Driver's license</a>

								<Radio
									name="identification"
									id="idcard"
									value="idcard"
									onChange={this.handleChange}
									checked={this.props.kyc.identification === 'idcard' ? true : false}
								/>
								<a className="v-mid pl2">ID card</a>
							</span>
							<BasicInput
								name="kycID"
								placeholder="ID Number"
								value={this.props.kyc.kycID}
								onChange={this.handleChange}
							/>
							<BasicInput
								name="expiration"
								placeholder="Expiration"
								value={this.props.kyc.expiration}
								onChange={this.handleChange}
							/>
						</fieldset>

						<fieldset className="bn ph0 mb3">
							<span className="f5 b dib ph0 pb2 w-100">Identity card front</span>
							<div className="square-tile">
								<FileInput
									name="cardFront"
									onChange={this.handleChangeFile}
									image={this.state.cardFront}
								/>
							</div>
						</fieldset>

						{this.props.kyc.identification !== 'passport' ?
							(
								<fieldset className="bn ph0 mb3">
									<span className="f5 b dib ph0 pb2 w-100">Identity card back</span>
									<div className="square-tile">
										<FileInput
											name="cardBack"
											onChange={this.handleChangeFile}
											image={this.state.cardBack}
										/>
									</div>
								</fieldset>
							) : (
								<></>
							)
						}

						<fieldset className="bn ph0 mb3">
							<span className="f5 b dib ph0 pb2 w-100">Selfie with identity card</span>
							<p className="f5 lh-copy">Please provide a photograph with ID or passport and a note marked with “RChain,” “Today’s Date,” and “Signature” hold by hand and ensure the identity information and your face are clear and recognizable.</p>
							<img src={kycSelfie} className="square-tile dib ba mb2" alt=""/>
							<div className="square-tile">
								<FileInput
									name="selfie"
									onChange={this.handleChangeFile}
									image={this.state.selfie}
								/>
							</div>
						</fieldset>

						<span className="dib w-100 ph0 mb3">
							<Checkbox
								name="tos"
								checked={this.props.kyc.tos}
								onChange={this.handleChangeTos}
							/>
							<a className="v-mid pl2 underline pointer" onClick={this.handleShowTos}>Terms of service</a>
							{this.state.showTos ? <Terms handleChange={this.handleChangeTosModal} /> : <></> }
						</span>

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
    }
}

const KycRedux = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Kyc);

export default withRouter(KycRedux);
