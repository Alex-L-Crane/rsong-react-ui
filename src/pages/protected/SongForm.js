import React, { Component } from 'react';
import AppHeader from '../../components/header/AppHeader';
import SongInfo from '../../components/songForms/SongInfo';
import SongWriters from '../../components/songForms/SongWriters';
import SoundOwners from '../../components/songForms/SoundOwners';
import ReviewSubmit from '../../components/songForms/ReviewSubmit';

const steps = ['first', 'second', 'third', 'fourth'];

class SongForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progressStatus: 0,
        };
    }

    changeStep = (step) => {
        this.setState({
            progressStatus: step,
        })
    }

	render() {
		return (
			<section>
				<AppHeader
                    pageTitle={this.props.pageTitleText}
                    progressStatus={steps[this.state.progressStatus]}
                    changeStep={this.changeStep}
				/>
				<section className="ph5 pv2">
                    {this.state.progressStatus === 0 ? <SongInfo changeStep={this.changeStep} /> : ''}
                    {this.state.progressStatus === 1 ? <SongWriters changeStep={this.changeStep} /> : ''}
                    {this.state.progressStatus === 2 ? <SoundOwners changeStep={this.changeStep} /> : ''}
                    {this.state.progressStatus === 3 ? <ReviewSubmit changeStep={this.changeStep} /> : ''}					
				</section>
			</section>
		);
	}
}

export default SongForm;

