import React from 'react'
import { connect } from 'react-redux'
import LogInForm from '../components/auth/LogInForm'
import logInBusiness from '../actions/businesses/logIn'

const LogInPage = props => {
    let {errors, logInBusiness} = props
    return (
        <div>
            <Error errors={errors}/>
            <h1>come on in</h1>
            <LogInForm logInBusiness={logInBusiness}/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        business: state.business,
        errors: state.errors
    }
}

export default connect(mapStateToProps, {logInBusiness})(LogInPage)