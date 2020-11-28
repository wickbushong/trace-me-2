import React from 'react';
import { NavLink } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import NavOptions from './NavOptions'
import { connect } from 'react-redux';

class Navigation extends React.PureComponent {
    

    render() {
        let { business } = this.props
        console.log(business)
        return (
            <Navbar bg="dark" variant="dark" sticky="top">
                <Navbar.Brand as={NavLink} to="/">TraceMe</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="container-fluid">
                    <Nav.Item>
                        <Nav.Link as={NavLink} to="/login">Log In</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={NavLink} to="/signup">Sign Up</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="ml-auto">
                        <Nav.Link as={NavLink} to='/logout'>Log Out</Nav.Link>
                    </Nav.Item>
                </Nav>
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