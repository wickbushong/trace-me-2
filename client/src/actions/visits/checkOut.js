export default function checkOut(visitId) {
    return (dispatch) => {
        let visit_options = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json", 
                "Accept": "application/json",
                Authorization: `Bearer ${localStorage.jwt}`
            },
            body: JSON.stringify({visitId})
        }

        fetch(`http://localhost:3001/api/v1/visits/${visitId}`, visit_options)
            .then(response => response.json())
                // .then(result => dispatch({type: 'CHECKOUT_VISIT', payload: result}))
                .then(result => console.log(result))

    }
}