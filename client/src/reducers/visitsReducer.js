export const visitsReducer = (state = { visits: [], business: {}, loading: false }, action) => {
    console.log(action)
    switch (action.type) {
        case 'LOADING_VISITS':
            return {
                ...state,
                visits: [...state.visits],
                loading: true
            };
        case 'ADD_VISITS':
            debugger
            return {
                ...state,
                visits: action.visits,
                loading: false
            }
        case 'CHECKIN_VISIT':
            return {
                state
            }
        case 'CHECKOUT_VISIT':
            return {
                state
            }
        default:
            return state;
    }
}
