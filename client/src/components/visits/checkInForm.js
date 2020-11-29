import React from 'react'
import Form from 'react-bootstrap/Form'

class CheckInForm extends React.Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            phone: '',
            location: '',
            email: '',
            password: ''
        }
    }

    render() {
        return (
            <Form>

            </Form>
        )
    }
}

export default CheckInForm