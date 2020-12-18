export default function checkIn(user, businessId) {
    return (dispatch) => {
        let visit_options = {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json", 
                "Accept": "application/json"
                // Authorization: `Bearer ${localStorage.jwt}`
            },
            body: JSON.stringify({user})
        }

        fetch(`http://localhost:3001/api/v1/businesses/${businessId}/visits`, visit_options)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('unable to record visit');
                }
            })
                .then(result => {
                    if (result.errors) {
                        dispatch({type: "VISIT_ERROR", payload: result.errors})
                    } else { 
                        dispatch({type: 'CHECKIN_VISIT', payload: result})
                    }
                })
                .catch(error => {
                    dispatch({type: "LOGOUT"})
                    dispatch({type: "SERVER_ERROR", payload: "token expired, please log back in"})
                })

    }
}