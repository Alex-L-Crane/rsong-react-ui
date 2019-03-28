import React, { Component } from 'react';
import FieldsetLegend from '../../components/form-inputs/FieldsetLegend';
import BasicInput from '../../components/form-inputs/BasicInput';
import FileInput from '../../components/form-inputs/FileInput';
import Dropdown from '../../components/form-inputs/Dropdown';
import InputBlock from '../../components/input-block/InputBlock';
import Button from '../../components/buttons/Button';
import TextButton from '../../components/buttons/TextButton';

export default class SongInfo extends Component {
    changeStep(step) {
        this.props.changeStep(step);
    }
    render() {
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
                    <BasicInput name="mainArtists" placeholder="Name of artist" />
                </fieldset>

                <div >
                    <InputBlock metadataType="additional artist" />
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
                    />
                    <Button
                        name="next"
                        buttonText="Continue >"
                        onClick={() => this.changeStep(1)}
                    />
                </div>
            </div>
        );
    }
}