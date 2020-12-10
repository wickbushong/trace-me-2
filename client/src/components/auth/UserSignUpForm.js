import React from 'react'

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

class UserSignUpForm extends React.PureComponent {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleOnChange = event => {
        this.setState(prevState => {
            return {
            ...prevState,
            [event.target.name]: event.target.value
        }})
    }

    handleConfirm = event => {
        event.preventDefault()
        if (this.state.confirmPassword !== this.state.password) {
            document.getElementById("confirmPassword").classList.add("is-invalid")
        } else {
            document.getElementById("confirmPassword").classList.remove("is-invalid")
            document.getElementById("confirmPassword").classList.add("is-valid")
        }
    }

    passwordsMatch = () => {
        return !!(this.state.password === this.state.confirmPassword)
    }
    
    handleOnSubmit = event => {
        event.preventDefault()
        this.passwordsMatch() ? this.props.addUser(this.state) : document.getElementById("confirmPassword").focus();
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
                
                <Form.Group>
                    <Form.Label>Phone</Form.Label>
                    <Form.Control 
                        type="tel"
                        name="phone"
                        placeholder="Enter phone number"
                        value={this.state.phone}
                        onChange={this.handleOnChange}
                    />
                    <Form.Text className="text-muted">
                        no dashes or parentheses please
                    </Form.Text>
                </Form.Group>
                
                <Form.Group>
                    <Form.Label>Email*</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        required 
                        value={this.state.email}
                        onChange={this.handleOnChange}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password*</Form.Label>
                    <Form.Control 
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter password"
                        required
                        value={this.state.password}
                        onChange={this.handleOnChange}
                        onKeyUp={this.handleConfirm}
                    />
                </Form.Group>   
                
                <Form.Group>
                    <Form.Control 
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="Confirm password"
                        required
                        value={this.state.confirmPassword}
                        onChange={this.handleOnChange}
                        onKeyUp={this.handleConfirm}
                    />
                    <div class="invalid-feedback">
                       passwords don't match
                    </div>
                </Form.Group>
                <Button variant="info" type="submit">
                    Sign Up
                </Button>
            </Form>
        )
    }
}

export default UserSignUpForm