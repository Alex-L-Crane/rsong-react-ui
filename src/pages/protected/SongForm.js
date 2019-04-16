import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import AppHeader from '../../components/header/AppHeader';
import SongInfo from '../../components/songForms/SongInfo';
import SongWriters from '../../components/songForms/SongWriters';
import SoundOwners from '../../components/songForms/SoundOwners';
import ReviewSubmit from '../../components/songForms/ReviewSubmit';
import Duplicate from '../../components/notifications/Duplicate';
import { updateSongData, addSong, resetSongData } from '../../redux/actions/songActions';
import { getGenres } from '../../redux/actions/genresActions';
import ErrorModal from '../../components/notifications/ErrorModal';
import { startLoader, stopLoader } from '../../redux/actions/loaderActions';

const steps = ['first', 'second', 'third', 'fourth'];

class SongForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progressStatus: 0,
            showSubmit: false,
            errorModal: false,
        };
    }

    componentWillMount = () => {
        this.props.getGenres();
    }

    componentWillUnmount = () => {
        this.props.resetSongData();   
    }

    changeStep = (step) => {
        this.setState({
            progressStatus: step,
        })
    }

    onExit = () => {
        this.props.history.push('/');
    }

    closeErrorModal = () => {
        this.setState({
            errorModal: false,
        })
    }

    onCopy = () => {
        this.props.handleChange({ ...this.props.song, songFile: null, songTitle: `Copy of ${this.props.song.songTitle}`});
        this.setState({ showSubmit: false });
        this.changeStep(0);
    }

    submitForm = () => {
        this.props.startLoader();
        addSong(this.props.song, this.props.genres)
        .then((response) => {
            this.props.stopLoader();
            this.setState({ showSubmit: true });
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
            this.props.stopLoader();
            this.setState({ errorModal: true });
        });
    }

	render() {
        console.log(this.props.song)
		return (
			<section>
				<AppHeader
                    pageTitle={this.props.song.songTitle !== '' && this.state.progressStatus > 0 ? this.props.song.songTitle : this.props.pageTitleText}
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
                {this.state.errorModal ? 
                    <ErrorModal 
                        closeErrorModal={this.closeErrorModal}
                        errorMessage="Error saving song"
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
        resetSongData: () => dispatch(resetSongData()),
        getGenres: () => dispatch(getGenres()),
		startLoader: () => dispatch(startLoader()),
		stopLoader: () => dispatch(stopLoader())
    }
}

const SongFormRedux = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SongForm);

export default withRouter(SongFormRedux);

