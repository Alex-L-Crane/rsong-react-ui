import React, { Component } from 'react';
import Button from '../buttons/Button'

class LostConnection extends Component {
  render() {
    return (
      <div className="fixed top-0 right-0 bottom-0 left-0 z-max bg-black">
        <section className="w-680 mt5 white center">
          <p className="f3 b lh-title">Connection was lost</p>
          <div>
            <p className="f5 lh-copy">Click the retry button to attemt to reconnect.</p>
          </div>
          <div className="pv4">
            <Button
              name="retry"
              buttonText="Retry"
              theme="dark"/>
          </div>
        </section>
      </div>
    );
  }
}

export default LostConnection;
