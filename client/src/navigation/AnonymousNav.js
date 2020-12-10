import React from 'react'

import { NavLink } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'

const AnonymousNav = () => {
    return (
        <Nav className="container-fluid">
            <Nav.Link as={NavLink} to="/login">Log In</Nav.Link>
            <NavDropdown title="Sign Up" id="basic-nav-dropdown">
                <NavDropdown.Item as={NavLink}to="/signup/business">For Businesses</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to="/signup/user">For Customers</NavDropdown.Item>
            </NavDropdown>
            <Button variant="outline-danger" className="ml-auto" as={NavLink} to="/report">Report</Button>
        </Nav>
    )
}

export default AnonymousNav
