import React from 'react';
import { NavLink } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import { connect } from 'react-redux';

import BusinessNav from './BusinessNav'
import AnonymousNav from './AnonymousNav';

const Navigation = ({business, user, logOut}) => {
    const entity = business.id || user.id ? business || user : null

    return (
        <Navbar bg="dark" variant="dark" sticky="top" expand="md" >
            <Navbar.Brand as={NavLink} to="/">
                {entity ? entity.name || entity.first_name : "TraceMe"}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                { entity ? <BusinessNav logOut={logOut} business={business} /> : <AnonymousNav />}
            </Navbar.Collapse>
        </Navbar>
    )
}

const mapStateToProps = ({business, user}) => {
    return {business, user}
}

export default connect(mapStateToProps)(Navigation)