import React from 'react'

import { NavLink } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav'

const BusinessNav = ({logOut, entity}) => {
    const entityType = entity.name ? "business" : "user"
    
    return (
        <Nav className="ml-auto">
            { entityType === "business" ?  <Nav.Link as={NavLink} to="/visits">Visitor Log</Nav.Link> : null }
            {/* <Nav.Link as={NavLink} to="/visits">Visitor Log</Nav.Link> */}
            <Nav.Link as={NavLink} to="/report">Report</Nav.Link>
            <Nav.Link as={NavLink} to='/' onClick={logOut} >Log Out</Nav.Link>
        </Nav>
    )
}

export default BusinessNav