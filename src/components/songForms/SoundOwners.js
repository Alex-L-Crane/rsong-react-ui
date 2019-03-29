import React, { Component } from 'react';
import InputBlock from '../../components/input-block/InputBlock';
import Button from '../../components/buttons/Button';
import TextButton from '../../components/buttons/TextButton';
import Owner from '../input-block/Owner';
import Collaborator from '../input-block/Collaborator';

export default class SoundOwners extends Component {
	changeStep(step) {
		this.props.changeStep(step);
    }
    
    render() {
        const OwnerComponent = <Owner />
        const CollaboratorComponent = <Collaborator />
        const ownerData = [{formTitle: "Owner Name"}];
        const collaboratorData = [{formTitle: "Collaborator Name"}];

        return (
            <div className="mw8 pt5">
                <InputBlock
                    metadataType="owner"
                    inputDataComponent={OwnerComponent}
                    data={ownerData} 
                />        
                <InputBlock
                    metadataType="collaborator"
                    inputDataComponent={CollaboratorComponent}
                    data={collaboratorData} 
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