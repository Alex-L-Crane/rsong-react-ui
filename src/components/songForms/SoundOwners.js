import React, { Component } from 'react';
import InputBlock from '../../components/input-block/InputBlock';
import Button from '../../components/buttons/Button';
import TextButton from '../../components/buttons/TextButton';

export default class SoundOwners extends Component {
	changeStep(step) {
		this.props.changeStep(step);
    }
    
    render() {
        return (
            <div className="mw8 pt5">
                <InputBlock
                    metadataType="owner"
                />        
                <InputBlock
                    metadataType="collaborator"
                />        
                <div className="pb3">
                    <TextButton
                        name="exit"
                        buttonText="Exit"
                    />
                    <Button
                        name="back"
                        buttonText="< Back"
                        onClick={() => this.changeStep(1)}
                    />
                    <Button
                        name="next"
                        buttonText="Continue >"
                        onClick={() => this.changeStep(3)}
                    />
                </div>
            </div>
        );
    }
}