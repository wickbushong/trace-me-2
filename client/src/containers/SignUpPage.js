import React from 'react'
// import { connect } from 'react-redux'
import SignUpForm from '../components/auth/SignUpForm'

const SignUpPage = props => {
    // props destructuring
    return (
        <div>
            <h1>let's get you signed up</h1>
            <p>all we need is some basic info about your business - don't worry, we'll keep it to ourselves</p>
            <SignUpForm />
        </div>
    )
}

export default SignUpPage