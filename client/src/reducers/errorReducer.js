export const errorReducer = (state = {}, action) => {
    console.log(action)
    switch (action.type) {
        case 'SERVER_ERROR':
            return {serverError: action.payload};
        case 'LOGIN_ERROR':
            return {loginError: action.payload}
        case 'RESET_ERRORS':
            return {}
        case 'LOGOUT_BUSINESS':
            return {}
        default:
            return state
    }
}