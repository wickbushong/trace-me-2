import React from 'react'
import { connect } from 'react-redux'

import Alert from 'react-bootstrap/Alert'

class Error extends React.PureComponent {
   
    render() {
        // const [show, setShow] = useState(true);
        const {errors} = this.props
        return (
            <Alert variant='danger'>
                {...errors}
            </Alert>
        )
    }


}

const mapStateToProps = state => {
    return {
        errors: state.errors
    }
}

export default connect(mapStateToProps)(Error)