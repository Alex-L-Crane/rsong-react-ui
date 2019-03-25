import React, { Component } from 'react';
import plus from '../../assets/img/plus.svg';

class MediaTile extends Component {
  render() {
    return (
      <div className="mr4 mb4">
        <div className="square-tile dotted-border flex justify-center items-center">
          <img src={plus} />
        </div>
        <span className="f4 dib pt2 ph0">Add new song</span>
      </div>
    );
  }
}

export default MediaTile;
