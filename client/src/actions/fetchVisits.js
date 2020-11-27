export const fetchVisits = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_VISITS' });
        fetch('http://localhost:3001/api/v1/visits')
            .then(response => response.json())
                .then(visits => dispatch({ type: 'ADD_VISITS', visits }))
    }
}
