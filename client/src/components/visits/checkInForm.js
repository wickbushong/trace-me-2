import React from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'


class CheckInForm extends React.PureComponent {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            phone: '',
            email: ''
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
        this.props.handleCheckIn(this.state)
        this.setState({
            firstName: '',
            lastName: '',
            phone: '',
            email: ''
        })
    }

    render() {
        return (
            <Form onSubmit={this.handleOnSubmit}>
                <br></br>
                <h1 className="text-center">CHECK IN</h1>

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

                <Form.Group controlId="formPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control 
                        type="tel"
                        name="phone"
                        placeholder="1234567890"
                        required
                        value={this.state.phone}
                        onChange={this.handleOnChange}
                    />
                    <Form.Text className="text-muted">
                        no parentheses or dashes
                    </Form.Text>
                </Form.Group>

                <Form.Group>
                    <Button
                        type="submit"
                        variant="info"
                        block
                    >Check In</Button>
                </Form.Group>
            </Form>
        )
    }
}

export default CheckInForm