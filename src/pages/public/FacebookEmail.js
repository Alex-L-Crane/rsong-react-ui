import React, { Component } from 'react';
import BasicInput from '../../components/form-inputs/BasicInput'
import Checkbox from '../../components/form-inputs/Checkbox'
import Button from '../../components/buttons/Button'
import TextButton from '../../components/buttons/TextButton'

import fulllogo from '../../assets/img/rchain-fulllogo.svg';


class FacebookEmail extends Component {
  render() {
    return (
      <div className="w-100 vh-100 flex">
        <div className="w-50 bg-blue">
          <div className="w-100 pt2 pl2"><img src={fulllogo} alt=""/></div>
          <div className="ph5 pt5">
            <p className="f1 b white lh-title">Enter your<br />email<br />address</p>
          </div>
        </div>
        <div className="w-50 ph5 pt7 bg-black">
          <BasicInput name="birthdate"
                      placeholder="Email address *"
                      theme="dark"/>
          <span className="dib w-100 ph0 mb3">
            <Checkbox name="terms" theme="dark"/>
            <a className="white v-mid pl2 underline pointer">I agree to allow RSong to use my email for notifications</a>
          </span>
          <div className="pv4">
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

export default FacebookEmail;
