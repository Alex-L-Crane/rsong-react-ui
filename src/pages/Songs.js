import React, { Component } from 'react';
import '../styles/main.scss';
import AppHeader from '../components/header/AppHeader';
import AddMediaTile from '../components/mediaTile/AddMediaTile'
import MediaTile from '../components/mediaTile/MediaTile'

import FieldsetLegend from '../components/form-inputs/FieldsetLegend'
import BasicInput from '../components/form-inputs/BasicInput'
import FileInput from '../components/form-inputs/FileInput'
import Dropdown from '../components/form-inputs/Dropdown'
import InputBlock from '../components/input-block/InputBlock'
import Button from '../components/buttons/Button'
import TextButton from '../components/buttons/TextButton'

import largeCover from '../assets/img/nils-frahm-cover-large.jpg'


class Songs extends Component {
  render() {
    return (
      <section>
        <AppHeader
          pageTitle={this.props.pageTitleText}
          progressStatus={this.props.progressStatusIndex}/>
          <section className="ph5 pv2">
            { this.props.progressStatusIndex ? '' : <Landing />  }
            { this.props.progressStatusIndex === 'first' ? <SongInfo /> : '' }
            { this.props.progressStatusIndex === 'second' ? <Songwriters /> : '' }
            { this.props.progressStatusIndex === 'third' ? <SoundOwners /> : '' }
            { this.props.progressStatusIndex === 'fourth' ? <ReviewSubmit /> : '' }
          </section>
      </section>
    );
  }
}

export default Songs;


class Landing extends Component {
  render() {
    return (
      <div className="pt5 flex flex-wrap">
        <AddMediaTile />
        <MediaTile />
        <MediaTile />
        <MediaTile />
        <MediaTile />
        <MediaTile />
        <MediaTile />
      </div>
    );
  }
}


class SongInfo extends Component {
  render() {
    return (
      <div className="mw8 pt5">
        <fieldset className="bn mb5">
          <div className="dib w-50 bn pa0 mb3">
            <FieldsetLegend
              formTitle="Song Title"
              theme="light"/>

            <BasicInput
              type="text"
              name="songTitle"
              placeholder="Title"/>
            </div>

            <div className="w-100 h5">
            <FileInput name="songFile"/>
            </div>
        </fieldset>

        <fieldset className="dib w-50 bn pa0 mb5">
          <FieldsetLegend formTitle="Song Genres"/>
          <Dropdown
            name="genres-1"
            placeholder="Genre 1" />

          <Dropdown
            name="genres-2"
            placeholder="Genre 2" />

          <Dropdown
            name="genres-3"
            placeholder="Genre 3" />
        </fieldset>

        <fieldset className="dib w-50 bn pa0 mb3">
          <FieldsetLegend formTitle="Main Artist Name" />
          <BasicInput name="mainArtists" placeholder="Name of artist" />
        </fieldset>

        <div >
          <InputBlock
            metadataType="additional artist"/>
        </div>

        <fieldset className="dib w-50 bn pa0 mb5">
          <FieldsetLegend formTitle="Album Art" />
          <div className="square-tile">
            <FileInput name="albumArt"/>
          </div>
        </fieldset>
        <div className="pb3">
          <TextButton
            name="exit"
            buttonText="Exit"/>
          <Button
            name="next"
            buttonText="< Back"/>
          <Button
            name="next"
            buttonText="Continue >"/>
        </div>
      </div>
    );
  }
}


class Songwriters extends Component {
  render() {
    return (
      <div className="mw8 pt5">
        <InputBlock
          metadataType="songwriter"/>
      </div>
    );
  }
}


class SoundOwners extends Component {
  render() {
    return (
      <div className="mw8 pt5">
      <InputBlock
        metadataType="owner"/>

      <InputBlock
        metadataType="collaborator"/>
      </div>
    );
  }
}


class ReviewSubmit extends Component {
  render() {
    return (
      <div className="pt5">
        <div className="flex mb5">
          <div className="w-50">
            <img src={largeCover} className="w-100"/>
          </div>
          <div className="w-50 pl3 border-box">
            <span className="f3 lh-copy dib mb2">Nils Frahm</span><br />
            <span className="f4 "><i>Germany</i></span>
          </div>
        </div>

        <section className="mb5 w-100 bg-black white pa3 border-box br1">
          <span className="f3 b">Songwriters</span>
          <div>
            <span className="f4 dib pv4">Nils Frahm</span>
          </div>
        </section>
      </div>
    );
  }
}
