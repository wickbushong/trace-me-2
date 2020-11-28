export const businessReducer = (state = {}, action) => {
    console.log(action)
    switch (action.type) {
        case "ADD_BUSINESS":
            return action.payload
        case "LOGOUT_USER":
            return {}
        case "UPDATE_USER":
            return action.payload
        case "USER_ERROR":
            return {errors: action.payload}
        case "RESET_ERRORS":
            return action.payload
        default: 
            return state
    }
}
