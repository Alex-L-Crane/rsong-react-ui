import React, { Component } from 'react';
import FieldsetLegend from '../../components/form-inputs/FieldsetLegend';
import BasicInput from '../../components/form-inputs/BasicInput';
import FileInput from '../../components/form-inputs/FileInput';
import Dropdown from '../../components/form-inputs/Dropdown';
import InputBlock from '../../components/input-block/InputBlock';
import Button from '../../components/buttons/Button';
import TextButton from '../../components/buttons/TextButton';
import AdditionalArtist from '../input-block/AdditionalArtist';

export default class SongInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            errros: [],
        };
    }

    onContinue = () => {
        const validForm = this.validateForm();
        if (validForm) {
            this.changeStep(1);
        }     
    }

    changeStep = (step) => {
        this.props.changeStep(step);
    }

    onExit = () => {
        this.props.onExit()
    }

    newAdditionalArtist = (value) => {
        this.props.handleChange({ ...this.props.song, additionalArtists: [...this.props.song.additionalArtists, { formTitle: value }] });
    }

    onDeleteAdditionalArtist = (index) => {
        const additionalArtists = [...this.props.song.additionalArtists];
        additionalArtists.splice(index, 1);
        this.props.handleChange({ ...this.props.song, additionalArtists });
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.props.handleChange({ ...this.props.song, [name]: value });
    }

    validateForm = () => {
        const errors = [];
        if (!this.props.song.songTitle) {
            errors.push('songTitle field required');
        }
        if (this.props.song.genres.length === 0) {
            errors.push('gener field required');
        }
        if (!this.props.song.mainArtist) {
            errors.push('mainArtist field required');
        }
        this.setState({ errors })
        if (errors.length > 0) {
            console.log(errors)
            return false;
        }
        return true;
    }

    render() {
        const AdditionalArtistComponent = <AdditionalArtist />

        return (
            <div className="mw8 pt5">
                <fieldset className="bn mb5">
                    <div className="dib w-50 bn pa0">
                        <FieldsetLegend
                            formTitle="Song Title"
                            theme="light"
                        />
                        <BasicInput
                            type="text"
                            name="songTitle"
                            placeholder="Title"
                            value={this.props.song.songTitle}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="w-100 h5">
                        <FileInput name="songFile" />
                    </div>
                </fieldset>

                <fieldset className="dib w-50 bn pa0 mb5">
                    <FieldsetLegend formTitle="Song Genres" />
                    <Dropdown
                        name="genres-1"
                        options={this.props.genres}
                        placeholder="Genre 1"
                    />
                    <Dropdown
                        name="genres-2"
                        options={this.props.genres}
                        placeholder="Genre 2"
                    />
                    <Dropdown
                        name="genres-3"
                        options={this.props.genres}
                        placeholder="Genre 3"
                    />
                </fieldset>

                <fieldset className="dib w-50 bn pa0">
                    <FieldsetLegend formTitle="Main Artist Name" />
                    <BasicInput
                        name="mainArtist" 
                        placeholder="Name of artist" 
                        value={this.props.song.mainArtist}
                        onChange={this.handleChange}
                    />
                </fieldset>

                <div >
                    <InputBlock 
                        metadataType="additional artist" 
                        data={this.props.song.additionalArtists} 
                        inputDataComponent={AdditionalArtistComponent}
                        addNew={this.newAdditionalArtist}
                        onDelete={this.onDeleteAdditionalArtist}
                    />
                </div>

                <fieldset className="dib w-50 bn pa0 mb5">
                    <FieldsetLegend formTitle="Album Art" />
                    <div className="square-tile">
                        <FileInput name="albumArt" />
                    </div>
                </fieldset>
                <div className="pb3">
                    <TextButton
                        name="exit"
                        buttonText="Exit"
                        onClick={this.onExit}
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