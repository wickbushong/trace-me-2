export default function submitReport(report) {
    return (dispatch) => {
        let report_options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
                "Accept": "application/json",
                Authorization: `Bearer ${localStorage.jwt}`
            },
            body: JSON.stringify({report})
        }

        fetch(`http://localhost:3001/api/v1/reports`, report_options)
            .then(response => response.json())
                .then(result => dispatch({type: 'ADD_REPORT', payload: result}))

    }
}