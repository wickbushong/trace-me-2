import React from 'react'
// import { connect } from 'react-redux'
import SignUpForm from '../components/auth/SignUpForm'

const SignUpPage = props => {
    // props destructuring
    return (
        <div>
            <h1>THIS IS THE SIGN UP PAGE</h1>
            <SignUpForm />
        </div>
    )
}

export default SignUpPage