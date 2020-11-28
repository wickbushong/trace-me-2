import React from 'react'
import { connect } from 'react-redux'
import LogInForm from '../components/auth/LogInForm'

const LogInPage = props => {
    // destructuring props 
    return (
        <div>
            <h1>come on in</h1>
            <LogInForm />
        </div>
    )
}

export default LogInPage