import React, { Component } from 'react';

class FileInput extends Component {
  render() {
    return (
      <span className="dotted-border dib pa0 w-100 h-100 flex items-center justify-center">
        <input
          type="file"
          name={this.props.name}
          placeholder={this.props.placeholder}
          id={this.props.name}
          className="hidebbutton"/>
        <label htmlFor={this.props.name} className="white pv2 ph4 br1 bg-black tc f5 pointer">Choose file</label>
      </span>
    );
  }
}

export default FileInput;
