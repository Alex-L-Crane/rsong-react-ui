import React, { Component } from 'react';
import plus from '../../assets/img/plus.svg';

class AddMediaTile extends Component {
  render() {
    return (
      <div className="mr4 mb4" onClick={this.props.onAddMedia}>
        <div className="square-tile pa0 dotted-border flex justify-center items-center pointer">
          <img src={plus}  alt="" />
        </div>
        {this.props.caption ? <span className="f4 dib pt2 ph0">{this.props.caption}</span> : '' }
      </div>
    );
  }
}

export default AddMediaTile;
