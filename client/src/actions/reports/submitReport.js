export default function submitReport(report) {
    return (dispatch) => {
        let report_options = {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json", 
                "Accept": "application/json"
                // Authorization: `Bearer ${localStorage.jwt}`
            },
            body: JSON.stringify({report})
        }

        fetch(`http://localhost:3001/api/v1/reports`, report_options)
            .then(response => response.json())
                .then(result => {
                    if (result.errors) {
                        dispatch({type: 'REPORT_ERROR', payload: result.errors})
                    } else { 
                        dispatch({type: 'ADD_REPORT', payload: result})
                        dispatch({type: 'RESET_ERRORS'})
                    }
                })
                .catch(result => {
                    dispatch({type: "SERVER_ERROR", payload: "report was not recorded"})
                })

    }
}