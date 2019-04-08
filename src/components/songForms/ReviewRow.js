import React, { Component } from 'react';

class ReviewRow extends Component {
  render() {
    return (
      <div className="flex justify white">
        <span className="">{this.props.fieldName + ':'}</span>
        <span className="">{this.props.value}</span>
        <div className="flex-grow dotted-bottom"></div>
        <span className="">{this.props.value2}{this.props.percent ? '%' : ''}</span>
      </div>
    );
  }
}

export default ReviewRow;
