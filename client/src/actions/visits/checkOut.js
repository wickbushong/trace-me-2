export default function checkOut(visitId) {
    return (dispatch) => {
        let visit_options = {
            method: "PATCH",
            credentials: "include",
            headers: {
                "Content-Type": "application/json", 
                "Accept": "application/json"
                // Authorization: `Bearer ${localStorage.jwt}`
            },
            body: JSON.stringify({visitId})
        }

        fetch(`http://localhost:3001/api/v1/visits/${visitId}`, visit_options)
            .then(response => response.json())
            .then(result => {
                if (result.errors) {
                    dispatch({type: "VISIT_ERROR", payload: result.errors})
                } else { 
                    dispatch({type: 'CHECKOUT_VISIT', payload: result})
                }
            })
            .catch(result => {
                dispatch({type: "SERVER_ERROR", payload: "check out failed"})
            })
    }
}