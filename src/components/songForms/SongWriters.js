import React, { Component } from 'react';
import InputBlock from '../../components/input-block/InputBlock';
import Button from '../../components/buttons/Button';
import TextButton from '../../components/buttons/TextButton';

export default class SongWriters extends Component {
	changeStep(step) {
        console.log(step)
		this.props.changeStep(step);
    }
    
    render() {
        return (
            <div className="mw8 pt5">
                <InputBlock metadataType="songwriter" />        
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