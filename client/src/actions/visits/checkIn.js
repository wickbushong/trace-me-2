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
                .then(result => console.log(result))

        // type: 'CHECKIN_VISIT',
        // visitor
    }
}