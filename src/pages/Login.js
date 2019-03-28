import React, { Component } from 'react';
import fulllogo from '../assets/img/rchain-fulllogo.svg';


class Login extends Component {
  render() {
    return (
      <div className="w-100 vh-100 flex">
        <div className="w-50 bg-blue">
          <div className="w-100 pt2 pl2"><img src={fulllogo} /></div>
          <div className="ph5 pt5">
            <p className="f1 b white lh-title">Take control<br /> of your<br /> music.</p>
          </div>
        </div>
        <div className="w-50 ph5 pt7 bg-black">
          <a className="facebook-blue db white pv3 ph3 mb4 mw6 br2 f5 tc center pointer">Login / Register with Facebook</a>
          <a className="google-red db white pv3 ph3 mw6 br2 f5 tc center pointer">Login / Register with Facebook</a>
        </div>
      </div>
    );
  }
}

export default Login;
