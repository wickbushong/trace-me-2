export const businessReducer = (state = {}, action) => {
    switch (action.type) {
        case "LOGIN_BUSINESS":
            return action.payload
        case "LOGOUT_BUSINESS":
            return {}
        default:
            return state
    }
}
