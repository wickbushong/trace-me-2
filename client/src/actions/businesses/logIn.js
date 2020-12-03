export default function logInBusiness(business) {
    return (dispatch) => {
        let options = {
            method: "POST",
            headers: {"Content-Type": "application/json", "Accept": "application/json"},
            body: JSON.stringify({business})
        }
        fetch("http://localhost:3001/api/v1/auth", options)
            .then(response => response.json())
                .then(result => {
                    if (result.errors) {
                        dispatch({type: "LOGIN_ERROR", payload: result.errors})
                    } else { 
                        localStorage.jwt = result.jwt
                        dispatch({type: "ADD_BUSINESS", payload: result.business})
                        // ^SHOULD THIS JUST BE PAYLOAD: RESULT???
                    }
                })
                .catch(result => {
                    console.log("hit CATCH - likely server error")
                    console.log(result)
                    debugger
                })
    }
}