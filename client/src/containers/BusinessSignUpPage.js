import React from 'react'
import { connect } from 'react-redux'

import BusinessSignUpForm from '../components/auth/BusinessSignUpForm'

import addBusiness from '../actions/businesses/addBusiness'

const BusinessSignUpPage = ({addBusiness}) => {
    return (
        <div>
            <h1>let's get you signed up</h1>
            <p>all we need is some basic info about your business - don't worry, we'll keep it to ourselves</p>
            <BusinessSignUpForm addBusiness={addBusiness} />
        </div>
    )
}

export default connect(null, {addBusiness})(BusinessSignUpPage)