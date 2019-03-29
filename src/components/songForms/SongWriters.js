import React, { Component } from 'react';
import InputBlock from '../../components/input-block/InputBlock';
import Button from '../../components/buttons/Button';
import TextButton from '../../components/buttons/TextButton';
import Songwriter from '../input-block/Songwriter';

export default class SongWriters extends Component {
	changeStep(step) {
		this.props.changeStep(step);
    }
    
    render() {
        const SongWriterComponent = <Songwriter />
        const data = [{formTitle: "Artist Name"}];

        return (
            <div className="mw8 pt5">
                <InputBlock metadataType="songwriter" data={data} inputDataComponent={SongWriterComponent}/>        
                <div className="pb3">
                    <TextButton
                        name="exit"
                        buttonText="Exit"
                    />
                    <Button
                        name="back"
                        buttonText="< Back"
                        onClick={() => this.changeStep(0)}
                    />
                    <Button
                        name="next"
                        buttonText="Continue >"
                        onClick={() => this.changeStep(2)}
                    />
                </div>
            </div>
        );
    }
}