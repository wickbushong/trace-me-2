export default function logOut() {
    return (dispatch) => {
        let options = {
            method: "DELETE",
            credentials: 'include'
            // headers: {"Content-Type": "application/json", "Accept": "application/json"}
        }
        
        fetch("http://localhost:3001/api/v1/auth", options)
            .then(response => response.json())
                .then(result => {
                    console.log(result)
                    dispatch({type: "LOGOUT"})
                })
    }
}