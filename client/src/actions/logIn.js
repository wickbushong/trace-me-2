export default function logIn(entity) {
    return (dispatch) => {
        let options = {
            method: "POST",
            credentials: 'include',
            headers: {"Content-Type": "application/json", "Accept": "application/json"},
            body: JSON.stringify({entity})
        }
        fetch("http://localhost:3001/api/v1/auth", options)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('invalid email or password');
                }
            })
                .then(result => {
                    if (result.errors) {
                        dispatch({type: "LOGIN_ERROR", payload: result.errors})
                    } else if (result.user) { 
                        localStorage.loggedIn = "true"
                        dispatch({type: "LOGIN_USER", payload: result.user})
                        dispatch({type: "RESET_ERRORS"})
                    } else {
                        localStorage.loggedIn = "true"
                        dispatch({type: "LOGIN_BUSINESS", payload: result.business})
                        dispatch({type: "RESET_ERRORS"})
                    }
                })
                .catch(error => {
                    dispatch({type: "SERVER_ERROR", payload: error.message})
                })
    }
}