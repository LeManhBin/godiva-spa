export const reducer = (state, action) => {
    switch (action) {
        case "TOGGLE_REGISTER": {
            return {
                ...state,
                isOpenRegisterModal: !state.isOpenRegisterModal
            }
        }
        default:
            break;
    }
}
