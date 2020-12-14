export default function logIn(entity) {
    return (dispatch) => {
        let options = {
            method: "POST",
            credentials: 'include',
            headers: {"Content-Type": "application/json", "Accept": "application/json"},
            // headers: {
            //     "Content-Type": "application/json",
            //     "Accept": "application/json",
            //     "Access-Control-Allow-Credentials": "true"
            // },
            body: JSON.stringify({entity})
        }
        fetch("http://localhost:3001/api/v1/auth", options)
            .then(response => response.json())
                .then(result => {
                    debugger
                    if (result.errors) {
                        dispatch({type: "LOGIN_ERROR", payload: result.errors})
                    } else { 
                        // localStorage.jwt = result.jwt
                        dispatch({type: "LOGIN_BUSINESS", payload: result.business})
                        dispatch({type: "RESET_ERRORS"})
                    }
                })
                .catch(result => {
                    dispatch({type: "SERVER_ERROR", payload: "login failed"})
                })
    }
}