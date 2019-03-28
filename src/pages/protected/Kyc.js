import React, { Component } from 'react';
import Dropdown from '../../components/form-inputs/Dropdown';
import BasicInput from '../../components/form-inputs/BasicInput';
import AddMediaTile from '../../components/mediaTile/AddMediaTile';
import Checkbox from '../../components/form-inputs/Checkbox';
import Radio from '../../components/form-inputs/Radio';

import fulllogo from '../../assets/img/rchain-fulllogo.svg';
import kycSelfie from '../../assets/img/KYC_Selfie.svg';

class Kyc extends Component {
  render() {
    return (
      <section>
        <div className="w-100 fixed top0 right0 bottom0 left0 mw-9 flex">
          <div className="w-50 bg-yellow v-top">
            <div className="w-100 pt2 pl2"><img src={fulllogo}  alt="" /></div>
            <div className="ph5 pt5">
              <p className="f2 b black lh-title">Verify your<br /> identity</p>
              <p className="f5 lh-copy">We require a live ID verification process, which ensures that you are who you claim to be. We protect our members by ensuring nobody impersonates someone else.</p>
            </div>
          </div>
          <div className="w-50 vh-100 ph5 pt7 overflow-x">
            <p className="f6 lh-copy">If you have reached this page and have already submitted your verification information, you logged in with the wrong Facbook or Google account. Log out and log in again with the correct account.</p>

            <Dropdown name="country" options={this.props.countries} placeholder="Country of residence" />
            <span className="w-100 dib flex items-justify pa0">
              <span className="w-50 dib pl0 pr1 border-box">
                <BasicInput name="first_name" placeholder="First name" />
              </span>
              <span className="w-50 dib pl1 pr0 border-box">
                <BasicInput name="last_name" placeholder="Last name" />
              </span>
            </span>
            <BasicInput name="birthdate" placeholder="Date of birth" />

            <span className="f5 b dib ph0 pb2 w-100">Gender</span>

            <span className="dib w-100 ph0 mb3">
              <Radio name="gender" id="female" />
              <a className="v-mid dib pl2 mr3">Female</a>

              <Radio name="gender" id="male" />
              <a className="v-mid pl2">Male</a>
            </span>


            <span className="f5 b dib ph0 pb2 w-100">Identification</span>
            <span className="dib w-100 ph0 mb3">
              <Radio name="identification" id="passport" />
              <a className="v-mid dib pl2 mr3">Passport</a>

              <Radio name="identification" id="dl" />
              <a className="v-mid pl2 mr3">Driver's license</a>

              <Radio name="identification" id="idcard" />
              <a className="v-mid pl2">ID card</a>
            </span>
            <BasicInput name="kycID" placeholder="ID Number" />
            <BasicInput name="expiration" placeholder="Expiration" />

            <span className="f5 b dib ph0 pb2 w-100">Identity card front</span>
            <AddMediaTile />

            <span className="f5 b dib ph0 pb2 w-100">Identity card back</span>
            <AddMediaTile />

            <span className="f5 b dib ph0 pb2 w-100">Selfie with identity card</span>
            <p className="f5 lh-copy">Please provide a photograph with ID or passport and a note marked with “RChain,” “Today’s Date,” and “Signature” hold by hand and ensure the identity information and your face are clear and recognizable.</p>
            <img src={kycSelfie} className="square-tile dib ba mb2" alt=""/>
            <AddMediaTile />

            <span className="dib w-100 ph0 mb3">
              <Checkbox name="terms" />
              <a className="v-mid pl2 underline pointer">Terms of service</a>
            </span>

            <span className="dib pb3 ph0">
              <input
                type="submit"
                name="continue"
                id="submit"
                className="hidebbutton"/>
              <label htmlFor="submit" className="button-wide dib white pv2 ph4 br1 bg-black tc f5 pointer">Continue</label>
            </span>
          </div>
        </div>
      </section>
    );
  }
}

export default Kyc;
