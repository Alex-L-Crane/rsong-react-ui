import React, { Component } from 'react';

class MediaTile extends Component {
	render() {
		return (
			<div className="mr4 mb4">
				<div className="square-tile">
					<img src={this.props.image}  alt="" />
				</div>
				<span className="f5 dib pt2 ph0">{this.props.name}</span><br />
				<span className="f5 dib pt1 ph0 yellow">{this.props.status}</span>
			</div>
		);
	}
}

export default MediaTile;
