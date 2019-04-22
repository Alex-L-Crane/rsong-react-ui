import React, { Component } from 'react';
import Button from '../../components/buttons/Button';
import TextButton from '../../components/buttons/TextButton';
import ReviewContainer from './reviewBlocks/ReviewContainer';
import SongWriterReview from './reviewBlocks/SongWriterReview';
import OwnersReview from './reviewBlocks/OwnersReview';
import CollaboratorsReview from './reviewBlocks/CollaboratorsReview';

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
                    <div className="w-50 pl3 border-box flex flex-column justify-between">
                      <div>
                        <span className="f2 lh-title dib mb2">{this.props.song.songTitle}</span><br />
                        {this.props.song.songSubTitle.length > 0 ?
                          <p className="f3 lh-title dib mt0 mb2"><i>{this.props.song.songSubTitle}</i></p> : <></>
                        }
                        <p className="f4 "><i>{this.props.song.mainArtist}</i></p>
                        {this.props.song.additionalArtists.length > 0 ?
                            this.props.song.additionalArtists.map((artist) => 
                                <p className="f4 "><i>{artist.formTitle}</i></p>
                            ) : <></>                            
                        }
                      </div>
                      <div>
                        <p className="f5 ">
                        {this.props.song.genres.genres1 !== null ?  <>{this.props.song.genres.genres1.label}</> : <></>}
                        {this.props.song.genres.genres2 !== null ?  '   |   ' : <></>}
                        {this.props.song.genres.genres2 !== null ?  <>{this.props.song.genres.genres2.label}</> : <></>}
                        {this.props.song.genres.genres3 !== null ?  '   |   ' : <></>}
                        {this.props.song.genres.genres3 !== null ?  <>{this.props.song.genres.genres3.label}</> : <></>}
                        </p>
                        <p className="f6 "><i>{this.props.song.releaseDate? 'Release date: ' + this.props.song.releaseDate.toLocaleDateString("en-US", this.dateOptions) : ''}</i></p>
                      </div>
                    </div>
                </div>

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
                        title="Collaborators"
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
