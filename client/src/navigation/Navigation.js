import React from 'react';
import { NavLink } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import { connect } from 'react-redux';

import BusinessNav from './BusinessNav'
import AnonymousNav from './AnonymousNav';

const Navigation = ({business, logOut}) => {
    return (
        <Navbar bg="dark" variant="dark" sticky="top" expand="md" >
            <Navbar.Brand as={NavLink} to="/">{business.id ? business.name : "TraceMe"}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                { business.id ? <BusinessNav logOut={logOut} business={business} /> : <AnonymousNav />}
            </Navbar.Collapse>
        </Navbar>
    )
}

const mapStateToProps = ({business}) => {
    return {business}
}

export default connect(mapStateToProps)(Navigation)