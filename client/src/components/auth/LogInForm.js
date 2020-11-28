import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class LogInForm extends React.PureComponent {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
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
        this.props.logInBusiness(this.state)
        this.setState({
            email: '',
            password: ''
        })
    }

    render() {
        return (
            <Form onSubmit={this.handleOnSubmit}>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        required 
                        value={this.state.email}
                        onChange={this.handleOnChange}
                    />
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        required
                        value={this.state.password}
                        onChange={this.handleOnChange}
                    />
                </Form.Group>
                <Button variant="info" type="submit">
                    Log In
                </Button>
            </Form>
        )
    }
}

export default LogInForm