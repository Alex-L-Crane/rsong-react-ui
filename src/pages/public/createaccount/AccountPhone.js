import React, { Component } from 'react';
import { withRouter } from 'react-router';
import fulllogo from '../../../assets/img/rchain-fulllogo.svg';
import BasicInput from '../../../components/form-inputs/BasicInput';
import Button from '../../../components/buttons/Button'
import TextButton from '../../../components/buttons/TextButton'
import Checkbox from '../../../components/form-inputs/Checkbox'

class AccountPhone extends Component {
	render() {
		return (
			<div className="w-100 vh-100 flex">
				<div className="w-50 bg-blue">
					<div className="w-100 pt2 pl2"><img src={fulllogo} alt="" /></div>
					<div className="ph5 pt5">
						<p className="f1 b white lh-title mb0">Verify your<br /> phone<br /> number</p>
            <p className="f6 white lh-copy">Already have an RSong account?<br /><a href="" className="f6 white">Log in with the correct google or facebook account.</a></p>
					</div>
				</div>
				<div className="w-50 ph5 pt7 bg-black">
        <p className="f5 white lh-copy">Next, enter your phone number. You’ll recieve a text with a validation code. Standard SMS fees may apply.</p>
        <fieldset className="bn ph0 pt3 mb2">
          <BasicInput name="phone"
                      placeholder="Phone number *"
                      theme="dark"/>
        </fieldset>
        <div className="pb4">
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

export default withRouter(AccountPhone);
