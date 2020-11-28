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
                    localStorage.jwt = result.jwt
                    dispatch({type: "ADD_BUSINESS", payload: result.business})
                })
    }
}