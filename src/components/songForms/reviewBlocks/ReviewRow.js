import React, { Component } from 'react';

class ReviewRow extends Component {
  render() {
    return (
      <div className="flex justify white mb3">
        <span className="f5 dib">{this.props.labelText + ':'}</span>
        <div className="flex-grow dotted-bottom"></div>
        <span className="f5 dib">{this.props.value}{this.props.percent ? '%' : ''}</span>
      </div>
    );
  }
}

export default ReviewRow;
