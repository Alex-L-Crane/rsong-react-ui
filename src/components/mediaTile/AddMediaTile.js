import React, { Component } from 'react';
import plus from '../../assets/img/plus.svg';

class MediaTile extends Component {
  render() {
    return (
      <div className="mr4 mb4">
        <div className="square-tile dotted-border flex justify-center items-center">
          <img src={plus} />
        </div>
        {this.props.caption ? <span className="f4 dib pt2 ph0">{this.props.caption}</span> : '' }
      </div>
    );
  }
}

export default MediaTile;
