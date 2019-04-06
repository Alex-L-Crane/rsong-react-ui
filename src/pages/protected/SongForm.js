import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import AppHeader from '../../components/header/AppHeader';
import SongInfo from '../../components/songForms/SongInfo';
import SongWriters from '../../components/songForms/SongWriters';
import SoundOwners from '../../components/songForms/SoundOwners';
import ReviewSubmit from '../../components/songForms/ReviewSubmit';
import Duplicate from '../../components/notifications/Duplicate';
import { updateSongData, addSong } from '../../redux/actions/songActions';
import { getGenres } from '../../redux/actions/genresActions';

const steps = ['first', 'second', 'third', 'fourth'];

class SongForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progressStatus: 0,
			showSubmit: false,
        };
    }

    componentWillMount = () => {
        this.props.getGenres();
    }

    changeStep = (step) => {
        this.setState({
            progressStatus: step,
        })
    }

    onExit = () => {
        this.props.history.push('/');
    }

    onCopy = () => {
        this.props.handleChange({ ...this.props.song, songFile: null, songTitle: ''});
        this.setState({ showSubmit: false });
        this.changeStep(0);
    }

    submitForm = () => {
        addSong(this.props.song, this.props.genres)
        .then((response) => {
            this.setState({showSubmit: true});
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        });
    }

	render() {
        console.log(this.props.song)
		return (
			<section>
				<AppHeader
                    pageTitle={this.props.pageTitleText}
                    progressStatus={steps[this.state.progressStatus]}
				/>
				<section className="ph5 pv2">
                    {this.state.progressStatus === 0 ? 
                        <SongInfo 
                            changeStep={this.changeStep} 
                            onExit={this.onExit} 
                            {...this.props} 
                        /> : ''
                    }
                    {this.state.progressStatus === 1 ? 
                        <SongWriters 
                            changeStep={this.changeStep} 
                            onExit={this.onExit} 
                            {...this.props} 
                        /> : ''
                    }
                    {this.state.progressStatus === 2 ? 
                        <SoundOwners 
                            changeStep={this.changeStep} 
                            onExit={this.onExit} 
                            {...this.props} 
                        /> : ''
                    }
                    {this.state.progressStatus === 3 ? 
                        <ReviewSubmit 
                            changeStep={this.changeStep} 
                            onExit={this.onExit} 
                            submitForm={this.submitForm}
                            {...this.props}
                        /> : ''
                    }					
				</section>
                {this.state.showSubmit ? 
                    <Duplicate 
                        onDone={this.onExit}
                        onCopy={this.onCopy}
                        songTitle={this.props.song.songTitle}
                    /> 
                    : <></> 
                }
			</section>
		);
	}
}

function mapStateToProps(state) {
    return {
        song: state.song,
        genres: state.genres,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleChange: (data) => dispatch(updateSongData(data)),
        getGenres: () => dispatch(getGenres()),
    }
}

const SongFormRedux = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SongForm);

export default withRouter(SongFormRedux);

