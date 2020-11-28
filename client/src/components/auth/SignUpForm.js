import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class SignUpForm extends React.PureComponent {

    render() {
        return (
            <Form>
                <Form.Group controlId="formName">
                    <Form.Label>Name*</Form.Label>
                    <Form.Control type="text" placeholder="Enter business name" required />
                </Form.Group>
                <Form.Group controlId="formPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="tel" placeholder="Enter phone number" />
                    <Form.Text className="text-muted">
                        no dashes or parentheses please
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formLocation">
                    <Form.Label>Location</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter physical address" />
                </Form.Group>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email*</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label>Password*</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" required />
                </Form.Group>
                <Button variant="info" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}

export default SignUpForm