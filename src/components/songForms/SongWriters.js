import React, { Component } from 'react';
import InputBlock from '../../components/input-block/InputBlock';
import Button from '../../components/buttons/Button';
import TextButton from '../../components/buttons/TextButton';
import Songwriter from '../input-block/Songwriter';
import { validateSongWriterForm } from '../../validators/songWriterValidator';
import ErrorMessages from '../notifications/ErrorMessages';

export default class SongWriters extends Component {

    constructor(props) {
        super(props);
        this.state = {
            errors: {
                songWriters: [],
            },
        };
    }

    onContinue = () => {
        const validForm = this.validateForm();
        if (validForm) {
            this.changeStep(2);
        }
    }

    onBack = () => {
        this.changeStep(0);
    }

	changeStep = (step) => {
		this.props.changeStep(step);
    }

    onExit = () => {
        this.props.onExit()
    }

    addNewSongWriter = (value) => {
        const newSongWriter = {
            formTitle: value,
            songwriterPercentage: '',
            publisherName: '',
            publisherPercentage: '',
            wallet: '',
            email: '',
            pro: '',
            iswc: '',
        }
        this.props.handleChange({ ...this.props.song, songWriters: [...this.props.song.songWriters, newSongWriter] });
    }

    onDeleteSongWriter = (index) => {
        const songWriters = [...this.props.song.songWriters];
        songWriters.splice(index, 1);
        this.props.handleChange({ ...this.props.song, songWriters });
    }

    handleChangeSongWriter = (index, key, value) => {
        const songWriters = [...this.props.song.songWriters];
        songWriters[index][key] = value;
        this.props.handleChange({ ...this.props.song, songWriters });
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.props.handleChange({ ...this.props.song, [name]: value });
    }

    validateForm = () => {
		let errors = {};
		const { song } = this.props;
		errors = validateSongWriterForm(song);
        this.setState({ errors })
        if (errors.songWriters.length > 0 || errors.songwriterPercentageSum) {
            console.log(errors);
            return false;
        }
        return true;
    }

    render() {
        const SongWriterComponent = <Songwriter />

        return (
            <div className="mw8 pt5">
                <InputBlock
                    metadataType="songwriter"
                    data={this.props.song.songWriters}
                    inputDataComponent={SongWriterComponent}
                    addNew={this.addNewSongWriter}
                    onDelete={this.onDeleteSongWriter}
                    handleChange={this.handleChangeSongWriter}
                    errors={this.state.errors.songWriters}
                />

                {this.state.errors.songwriterPercentageSum ?
                    (
                      <ErrorMessages
                        errorMessages={[{ id: '1', message: '* Precentages of total song must equal 100%' }]}
                      />
                    ) : (
                      <></>
                    )
                  }
                  
                <div className="pb3">
                    <TextButton
                        name="exit"
                        buttonText="Exit"
                        onClick={this.onExit}
                    />
                    <Button
                        name="back"
                        buttonText="< Back"
                        onClick={this.onBack}
                    />
                    <Button
                        name="next"
                        buttonText="Continue >"
                        onClick={this.onContinue}
                    />
                </div>
            </div>
        );
    }
}
