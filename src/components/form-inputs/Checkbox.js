import React, { Component } from 'react';

class Checkbox extends Component {
  render() {
    return (
      <span className="checkbox-container ph0">
        <input
          type="checkbox"
          name={this.props.name}
          id={this.props.name}
          className="hidebbutton"/>
        <label htmlFor={this.props.name} className={`${ this.props.theme === "dark" ? 'white' : '' } checkmark dib w2 h2 br1 ba tc f5 pointer v-mid`}></label>
      </span>
    );
  }
}

export default Checkbox;
