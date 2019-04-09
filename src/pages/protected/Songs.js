import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import AppHeader from '../../components/header/AppHeader';
import AddMediaTile from '../../components/mediaTile/AddMediaTile'
import MediaTile from '../../components/mediaTile/MediaTile';
import { getSongs } from '../../redux/actions/songsActions';

class Songs extends Component {

	componentWillMount = () => {
		this.props.getSongs();
	}

	onAddMedia = () => {
		this.props.history.push('/add-song');
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
						{Array.isArray(this.props.songs) ? this.props.songs.map((song) => 
							<MediaTile 
								key={song._id}
								name={song.title}
								status={song.state}
								image={song.image}
							/>
						) : <></>}
					</div>
				</section>
			</section>
		);
	}
}

function mapStateToProps(state) {
    return {
        songs: state.songs,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getSongs: () => dispatch(getSongs()),
    }
}

const SongsRedux = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Songs);

export default withRouter(SongsRedux);