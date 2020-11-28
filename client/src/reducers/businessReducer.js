export const businessReducer = (state = {}, action) => {
    console.log(action)
    switch (action.type) {
        case "ADD_BUSINESS":
            return {
                ...state,
                business: action.payload
            }
        case "LOGOUT_BUSINESS":
            return {}
        default:
            return state
    }
}
