import React, { Component } from 'react';

class FieldsetLegend extends Component {
  render() {
    return (
      <span className={`${this.props.theme === 'dark' ? 'white w-100' : 'ph0 pt0 pb3'} f3 b ttc flex justify-between border-box ${this.props.additionalClasses ? this.props.additionalClasses : ''}`}>
        <legend>{this.props.formTitle}</legend>
        <span className="f5">{ this.props.delete ? 'X' : ''}</span>
      </span>
    );
  }
}

export default FieldsetLegend;
