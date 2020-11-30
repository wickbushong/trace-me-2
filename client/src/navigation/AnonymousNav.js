import React from 'react'
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

class AnonymousNav extends React.PureComponent {
    render() {
        return (
            <Nav className="container-fluid">
                <Nav.Link as={NavLink} to="/login">Log In</Nav.Link>
                <Nav.Link as={NavLink} to="/signup">Sign Up</Nav.Link>
                {/* <Nav.Link as={NavLink} to="/report" className="ml-auto">Report</Nav.Link> */}
                <Button variant="outline-danger" className="ml-auto" as={NavLink} to="/report">Report</Button>
            </Nav>
        )
    }
}

export default AnonymousNav
