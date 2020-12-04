import React from 'react'
import { connect } from 'react-redux'

import Alert from 'react-bootstrap/Alert'

import resetErrors from '../actions/resetErrors'

class Error extends React.PureComponent {
    
    handleClose = () => {
        this.props.resetErrors()
    }

    render() {
        let {errors} = this.props
        let keys = Object.keys(errors)
        return (
            <>
                { !!keys.length ? (
                    <Alert variant='danger' className="container">
                        {keys.map(key => `${key} - ${errors[key]}`)}
                        <button type="button" class="close" aria-label="Close" onClick={() => this.props.resetErrors()}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </Alert>
                ) : null }
            </>
        )
    }


}

const mapStateToProps = state => {
    return {
        errors: state.errors
    }
}

export default connect(mapStateToProps, {resetErrors})(Error)