import React from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return (
            <div className="nav nav-tabs">
                <div className="nav-item">
                    <NavLink
                        to='/'
                        exact
                        className='nav-link'
                    >Home</NavLink>
                </div>
            </div>
        )
    }
}

export default Nav