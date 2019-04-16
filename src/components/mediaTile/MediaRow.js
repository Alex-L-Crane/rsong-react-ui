import React, { Component } from 'react';

class MediaRow extends Component {
	render() {
		return (
      <div className="w-100 h4 pa3 white bg-black mb2">
        <span className="f3 dib pb2">{this.props.name}</span><br/>
        <span className="yellow f5 dib pt1">{this.props.status}</span>
      </div>
		);
	}
}

export default MediaRow;
