import React from 'react'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class BusinessSignUpForm extends React.PureComponent {
    constructor() {
        super()
        this.state = {
            name: '',
            phone: '',
            location: '',
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
        if (!this.passwordsMatch()) {
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
        this.passwordsMatch() ? this.props.addBusiness(this.state) : document.getElementById("confirmPassword").focus();
        // this.setState({
        //     name: '',
        //     phone: '',
        //     location: '',
        //     email: '',
        //     password: '',
        //     confirmPassword: ''
        // })
    }

    render() {
        return (
            <Form onSubmit={this.handleOnSubmit}>
                <Form.Group>
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
                    <Form.Label>Location</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={3}
                        name="location"
                        placeholder="Enter physical address"
                        value={this.state.location}
                        onChange={this.handleOnChange}
                    />
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
                        className="invalid"
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

export default BusinessSignUpForm