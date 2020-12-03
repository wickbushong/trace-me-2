export default function JWTLogIn(token) {
    return (dispatch) => {
        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
                "Accept": "application/json",
                Authorization: `Bearer ${token}`
            }
        }

        fetch("http://localhost:3001/api/v1/auth", options)
            .then(response => response.json())
                .then(result => {
                    if (result.errors) {
                        console.log(result)
                        debugger
                    } else { 
                        dispatch({type: "ADD_BUSINESS", payload: result})
                    }
                })
                .catch(result => {
                    console.log("hit CATCH - likely server error")
                    console.log(result)
                    debugger
                })
    }
}