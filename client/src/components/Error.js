import React from 'react'
import { connect } from 'react-redux'

import Alert from 'react-bootstrap/Alert'

import resetErrors from '../actions/resetErrors'

class Error extends React.PureComponent {

    componentWillUnmount() {
        this.props.resetErrors()
    }
    
    handleClose = () => {
        this.props.resetErrors()
    }

    render() {
        // const [show, setShow] = useState(true);
        let {errors} = this.props
        return (
            <>
                { !!Object.keys(errors).length ? (
                    <Alert variant='danger' className="container">
                        {Object.keys(errors)}
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