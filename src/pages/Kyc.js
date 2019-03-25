import React, { Component } from 'react';
import Dropdown from '../components/form-inputs/Dropdown'
import fulllogo from '../assets/img/rchain-fulllogo.svg';
import NavBar from '../components/nav/NavBar';

class Kyc extends Component {
  render() {
    return (
      <section>
        <div className="w-100 vh-100 mw-9 flex">
          <div className="w-50 bg-yellow">
            <div className="w-100 pt2 pl2"><img src={fulllogo} /></div>
            <div className="ph5 pt5">
              <p className="f2 b black lh-title">Verify your<br /> identity</p>
              <p className="f5 lh-copy">We require a live ID verification process, which ensures that you are who you claim to be. We protect our members by ensuring nobody impersonates someone else.</p>
            </div>
          </div>
          <div className="w-50 ph5 pt7">
            <p className="f6 lh-copy">If you have reached this page and have already submitted your verification information, you logged in with the wrong Facbook or Google account. Log out and log in again with the correct account.</p>

            <Dropdown name="country" placeholder="Country of residence" />
          </div>
        </div>
      </section>
    );
  }
}

export default Kyc;
