import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const NavOptions = props => {
    let {business} = props
    if (business.id) {
        return (
            <Navbar.Brand as={NavLink} to="/">TraceMe</Navbar.Brand>
        )
    } else {
        return (
            <Nav className="container-fluid">
                <Nav.Item>
                    <Nav.Link as={NavLink} to="/login">Log In</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} to="/signup">Sign Up</Nav.Link>
                </Nav.Item>
                <Nav.Item className="ml-auto">
                    <Nav.Link as={NavLink} to='/logout'>Log Out</Nav.Link>
                </Nav.Item>
            </Nav>
        )
    }
}

export default NavOptions