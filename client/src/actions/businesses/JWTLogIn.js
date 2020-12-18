export default function JWTLogIn() {
    return (dispatch) => {
        let options = {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json", 
                "Accept": "application/json"
                // Authorization: `Bearer ${token}`
            }
        }

        fetch("http://localhost:3001/api/v1/auth", options)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('please log back in');
                }
            })
                .then(result => {
                    if (result.errors) {
                        dispatch({type: "LOGIN_ERROR", payload: result.errors})
                    } else if (result.user) { 
                        dispatch({type: "LOGIN_USER", payload: result.user})
                        dispatch({type: "RESET_ERRORS"})
                    } else {
                        dispatch({type: "LOGIN_BUSINESS", payload: result.business})
                        dispatch({type: "RESET_ERRORS"})
                    }
                })
                .catch(error => {
                    delete localStorage.loggedIn
                    dispatch({type: "SERVER_ERROR", payload: error.message})
                })
    }
}