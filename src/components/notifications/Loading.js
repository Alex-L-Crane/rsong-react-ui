import React, { Component } from 'react';

class Loading extends Component {
  render() {
    return (
      <div className="fixed top-0 right-0 bottom-0 left-0 z-9999">
        <section className="w-50 h5 mt5 white center relative z-max tc">
          <div id="barcontainer">
            <div id="meter"></div>
          </div>
          <span className="f4 white dib pa3">Loading...</span>
        </section>
        <div className="fixed top-0 right-0 bottom-0 left-0 bg-black z-inherit"></div>
      </div>
    );
  }
}

export default Loading;
