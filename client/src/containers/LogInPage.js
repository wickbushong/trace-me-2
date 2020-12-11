import React from 'react'
import { connect } from 'react-redux'

import LogInForm from '../components/auth/LogInForm'

import logIn from '../actions/logIn'

const LogInPage = ({logIn}) => {
    return (
        <div>
            <h1>come on in</h1>
            <LogInForm logIn={logIn}/>
        </div>
    )
}

export default connect(null, {logIn})(LogInPage)