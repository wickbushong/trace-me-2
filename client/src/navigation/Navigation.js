import React from 'react';
import { NavLink } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { connect } from 'react-redux';
import logOut from '../actions/businesses/logOut'

import LoggedInNav from './LoggedInNav'
import AnonymousNav from './AnonymousNav';

class Navigation extends React.PureComponent {

    render() {
        const {business, logOut} = this.props
        return (
            <Navbar bg="dark" variant="dark" sticky="top" expand="md" >
                <Navbar.Brand as={NavLink} to="/">TraceMe</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    { business.id ? <LoggedInNav logOut={logOut}/> : <AnonymousNav />}
                    {/* <Nav className="container-fluid">
                        <Nav.Link as={NavLink} to="/login">Log In</Nav.Link>
                        <Nav.Link as={NavLink} to="/signup">Sign Up</Nav.Link>
                        <Nav.Link as={NavLink} to="/visits">Visitor Log</Nav.Link>
                        <Nav.Link as={NavLink} to="/report">Report</Nav.Link>
                        <Nav.Link className="ml-auto" as={NavLink} to='/logout' onClick={logOut} >Log Out</Nav.Link>
                    </Nav> */}
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

export default connect(mapStateToProps, {logOut})(Navigation)