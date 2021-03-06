import React from 'react';
import { NavLink } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import { connect } from 'react-redux';

import BusinessNav from './BusinessNav'
import UserNav from './UserNav'
import AnonymousNav from './AnonymousNav';

const Navigation = ({business, user, logOut}) => {
    const brandName = business.name || user.first_name || "TraceMe"

    return (
        <Navbar bg="dark" variant="dark" sticky="top" expand="md" >
            <Navbar.Brand as={NavLink} to="/">
                {brandName}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                { business.id || user.id ? null : <AnonymousNav /> }
                { business.id ? <BusinessNav logOut={logOut} /> : null}
                { user.id ? <UserNav logOut={logOut} /> : null}
            </Navbar.Collapse>
        </Navbar>
    )
}

const mapStateToProps = ({business, user}) => {
    return {business, user}
}

export default connect(mapStateToProps)(Navigation)