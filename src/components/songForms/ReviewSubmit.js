import React, { Component } from 'react';
import Button from '../../components/buttons/Button';
import TextButton from '../../components/buttons/TextButton';
import ReviewContainer from './reviewBlocks/ReviewContainer';
import SongWriterReview from './reviewBlocks/SongWriterReview';
import OwnersReview from './reviewBlocks/OwnersReview';
import CollaboratorsReview from './reviewBlocks/CollaboratorsReview';
import AdditionalArtistsReview from './reviewBlocks/AdditionalArtistsReview';

export default class ReviewSubmit extends Component {
    
    onBack = () => {
        this.changeStep(2);
    }

    onContinue = () => {
        this.props.submitForm();
    }
    
    onEdit = () => {
        this.changeStep(0);
    }

	changeStep = (step) => {
		this.props.changeStep(step);
    }

    onExit = () => {
        this.props.onExit()
    }
    
    render() {
        const additionalArtistsReview = <AdditionalArtistsReview />;
        const songWriterReview = <SongWriterReview />;
        const ownersReview = <OwnersReview />;
        const collaboratorsReview = <CollaboratorsReview />;
        return (
            <div className="pt5">
                <div className="flex mb5">
                    <div className="w-50">
                        <img
                            src={this.props.song.albumArtImg}
                            className="w-100"
                            alt=""
                        />
                    </div>
                    <div className="w-50 pl3 border-box">
                        <span className="f3 lh-copy dib mb2">{this.props.song.songTitle}</span><br />
                        {this.props.song.songSubTitle !== '' ? <p className="f4 "><i>{this.props.song.songSubTitle}</i></p> : <></>}                         
                        <p className="f4 "><i>{this.props.song.mainArtist}</i></p>
                        {this.props.song.genres.genres1 !== '' ?  <p className="f4 "><i>{this.props.song.genres.genres1}</i></p> : <></>}
                        {this.props.song.genres.genres2 !== '' ?  <p className="f4 "><i>{this.props.song.genres.genres2}</i></p> : <></>}
                        {this.props.song.genres.genres3 !== '' ?  <p className="f4 "><i>{this.props.song.genres.genres3}</i></p> : <></>}
                        <p className="f4 "><i>{this.props.song.releaseDate? this.props.song.releaseDate.toString() : ''}</i></p>
                    </div>
                </div>
        

                {this.props.song.additionalArtists.length > 0 ? 
                    <ReviewContainer
                        title="Additional Artists"
                        data={this.props.song.additionalArtists}
                        reviewComponent={additionalArtistsReview}
                    /> : <></>
                } 
                {this.props.song.songWriters.length > 0 ? 
                    <ReviewContainer
                        title="Songwriters"
                        data={this.props.song.songWriters}
                        reviewComponent={songWriterReview}
                    /> : <></>
                } 
                {this.props.song.owners.length > 0 ? 
                    <ReviewContainer
                        title="Sound Recording Owner"
                        data={this.props.song.owners}
                        reviewComponent={ownersReview}
                    /> : <></>
                } 
                {this.props.song.collaborators.length > 0 ? 
                    <ReviewContainer
                        title="Contributors"
                        data={this.props.song.collaborators}
                        reviewComponent={collaboratorsReview}
                    /> : <></>
                }                 
        

                <p>
                    <span>Does everything look ok? If not,</span>
                    <a className="v-mid underline pointer" onClick={this.onEdit}>edit your release.</a>
                </p>

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
