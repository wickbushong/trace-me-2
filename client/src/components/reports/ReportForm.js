import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


class ReportForm extends React.Component {

    render() {
        return (
            <Form>
                
                <Button type="submit" variant="info" block >SUBMIT REPORT</Button>
            </Form>
        )
    }
}

export default ReportForm