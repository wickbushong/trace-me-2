import React from 'react'

import { NavLink } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

const AnonymousNav = () => {
    return (
        <Nav>
            <Nav.Link as={NavLink} to="/login">Log In</Nav.Link>
            <NavDropdown title="Sign Up" id="basic-nav-dropdown">
                <NavDropdown.Item as={NavLink} to="/signup/business">For Businesses</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to="/signup/user">For Customers</NavDropdown.Item>
            </NavDropdown>
        </Nav>
    )
}

export default AnonymousNav
