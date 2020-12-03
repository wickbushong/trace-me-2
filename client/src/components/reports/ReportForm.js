import React from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'

class ReportForm extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            testDate: ''
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
        // debugger
        let button = event.target.querySelector('button')
        button.classList.remove('btn-info')
        button.classList.add('btn-outline-danger')
        button.innerText = 'REPORT SUBMITTED'
        button.disabled = true
        let inputs = event.target.querySelectorAll('.form-control')
        Array.from(inputs).map(input => input.disabled = true)
        this.props.submitReport(this.state)
        // this.setState({
        //     firstName: '',
        //     lastName: '',
        //     email: ''
        // })
    }

    render() {
        return (
            <Form onSubmit={this.handleOnSubmit}>
                <br></br>
                <h1 className="text-center">SUBMIT A REPORT</h1>
                <label htmlFor="formName">Name</label>                    
                <InputGroup controlId="formName" className="mb-3" id="formName">
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
                        name="testDate"
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