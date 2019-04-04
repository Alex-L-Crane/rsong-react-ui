export const validateSoundOwnersForm = (song) => {
    let errors = {
        owners: [],
        collaborators: []
    };

    const owners = [ ...song.owners ];
    let ownerPercentageSum = 0;
    for (const [index, owner] of owners.entries()) {
        errors.owners[index] = {};
        if (owner.role === '') {
            errors.owners[index].role = true;
        }
        if (owner.ownerPercentage === '') {
            errors.owners[index].ownerPercentage = true;
        }
        if (owner.email === '') {
            errors.owners[index].email = true;
        }
        ownerPercentageSum = ownerPercentageSum + Number(owner.ownerPercentage);
    }
    if (ownerPercentageSum !== 100) {
        for (const [index, owner] of owners.entries()) {
            errors.owners[index].ownerPercentage = true;
        }
    }

    const collaborators = [ ...song.collaborators ];
    let collaboratorPercentageSum = 0;
    for (const [index, collaborator] of collaborators.entries()) {
        errors.collaborators[index] = {};
        if (collaborator.role === '') {
            errors.collaborators[index].role = true;
        }
        if (collaborator.ownerPercentage === '') {
            errors.collaborators[index].ownerPercentage = true;
        }
        if (collaborator.email === '') {
            errors.collaborators[index].email = true;
        }
        collaboratorPercentageSum = collaboratorPercentageSum + Number(collaborator.ownerPercentage);
    }
    if (collaboratorPercentageSum !== 100) {
        for (const [index, collaborator] of collaborators.entries()) {
            errors.collaborators[index].ownerPercentage = true;
        }
    }

    return errors;
}