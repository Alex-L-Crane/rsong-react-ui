import React, { Component } from 'react';

class FieldsetLegend extends Component {
  render() {
    return (
      <span className={`${this.props.theme === 'dark' ? 'white w-100' : 'ph0 pt0 pb3'} f3 b ttc flex justify-between border-box ${this.props.additionalClasses ? this.props.additionalClasses : ''}`}>
        <legend>{this.props.formTitle}</legend>
        {this.props.delete ? <span className="f5" onClick={this.props.onDelete}>X</span> : ''}        
      </span>
    );
  }
}

export default FieldsetLegend;
