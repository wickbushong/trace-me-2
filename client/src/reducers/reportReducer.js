export const reportReducer = (state = {}, action) => {
    console.log(action)
    switch (action.type) {
        case 'ADD_REPORT':
            return action.payload;
        default:
            return state;
    }
}