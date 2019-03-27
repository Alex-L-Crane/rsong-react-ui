import React, { Component } from 'react';
import { withRouter } from "react-router";
import AppHeader from '../../components/header/AppHeader';
import AddMediaTile from '../../components/mediaTile/AddMediaTile'
import MediaTile from '../../components/mediaTile/MediaTile';

class Songs extends Component {

	onAddMedia = () => {
		this.props.history.push('/addSong')
	}

	render() {
		return (
			<section>
				<AppHeader
					pageTitle="Add or edit songs"
				/>
				<section className="ph5 pv2">
					<div className="pt5 flex flex-wrap">
						<AddMediaTile caption="Add new song" onAddMedia={this.onAddMedia}/>
						<MediaTile />
						<MediaTile />
						<MediaTile />
						<MediaTile />
						<MediaTile />
						<MediaTile />
					</div>
				</section>
			</section>
		);
	}
}

export default withRouter(Songs)