export const businessReducer = (state = {}, action) => {
    switch (action.type) {
        case "LOGIN_BUSINESS":
            debugger
            return action.payload
        case "LOGOUT":
            return {}
        default:
            return state
    }
}
