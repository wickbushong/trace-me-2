export default function addBusiness(business) {
    return (dispatch) => {
        let options = {
            method: 'POST',
            headers: {"Content-Type": "application/json", "Accept": "application/json"},
            body: JSON.stringify({business})
        }
        fetch("http://localhost:3001/api/v1/businesses", options)
            .then(response => response.json())
                .then(result => {
                    if (result.errors) {
                        dispatch({type: "SIGNUP_ERROR", payload: result.errors})
                    } else { 
                        localStorage.jwt = result.jwt
                        dispatch({type: "LOGIN_BUSINESS", payload: result.business})
                        dispatch({type: "RESET_ERRORS"})

                    }
                })
                .catch(result => {
                    dispatch({type: "SERVER_ERROR", payload: result.message})
                })
    }
}