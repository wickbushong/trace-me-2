export default function checkIn(user, businessId) {
    return (dispatch) => {
        let visit_options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
                "Accept": "application/json",
                Authorization: `Bearer ${localStorage.jwt}`
            },
            body: JSON.stringify({user})
        }

        fetch(`http://localhost:3001/api/v1/businesses/${businessId}/visits`, visit_options)
            .then(response => response.json())
            .then(result => {
                debugger
                if (result.errors) {
                    dispatch({type: "VISIT_ERROR", payload: result.errors})
                } else { 
                    dispatch({type: 'CHECKIN_VISIT', payload: result})
                }
            })
            .catch(result => {
                dispatch({type: "SERVER_ERROR", payload: "unable to record visit"})
            })

    }
}