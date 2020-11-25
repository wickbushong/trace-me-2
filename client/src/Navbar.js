import React from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <div class="nav nav-tabs">
                <NavLink
                    to='/'
                    exact

                >Home</NavLink>
            </div>
        )
    }
}