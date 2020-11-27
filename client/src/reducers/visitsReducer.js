const visitsReducer = (state = { visits: [], loading: false }, action) => {
    console.log(action)
    switch (action.type) {
        case 'LOADING_VISITS':
            return {
                ...state,
                visits: [...state.visits],
                loading: true
            };
        case 'ADD_VISITS':
            return {
                ...state,
                visits: action.visits,
                loading: false
            }
        default:
            return state;
    }
}

export default visitsReducer;