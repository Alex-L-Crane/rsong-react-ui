import React, { Component } from 'react';
import InputBlock from '../../components/input-block/InputBlock';
import Button from '../../components/buttons/Button';
import TextButton from '../../components/buttons/TextButton';
import Songwriter from '../input-block/Songwriter';

export default class SongWriters extends Component {

    onContinue(step) {
        this.changeStep(step);
    }

    onBack(step) {
        this.changeStep(step);
    }

	changeStep(step) {
		this.props.changeStep(step);
    }

    onExit = () => {
        this.props.onExit()
    }

    addNewSongWriter = (value) => {
        this.props.handleChange({ ...this.props.song, songWriters: [...this.props.song.songWriters, { formTitle: value }] });
    }

    onDeleteSongWriter = (index) => {
        const songWriters = [...this.props.song.songWriters];
        songWriters.splice(index, 1);
        this.props.handleChange({ ...this.props.song, songWriters });
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.props.handleChange({ ...this.props.song, [name]: value });
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
                />        
                <div className="pb3">
                    <TextButton
                        name="exit"
                        buttonText="Exit"
                        onClick={this.onExit}
                    />
                    <Button
                        name="back"
                        buttonText="< Back"
                        onClick={() => this.onBack(0)}
                    />
                    <Button
                        name="next"
                        buttonText="Continue >"
                        onClick={() => this.onContinue(2)}
                    />
                </div>
            </div>
        );
    }
}