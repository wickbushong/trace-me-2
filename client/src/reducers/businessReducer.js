export const businessReducer = (state = {business: {}}, action) => {
    console.log(action)
    switch (action.type) {
        case "ADD_BUSINESS":
            return {
                ...state,
                business: action.payload
            }
        case "LOGOUT_BUSINESS":
            return {business: {}}
        default:
            return state
    }
}
