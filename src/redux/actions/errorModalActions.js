export const openErrorModal = (data) => {
    return {
        type: 'OPEN_ERROR_MODAL',
        payload: data
    }
}

export const closeErrorModal = () => {
    return {
        type: 'CLOSE_ERROR_MODAL',
        payload: {}
    }
}