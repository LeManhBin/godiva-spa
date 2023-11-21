export const reducer = (state, action) => {
    switch (action) {
        case "TOGGLE_REGISTER": {
            console.log(state);
            return {
                ...state,
                isOpenRegisterModal: !state.isOpenRegisterModal
            }
        }
        default:
            break;
    }
}
