import React from 'react';
import { NavLink } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Navigation extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#">TraceMe</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#">Log In</Nav.Link>
                    <Nav.Link href="#">Sign Up</Nav.Link>
                </Nav>
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