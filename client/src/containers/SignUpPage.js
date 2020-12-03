import React from 'react'
import { connect } from 'react-redux'

import SignUpForm from '../components/auth/SignUpForm'
import Error from '../components/Error'

import addBusiness from '../actions/businesses/addBusiness'

const SignUpPage = props => {
    let {addBusiness, errors} = props
    return (
        <div>
            <Error errors={errors} />
            <h1>let's get you signed up</h1>
            <p>all we need is some basic info about your business - don't worry, we'll keep it to ourselves</p>
            <SignUpForm addBusiness={addBusiness} />
        </div>
    )
}

const mapStateToProps = ({errors}) => {
    return {errors}
}

export default connect(mapStateToProps, {addBusiness})(SignUpPage)