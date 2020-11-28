export default function addBusiness(business) {
    return (dispatch) => {
        let options = {
            method: 'POST',
            headers: {"Content-Type": "application/json", "Accept": "application/json"},
            body: JSON.stringify({business})
        }
        fetch("http://localhost:3001/businesses", options)
    }
}