const initalState = {
    open: false,
    errorMessage: '',
}

export const errorModal = (state = initalState, action) => {
    switch (action.type) {
        case 'OPEN_ERROR_MODAL':
            return {
                open: true,
                errorMessage: action.payload
            };
        case 'CLOSE_ERROR_MODAL':
            return initalState;
        default:
            return state;
    }
};
