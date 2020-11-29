import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'

class CurrentVisitorsList extends React.Component {

    render() {
        const business = this.props.business
        return(
            <>
                <br></br>
                <h1 className="text-center">CURRENT VISITORS</h1>
                <br></br>
                <ListGroup>
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
                <br></br>
                <Button
                        type="submit"
                        variant="info"
                        block
                >{}</Button>
            </>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         business: state.business
//     }
// }

export default CurrentVisitorsList