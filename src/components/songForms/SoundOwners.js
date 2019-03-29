import React, { Component } from 'react';
import InputBlock from '../../components/input-block/InputBlock';
import Button from '../../components/buttons/Button';
import TextButton from '../../components/buttons/TextButton';
import Owner from '../input-block/Owner';
import Collaborator from '../input-block/Collaborator';

export default class SoundOwners extends Component {

    onContinue = () => {
        this.changeStep(3);
    }

    onBack = () => {
        this.changeStep(1);
    }

	changeStep = (step) => {
		this.props.changeStep(step);
    }

    onExit = () => {
        this.props.onExit()
    }

    addNewOwner = (value) => {
        this.props.handleChange({ ...this.props.song, owners: [...this.props.song.owners, { formTitle: value }] });
    }

    addNewCollaborator = (value) => {
        this.props.handleChange({ ...this.props.song, collaborators: [...this.props.song.collaborators, { formTitle: value }] });
    }

    onDeleteOwner = (index) => {
        const owners = [...this.props.song.owners];
        owners.splice(index, 1);
        this.props.handleChange({ ...this.props.song, owners });
    }

    onDeleteCollaborator = (index) => {
        const collaborators = [...this.props.song.collaborators];
        collaborators.splice(index, 1);
        this.props.handleChange({ ...this.props.song, collaborators });
    }
    
    handleChange = (event) => {
        const { name, value } = event.target;
        this.props.handleChange({ ...this.props.song, [name]: value });
    }

    render() {
        const OwnerComponent = <Owner />
        const CollaboratorComponent = <Collaborator />

        return (
            <div className="mw8 pt5">
                <InputBlock
                    metadataType="owner"
                    inputDataComponent={OwnerComponent}
                    data={this.props.song.owners} 
                    addNew={this.addNewOwner}
                    onDelete={this.onDeleteOwner}
                />        
                <InputBlock
                    metadataType="collaborator"
                    inputDataComponent={CollaboratorComponent}
                    data={this.props.song.collaborators} 
                    addNew={this.addNewCollaborator}
                    onDelete={this.onDeleteCollaborator}
                />        
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