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
                .then(result => {
                    if (result.errors) {
                        console.log(result)
                        debugger
                    } else { 
                        dispatch({type: 'ADD_REPORT', payload: result})
                    }
                })
                .catch(result => {
                    console.log("hit CATCH - likely server error")
                    console.log(result)
                    debugger
                })

    }
}