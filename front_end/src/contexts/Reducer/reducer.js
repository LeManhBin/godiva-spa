export const reducer = (state, action) => {
    switch (action.type) {
        case "OPEN_REGISTER": {
            return {
                ...state,
                isOpenRegisterModal: action.payload
            }
        }
        case "CLOSE_REGISTER": {
            return {
                ...state,
                isOpenRegisterModal: action.payload
            }
        }
        default:
            break;
    }
}
