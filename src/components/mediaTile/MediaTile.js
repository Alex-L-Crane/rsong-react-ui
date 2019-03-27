import React, { Component } from 'react';
import smallCover from '../../assets/img/nils-frahm-cover-small.jpg'

class MediaTile extends Component {
  render() {
    return (
      <div className="mr4 mb4">
        <div className="square-tile">
          <img src={smallCover}  alt="" />
        </div>
        <span className="f5 dib pt2 ph0">Song 1</span><br />
        <span className="f5 dib pt1 ph0 yellow">Processing</span>
      </div>
    );
  }
}

export default MediaTile;
