import { validateEmail } from './validatorHelper';

export const validateEmailForm = (data) => {
    let errors = {};
    if (data.first_name === '') {
        errors.first_name = true;
    }
    if (data.last_name === '') {
        errors.last_name = true;
    }
    if (data.email === '' || !validateEmail(data.email)) {
        errors.email = true;
    }
    if (data.notifications === false) {
        errors.notifications = true;
    }
    return errors;
}

export const validatePhoneForm = (data) => {
    let errors = {};
    if (data.phone === '') {
        errors.phone = true;
    }
    return errors;
}

export const validateCodeForm = (data) => {
    let errors = {};
    if (data.code === '') {
        errors.code = true;
    }
    return errors;
}