import { validateEmail } from "./validatorHelper";

export const validateSoundOwnersForm = (song) => {
    let errors = {
        owners: [],
        collaborators: []
    };

    let percentageSum = 0;

    const owners = [ ...song.owners ];
    for (const [index, owner] of owners.entries()) {
        let error = {}
        if (owner.role === '') {
            error.role = true;
        }
        if (owner.ownerPercentage === '' || isNaN(owner.ownerPercentage)) {
            error.ownerPercentage = true;
        }
        if (owner.email === '' || !validateEmail(owner.email)) {
        }
        percentageSum = percentageSum + Number(owner.ownerPercentage);
        for (const [otherIndex, otherOwner] of owners.entries()) {
            if (otherOwner.email === owner.email && otherIndex !== index) {
                error.email = true;
                break;
            }
        }
        if (Object.keys(error).length > 0 && error.constructor === Object) {
            errors.owners[index] = error;
        }
    }

    const collaborators = [ ...song.collaborators ];
    for (const [index, collaborator] of collaborators.entries()) {
        let error = {}
        if (collaborator.role === '') {
            error.role = true;
        }
        if (collaborator.ownerPercentage === '' || isNaN(collaborator.ownerPercentage)) {
            error.ownerPercentage = true;
        }
        if (collaborator.email === '' || !validateEmail(collaborator.email)) {
            error.email = true;
        }
        percentageSum = percentageSum + Number(collaborator.ownerPercentage);
        for (const [otherIndex, otherCollaborator] of collaborators.entries()) {
            if (otherCollaborator.email === collaborator.email && otherIndex !== index) {
                error.email = true;
                break;
            }
        }
        if (Object.keys(error).length > 0 && error.constructor === Object) {
            errors.collaborators[index] = error;
        }
    }
    if (percentageSum !== 100 && (collaborators.length > 0 || owners.length > 0)) {
        errors.percentageSum = true;
    }

    return errors;
}