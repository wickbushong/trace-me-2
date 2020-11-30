import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// var DateTimeField = require('react-bootstrap-datetimepicker');
// import {DateTime} from 'react-datetime-bootstrap'


class ReportForm extends React.Component {

    render() {
        return (
            <Form>
                
                <Form.Group controlId="formDate">
                    <Form.Control type="date" id="date-input" className="form-control datetimepicker-input" />
                </Form.Group>
                <Button type="submit" variant="info" block >SUBMIT REPORT</Button>
            </Form>
        )
    }
}

export default ReportForm