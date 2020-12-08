export default function fetchVisits(businessId) {
    return (dispatch) => {
        // dispatch({ type: 'LOADING_VISITS' });
        let options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json", 
                "Accept": "application/json",
                Authorization: `Bearer ${localStorage.jwt}`
            }}

        fetch(`http://localhost:3001/api/v1/businesses/${businessId}/visits`, options)
            .then(response => response.json())
            .then(result => {
                if (result.errors) {
                    dispatch({type: "VISIT_ERROR", payload: result.errors})
                } else { 
                    dispatch({type: 'RENDER_VISITS', payload: result})
                }
            })
            .catch(result => {
                dispatch({type: "SERVER_ERROR", payload: "could not fetch active visits"})
            })
    }
}
