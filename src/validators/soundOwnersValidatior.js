export const validateSoundOwnersForm = (song) => {
    let errors = {
        owners: [],
        collaborators: []
    };

    const owners = [ ...song.owners ];
    let ownerPercentageSum = 0;
    for (const [index, owner] of owners.entries()) {
        let error = {}
        if (owner.role === '') {
            error.role = true;
        }
        if (owner.ownerPercentage === '') {
            error.ownerPercentage = true;
        }
        if (owner.email === '') {
            error.email = true;
        }
        ownerPercentageSum = ownerPercentageSum + Number(owner.ownerPercentage);
        if (Object.keys(error).length > 0 && error.constructor === Object) {
            errors.owners[index] = error;
        }
    }
    if (ownerPercentageSum !== 100 && owners.length > 0) {
        errors.ownerPercentageSum = true;
    }

    const collaborators = [ ...song.collaborators ];
    let collaboratorPercentageSum = 0;
    for (const [index, collaborator] of collaborators.entries()) {
        let error = {}
        if (collaborator.role === '') {
            error.role = true;
        }
        if (collaborator.ownerPercentage === '') {
            error.ownerPercentage = true;
        }
        if (collaborator.email === '') {
            error.email = true;
        }
        collaboratorPercentageSum = collaboratorPercentageSum + Number(collaborator.ownerPercentage);
        if (Object.keys(error).length > 0 && error.constructor === Object) {
            errors.collaborators[index] = error;
        }
    }
    if (collaboratorPercentageSum !== 100 && collaborators.length > 0) {
        errors.collaboratorPercentageSum = true;
    }

    return errors;
}