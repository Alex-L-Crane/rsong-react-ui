import React, { Component } from 'react';
import InputBlock from '../../components/input-block/InputBlock';
import Button from '../../components/buttons/Button';
import TextButton from '../../components/buttons/TextButton';
import Owner from '../input-block/Owner';
import Collaborator from '../input-block/Collaborator';
import { validateSoundOwnersForm } from '../../validators/validateSoundOwnersForm';

export default class SoundOwners extends Component {

    constructor(props) {
        super(props);
        this.state = {
            errors: {
                owners: [],
                collaborators: []
            },
        };
    }

    onContinue = () => {
        const validForm = this.validateForm();
        if (validForm) {
            this.changeStep(3);
        }
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
        const newOwner = {
            formTitle: value,
            role: '',
            ownerPercentage: '',
            wallet: '',
            email: '',
            isrc: '',
        }
        this.props.handleChange({ ...this.props.song, owners: [...this.props.song.owners, newOwner] });
    }

    addNewCollaborator = (value) => {
        const newCollaborator = {
            formTitle: value,
            role: '',
            ownerPercentage: '',
            wallet: '',
            email: '',
            isrc: '',
        }
        this.props.handleChange({ ...this.props.song, collaborators: [...this.props.song.collaborators, newCollaborator] });
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
    
    handleChangeOwner = (index, key, value) => {
        const owners = [...this.props.song.owners];
        owners[index][key] = value;
        this.props.handleChange({ ...this.props.song, owners });
    }

    handleChangeCollaborator = (index, key, value) => {
        const collaborators = [...this.props.song.collaborators];
        collaborators[index][key] = value;
        this.props.handleChange({ ...this.props.song, collaborators });
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.props.handleChange({ ...this.props.song, [name]: value });
    }

    validateForm = () => {
		let errors = {};
		const { song } = this.props;
		errors = validateSoundOwnersForm(song);
        this.setState({ errors })
        if (Object.keys(errors).length > 0 && errors.constructor === Object) {
            console.log(errors);
            return false;
        }
        return true;
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
                    handleChange={this.handleChangeOwner}
                    errors={this.state.errors.owners}
                />        
                <InputBlock
                    metadataType="collaborator"
                    inputDataComponent={CollaboratorComponent}
                    data={this.props.song.collaborators} 
                    addNew={this.addNewCollaborator}
                    onDelete={this.onDeleteCollaborator}
                    handleChange={this.handleChangeCollaborator}
                    errors={this.state.errors.collaborators}
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