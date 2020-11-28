export const businessReducer = (state = {}, action) => {
    console.log(action)
    switch (action.type) {
        case "ADD_BUSINESS":
            return action.payload
        default:
            return state
    }
}
