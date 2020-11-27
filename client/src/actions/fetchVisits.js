export const fetchVisits = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_VISITS' });
        fetch()
    }
}
