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
            .then(response => response.json())
                .then(result => {
                    debugger
                    if (result.errors) {
                        dispatch({type: "LOGIN_ERROR", payload: result.errors})
                    } else { 
                        dispatch({type: "LOGIN_BUSINESS", payload: result})
                        dispatch({type: "RESET_ERRORS"})
                    }
                })
                .catch(result => {
                    dispatch({type: "SERVER_ERROR", payload: "web token not authenticated"})
                })
    }
}