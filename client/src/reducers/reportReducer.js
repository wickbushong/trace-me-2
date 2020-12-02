export const reportReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_REPORT':
            return action.payload;
        case 'LOGOUT_BUSINESS':
            return {}
        default:
            return state;
    }
}