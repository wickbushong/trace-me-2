export const errorReducer = (state = [], action) => {
    console.log(action)
    switch (action.type) {
        case 'SERVER_ERROR':
            return {serverError: action.payload};
        case 'RESET_ERRORS':
            return {}
        default:
    }
}