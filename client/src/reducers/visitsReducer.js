export const visitsReducer = (state = [], action) => {
    switch (action.type) {
        case 'LOADING_VISITS':
            return {
                ...state,
                visits: [...state.visits],
                loading: true
            };
        case 'RENDER_VISITS':
            return action.payload
        case 'CHECKIN_VISIT':
            return [...state, action.payload]
        case 'CHECKOUT_VISIT':
            return state.filter(visit => visit.id !== action.payload.id)
        case 'LOGOUT':
            return [];
        default:
            return state;
    }
}
