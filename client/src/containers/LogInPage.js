import React from 'react'
import { connect } from 'react-redux'

import LogInForm from '../components/auth/LogInForm'

import logInBusiness from '../actions/businesses/logIn'

const LogInPage = props => {
    let {logInBusiness} = props
    return (
        <div>
            <h1>come on in</h1>
            <LogInForm logInBusiness={logInBusiness}/>
        </div>
    )
}

const mapStateToProps = ({business, errors}) => {
    return {business, errors}
}

export default connect(mapStateToProps, {logInBusiness})(LogInPage)