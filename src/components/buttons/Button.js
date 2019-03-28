import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <span>
        <input
          type="submit"
          name={this.props.name}
          id={this.props.name}
          className="hidebbutton"/>
        <label htmlFor={this.props.name} className={`${this.props.theme === 'dark' ? 'black bg-white' : 'white bg-black'} button dib  pv2 ph4 br1 tc f5 pointer`}>{this.props.buttonText}</label>
      </span>
    );
  }
}

export default Button;
