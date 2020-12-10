import React from 'react'
import { connect } from 'react-redux'

import UserSignUpForm from '../components/auth/UserSignUpForm'

import addUser from '../actions/users/addUser'

const UserSignUpPage = ({addUser}) => {
    return (
        <div>
            <h1>let's get you signed up</h1>
            <p>all we need is some basic info - don't worry, we'll keep it to ourselves</p>
            <UserSignUpForm addUser={addUser} />
        </div>
    )
}

export default connect(null, {addUser})(UserSignUpPage)