export default function fetchVisits(businessId) {
    return (dispatch) => {
        // dispatch({ type: 'LOADING_VISITS' });
        let options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json", 
                "Accept": "application/json",
                Authorization: `Bearer ${localStorage.jwt}`
            }}

        fetch(`http://localhost:3001/api/v1/businesses/${businessId}/visits`, options)
            .then(response => response.json())
            .then(result => {
                if (result.errors) {
                    console.log(result)
                    debugger
                } else { 
                    dispatch({type: 'ADD_VISITS', payload: result})
                }
            })
            .catch(result => {
                console.log("hit CATCH - likely server error")
                console.log(result)
                debugger
            })
    }
}
