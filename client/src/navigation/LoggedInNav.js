import React from 'react'

import { NavLink } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav'

const LoggedInNav = ({logOut}) => {
    return (
        <Nav className="ml-auto">
            <Nav.Link as={NavLink} to="/visits">Visitor Log</Nav.Link>
            <Nav.Link as={NavLink} to="/report">Report</Nav.Link>
            <Nav.Link as={NavLink} to='/logout' onClick={logOut} >Log Out</Nav.Link>
        </Nav>
    )
}

export default LoggedInNav