export default function checkIn(user, businessId) {
    return (dispatch) => {
        let visit_options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
                "Accept": "application/json",
                Authorization: `Bearer ${localStorage.jwt}`
            },
            body: JSON.stringify({user})
        }

        fetch(`http://localhost:3001/api/v1/businesses/${businessId}/visits`, visit_options)
            .then(response => response.json())
            .then(result => {
                debugger
                if (result.errors) {
                    console.log(result)
                    debugger
                } else { 
                    dispatch({type: 'CHECKIN_VISIT', payload: result})
                }
            })
            .catch(result => {
                console.log("hit CATCH - likely server error")
                console.log(result)
                debugger
            })

    }
}