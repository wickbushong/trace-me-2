import React from 'react'

import { NavLink } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav'

const BusinessNav = ({logOut}) => {
    
    return (
        <Nav className="container-fluid">
            <Nav.Link as={NavLink} to="/visits">Visitor Log</Nav.Link>
            <Nav.Link as={NavLink} to='/' onClick={logOut} >Log Out</Nav.Link>
        </Nav>
    )
}

export default BusinessNav