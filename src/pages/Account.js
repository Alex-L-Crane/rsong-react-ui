import React, { Component } from 'react';
import AppHeader from '../components/header/AppHeader';

class Account extends Component {
  render() {
    return (
      <section>
        <AppHeader
          pageTitle="Hi, Nils Frahm" />
          <div className="mw8 ph5 pt5">
            <span className="f3 b lh-title dib mw7">Your identity verification is pending. We’ll let you know when you’re approved.</span>
          </div>
      </section>
    );
  }
}

export default Account;
