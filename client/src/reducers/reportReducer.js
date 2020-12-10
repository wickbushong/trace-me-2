export const reportReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_REPORT':
            return action.payload;
        case 'LOGOUT':
            return {}
        default:
            return state;
    }
}