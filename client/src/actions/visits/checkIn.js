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
            .then(response => response.json())
                .catch(result => {
                    debugger
                    dispatch({type: "LOGOUT"})
                    dispatch({type: "SERVER_ERROR", payload: "token expired, please log back in"})
                })
                .then(result => {
                    debugger
                    if (result.status < 400) {
                    //     dispatch({type: "VISIT_ERROR", payload: result.errors})
                    // } else { 
                        dispatch({type: 'CHECKIN_VISIT', payload: result})
                    }
                })

    }
}