import React from 'react';
import { NavLink } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Navigation extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" sticky="top">
                <Navbar.Brand as={NavLink} to="/">TraceMe</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={NavLink} to="/login">Log In</Nav.Link>
                        <Nav.Link as={NavLink} to="/signup">Sign Up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            // <div className="nav nav-tabs">
            //     <div className="nav-item">
            //         <NavLink
            //             to='/'
            //             exact
            //             className='nav-link'
            //         >Home</NavLink>
            //     </div>
            // </div>
        )
    }
}

export default Navigation