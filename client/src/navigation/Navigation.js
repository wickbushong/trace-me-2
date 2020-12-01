import React from 'react';
import { NavLink } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import { connect } from 'react-redux';

import LoggedInNav from './LoggedInNav'
import AnonymousNav from './AnonymousNav';

class Navigation extends React.PureComponent {

    render() {
        const {business} = this.props
        return (
            <Navbar bg="dark" variant="dark" sticky="top" expand="md" >
                <Navbar.Brand as={NavLink} to="/">TraceMe</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    { business.id ? <LoggedInNav logOut={this.props.logOut} business={business} /> : <AnonymousNav />}
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

const mapStateToProps = state => {
    return {
        business: state.business
    }
}

export default connect(mapStateToProps)(Navigation)