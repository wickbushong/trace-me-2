export default function addBusiness(business) {
    return (dispatch) => {
        let options = {
            method: 'POST',
            headers: {"Content-Type": "application/json", "Accept": "application/json"},
            body: JSON.stringify({business})
        }
        fetch("http://localhost:3001/api/v1/businesses", options)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                debugger
                throw new Error('invalid new business');
            }
        })
                .then(result => {
                    if (result.errors) {
                        dispatch({type: "SIGNUP_ERROR", payload: result.errors})
                    } else { 
                        localStorage.loggedIn = true
                        dispatch({type: "LOGIN_BUSINESS", payload: result.business})
                        dispatch({type: "RESET_ERRORS"})
                    }
                })
                .catch(error => {
                    debugger
                    dispatch({type: "SERVER_ERROR", payload: error.message})
                })
    }
}