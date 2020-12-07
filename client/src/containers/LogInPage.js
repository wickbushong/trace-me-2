import React from 'react'
import { connect } from 'react-redux'

import LogInForm from '../components/auth/LogInForm'

import logInBusiness from '../actions/businesses/logIn'

const LogInPage = ({logInBusiness}) => {
    return (
        <div>
            <h1>come on in</h1>
            <LogInForm logInBusiness={logInBusiness}/>
        </div>
    )
}

export default connect(null, {logInBusiness})(LogInPage)