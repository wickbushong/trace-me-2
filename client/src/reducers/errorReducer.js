export const errorReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SERVER_ERROR':
            return {serverError: action.payload};
        case 'LOGIN_ERROR':
            return {loginError: action.payload}
        case 'SIGNUP_ERROR':
            return {signupError: action.payload}
        case 'REPORT_ERROR':
            return {reportError: action.payload}
        case 'VISIT_ERROR':
            return {visitError: action.payload}
        case 'RESET_ERRORS':
            return {}
        case 'LOGOUT_BUSINESS':
            return {}
        default:
            return state
    }
}