import React from 'react'
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'

class LoggedInNav extends React.PureComponent {
    render() {
        return (
            <Nav className="container-fluid">
                <Nav.Link as={NavLink} to="/visits">Visitor Log</Nav.Link>
                <Nav.Link as={NavLink} to="/report">Report</Nav.Link>
                <Nav.Link className="ml-auto" as={NavLink} to='/logout' onClick={this.props.logOut} >Log Out</Nav.Link>
            </Nav>
        )
    }
}

export default LoggedInNav