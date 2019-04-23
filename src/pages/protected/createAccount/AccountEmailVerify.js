import React, { Component } from 'react';
import { withRouter } from 'react-router';
import fulllogo from '../../../assets/img/rchain-fulllogo.svg';
import BasicInput from '../../../components/form-inputs/BasicInput';
import Button from '../../../components/buttons/Button'
import TextButton from '../../../components/buttons/TextButton'
import Checkbox from '../../../components/form-inputs/Checkbox'

class AccountEmailVerify extends Component {
	render() {
		return (
			<div className="w-100 vh-100 flex">
				<div className="w-50 bg-blue">
					<div className="w-100 pt2 pl2"><img src={fulllogo} alt="" /></div>
					<div className="ph5 pt5">
						<p className="f1 b white lh-title mb0">Verify your<br /> email<br /> address</p>
            <p className="f6 white lh-copy">Already have an RSong account?<br /><a className="f6 white underline pointer">Log in with the correct google or facebook account.</a></p>
					</div>
				</div>
				<div className="w-50 ph5 pt7 bg-black">
				<span className="white ph0 pt0 f3 b ttc flex justify-between border-box lh-title">An email has been sent to:<br />nilsfrahm@gmail.com</span>
				<p className="f5 white lh-copy">You will recieve an email with a validation code. Enter it below.</p>
				<fieldset className="bn ph0 pt3 mb2">
					<BasicInput
						name="code"
						placeholder="Validation code *"
						theme="dark"
					/>
				</fieldset>
				<div className="pb4">
					<Button
						name="continue"
						buttonText="Continue"
						theme="dark"
					/>
				</div>
				<p className="f6 white lh-copy">Didn’t receive a text? <a className="f6 white underline pointer">Click here to resend.</a></p>
				</div>
			</div>
		);
	}
}

export default withRouter(AccountEmailVerify);
