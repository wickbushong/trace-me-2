import React from 'react'

import { NavLink } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav'

const UserNav = ({logOut}) => {
    return (
        <Nav className="ml-auto">
            <Nav.Link as={NavLink} to="/report">Report</Nav.Link>
            <Nav.Link as={NavLink} to='/' onClick={logOut} >Log Out</Nav.Link>
        </Nav>
    )
}

export default UserNav