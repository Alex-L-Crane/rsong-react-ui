import React, { Component } from 'react';
import FieldsetLegend from '../../components/form-inputs/FieldsetLegend';
import BasicInput from '../../components/form-inputs/BasicInput';
import FileInput from '../../components/form-inputs/FileInput';
import Dropdown from '../../components/form-inputs/Dropdown';
import InputBlock from '../../components/input-block/InputBlock';
import Button from '../../components/buttons/Button';
import TextButton from '../../components/buttons/TextButton';
import BasicDatePicker from '../../components/form-inputs/BasicDatePicker';
import AdditionalArtist from '../input-block/AdditionalArtist';
import { validateSongInfoForm } from '../../validators/songInfoValidator';
import ErrorMessages from '../notifications/ErrorMessages';

export default class SongInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            errors: {},
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

    handleChangeFile = (event) => {
		const scope = this;
		const name = event.target.name;
		this.props.handleChange({ ...this.props.song, [name]: event.target.files[0] });
		const reader = new FileReader();
		reader.onload = function(e) {
			scope.props.handleChange({ ...scope.props.song, [`${name}Img`]: e.target.result });
		}
		reader.readAsDataURL(event.target.files[0]);
    }

    handleChangeSong = (event) => {
        this.props.handleChange({ ...this.props.song, [event.target.name]: event.target.files[0] });
    }

    handleChangeGenres = (event) => {
        const { name, value } = event.target;
        this.props.handleChange({ ...this.props.song, genres: { ...this.props.song.genres, [name]: value } });
    }

    handleChangeReleaseDate = (value) => {
		this.props.handleChange({ ...this.props.song, releaseDate: value });
	}

    handleRemoveFile = (name) => {
        this.props.handleChange({ ...this.props.song, [name]: null, [`${name}Img`]: null });
    }

    handleRemoveSong = () => {
        this.props.handleChange({ ...this.props.song, songFile: null });
    }

    validateForm = () => {
		let errors = {};
		const { song } = this.props;
		errors = validateSongInfoForm(song);
        this.setState({ errors })
        if (Object.keys(errors).length > 0 && errors.constructor === Object) {
            console.log(errors);
            return false;
        }
        return true;
    }

    render() {
        const AdditionalArtistComponent = <AdditionalArtist />

        return (
            <div className="mw8 pt5">
                <fieldset className="bn mb5">
                    <div className="w-100">
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
                              error={this.state.errors.songTitle}
                          />
                      </div>
                    </div>
                    <div className="dib w-50 bn pa0">
                        <BasicInput
                            type="text"
                            name="songSubTitle"
                            placeholder="Sub Title"
                            value={this.props.song.songSubTitle}
                            onChange={this.handleChange}
                        />
                    </div>
                    <FileInput
                        name="songFile"
                        onChange={this.handleChangeSong}
                        error={this.state.errors.songFile}
                        extraClass="w-100 h5"
                        handleRemove={this.handleRemoveSong}
                        song={this.props.song.songFile ? true : false}
                    />
                </fieldset>

                <fieldset className="dib w-50 bn pa0 mb5">
                    <FieldsetLegend formTitle="Song Genres" />
                    <Dropdown
                        name="genres1"
                        options={this.props.genres}
                        placeholder="Genre 1"
                        value={this.props.song.genres.genres1}
                        onChange={this.handleChangeGenres}
                        error={this.state.errors.genres}
                    />
                    <Dropdown
                        name="genres2"
                        options={this.props.genres}
                        value={this.props.song.genres.genres2}
                        onChange={this.handleChangeGenres}
                        placeholder="Genre 2"
                    />
                    <Dropdown
                        name="genres3"
                        options={this.props.genres}
                        value={this.props.song.genres.genres3}
                        onChange={this.handleChangeGenres}
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
                        error={this.state.errors.mainArtist}
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

                <fieldset className="dib w-50 bn pa0">
                    <FieldsetLegend formTitle="Album Art" />
                    <FileInput
                        name="albumArt"
                        onChange={this.handleChangeFile}
                        image={this.props.song.albumArtImg}
                        error={this.state.errors.albumArt}
                        extraClass="square-tile"
                        handleRemove={this.handleRemoveFile}
                    />
                </fieldset>

                <div className="dib w-50 bn pa0 mb5">
                  <BasicDatePicker
                    name="releaseDate"
                    placeholder="Release date *"
                    value={this.props.song.releaseDate}
                    onChange={this.handleChangeReleaseDate}
                    error={this.state.errors.releaseDate}
                  />
                </div>

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
                {Object.keys(this.state.errors).length > 0 && this.state.errors.constructor === Object ?
					(
						<ErrorMessages
							errorMessages={[{ id: '1', message: '* Fill out required fields before proceeding' }]}
						/>
					) : (
						<></>
					)
				}
            </div>
        );
    }
}
