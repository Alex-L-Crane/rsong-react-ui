import React, { Component } from 'react';

class Checkbox extends Component {
  render() {
    return (
      <span className="checkbox-container ph0">
        <input
          type="radio"
          name={this.props.name}
          id={this.props.id}
          value={this.props.id}
          className="hidebbutton"/>
        <label htmlFor={this.props.id} className="checkmark dib w2 h2 br1 ba tc f5 pointer v-mid"></label>
      </span>
    );
  }
}

export default Checkbox;
