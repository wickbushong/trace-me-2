import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class SignUpForm extends React.PureComponent {
    constructor() {
        super()
        this.state = {
            name: '',
            phone: '',
            location: '',
            email: '',
            password: ''
        }
    }

    handleOnChange = e => {
        this.setState(prevState => {
            return {
            ...prevState,
            [e.target.name]: e.target.value
        }})
    }

    render() {
        return (
            <Form>
                <Form.Group controlId="formName">
                    <Form.Label>Name*</Form.Label>
                    <Form.Control 
                        type="text"
                        name="name"
                        placeholder="Enter business name"
                        required
                        value={this.state.name}
                        onChange={this.handleOnChange}
                    />
                </Form.Group>
                <Form.Group controlId="formPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control 
                        type="tel"
                        name="phone"
                        placeholder="Enter phone number"
                        value={this.state.name}
                        onChange={this.handleOnChange}
                    />
                    <Form.Text className="text-muted">
                        no dashes or parentheses please
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formLocation">
                    <Form.Label>Location</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={3}
                        name="location"
                        placeholder="Enter physical address"
                        value={this.state.name}
                        onChange={this.handleOnChange}
                    />
                </Form.Group>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email*</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        required 
                        value={this.state.name}
                        onChange={this.handleOnChange}
                    />
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label>Password*</Form.Label>
                    <Form.Control 
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        required
                        value={this.state.name}
                        onChange={this.handleOnChange}
                    />
                </Form.Group>
                <Button variant="info" type="submit">
                    Sign Up
                </Button>
            </Form>
        )
    }
}

export default SignUpForm