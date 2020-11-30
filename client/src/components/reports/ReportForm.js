import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
// var DateTimeField = require('react-bootstrap-datetimepicker');
// import {DateTime} from 'react-datetime-bootstrap'


class ReportForm extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            date: ''
        }
    }

    handleOnChange = event => {
        this.setState(prevState => {
            return {
            ...prevState,
            [event.target.name]: event.target.value
        }})
    }

    handleOnSubmit = event => {
        event.preventDefault()
        this.props.submitReport(this.state)
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            date: ''
        })
    }

    render() {
        return (
            <Form onSubmit={this.handleOnSubmit}>
                <label htmlFor="formName">Name</label>                    
                <InputGroup className="mb-3" id="formName">
                    <Form.Control 
                        type="text" 
                        placeholder="first"
                        name="firstName"
                        required
                        value={this.state.firstName}
                        onChange={this.handleOnChange}
                    />
                    <Form.Control 
                        type="text"
                        placeholder="last"
                        name="lastName"
                        required
                        value={this.state.lastName}
                        onChange={this.handleOnChange}
                    />
                </InputGroup>

                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="address@domain.com"
                        required 
                        value={this.state.email}
                        onChange={this.handleOnChange}
                    />
                </Form.Group>

                <Form.Group controlId="formDate">
                    <Form.Label>Date Test Was Administered</Form.Label>
                    <Form.Control 
                        type="date"
                        className="form-control datetimepicker-input" 
                        name="date"
                        value={this.state.date}
                        onChange={this.handleOnChange}
                    />
                </Form.Group>

                <Form.Group>
                    <Button type="submit" variant="info" block >SUBMIT REPORT</Button>
                </Form.Group>
            </Form>
        )
    }
}

export default ReportForm