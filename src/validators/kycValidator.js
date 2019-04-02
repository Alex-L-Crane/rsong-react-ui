export const validateKycForm = (kyc) => {
    let errors = {};
    if (kyc.country === '') {
        errors.country = true;
    }
    if (kyc.first_name === '') {
        errors.first_name = true;
    }
    if (kyc.last_name === '') {
        errors.last_name = true;
    }
    if (kyc.birthdate === '') {
        errors.birthdate = true;
    }
    if (kyc.gender === '') {
        errors.gender = true;
    }
    if (kyc.identification === '') {
        errors.identification = true;
    }
    if (kyc.kycID === '') {
        errors.kycID = true;
    }
    if (kyc.expiration === '') {
        errors.expiration = true;
    }
    if (kyc.cardFront === '') {
        errors.cardFront = true;
    }
    if (kyc.identification !== 'passport' && kyc.cardBack === '') {
        errors.cardBack = true;
    }
    if (kyc.selfie === '') {
        errors.selfie = true;
    }
    if (!kyc.tos) {
        errors.tos = true;
    }
    return errors;
}