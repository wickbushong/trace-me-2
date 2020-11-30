export const visitsReducer = (state = [], action) => {
    console.log(action)
    switch (action.type) {
        case 'LOADING_VISITS':
            return {
                ...state,
                visits: [...state.visits],
                loading: true
            };
        case 'ADD_VISITS':
            // debugger
            return action.payload
            
            // {
            //     ...state,
            //     visits: action.payload,
            //     loading: false
            // }
        case 'CHECKIN_VISIT':
            return [...state, action.payload]
        case 'CHECKOUT_VISIT':
            return state.filter(visit => visit.id !== action.payload.id)
        case 'LOGOUT_BUSINESS':
            return [];
        default:
            return state;
    }
}
