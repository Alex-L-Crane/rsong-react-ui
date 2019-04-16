import React, { Component } from 'react';
import { withRouter } from 'react-router';
import fulllogo from '../../../assets/img/rchain-fulllogo.svg';
import BasicInput from '../../../components/form-inputs/BasicInput';
import Button from '../../../components/buttons/Button'
import TextButton from '../../../components/buttons/TextButton'

class SignUp extends Component {
	render() {
		return (
			<div className="w-100 vh-100 flex">
				<div className="w-50 bg-blue">
					<div className="w-100 pt2 pl2"><img src={fulllogo} alt="" /></div>
					<div className="ph5 pt5">
						<p className="f1 b white lh-title mb0">Verify your<br /> email<br /> address.</p>
            <p className="f6 white lh-copy">Already have an RSong account?<br /><a href="" className="f6 white">Log in with the correct google or facebook account.</a></p>
					</div>
				</div>
				<div className="w-50 ph5 pt7 bg-black">
        <p className="f5 white lh-copy">We use a couple of different pieces of information to create a secure account for you. Start by entering your name and email address.</p>
        <fieldset className="bn ph0 pt2 mb3">
          <span className="w-100 dib flex items-justify pa0">
            <span className="w-50 dib pl0 pr1 border-box">
              <BasicInput
                name="first_name"
                placeholder="First name *"
                theme="dark"
              />
            </span>
            <span className="w-50 dib pl1 pr0 border-box">
              <BasicInput
                name="last_name"
                placeholder="Last name *"
                theme="dark"
              />
            </span>
          </span>
          <BasicInput name="birthdate"
                      placeholder="Email address *"
                      theme="dark"/>
        </fieldset>
        <div className="pb4">
          <TextButton
            name="cancel"
            buttonText="Cancel"
            theme="dark"/>
          <Button
            name="continue"
            buttonText="Continue"
            theme="dark"/>
        </div>
				</div>
			</div>
		);
	}
}

export default withRouter(SignUp);
